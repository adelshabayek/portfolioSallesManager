import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.scss'],
})
export class SubHomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aiCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('bgVideo', { static: true })
  videoRef!: ElementRef<HTMLVideoElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private animationFrameId: any;

  profile: any;
  kpis: any[] = [];
  aiEvaluation: any;

  constructor(private el: ElementRef, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.profile = data.home.profile;
      this.kpis = data.home.kpis;
      // Adapt new AI structure
      const ai = data.home.aiEvaluation;
      this.aiEvaluation = {
        summary: ai.summary,
        labels: ai.categories.map((c: any) => c.label),
        values: ai.categories.map((c: any) => c.value),
        details: ai.categories,
      };
    });
  }

  ngAfterViewInit() {
    // 🧠 Force video to play after component initializes
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch((err) => {
      console.warn('Video autoplay blocked:', err);
    });

    // 🎨 Setup canvas animation
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));

    this.initParticles();
    this.animate();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
    cancelAnimationFrame(this.animationFrameId);
  }

  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  initParticles() {
    const numParticles = 100;
    const colors = ['#00f5ff', '#5d00ff', '#00ffaa'];

    this.particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
