import { Component ,ElementRef,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private el: ElementRef){}
  profile = {
    name: 'Ehab ElSayed Saleh',
    title: 'Territory Manager | Sales Manager | Senior Sales Accounts Manager for strategic customers | Business Development Manager',

    tagline: 'Driving Growth • Building Teams • Delivering Strategic Sales Success',
    summary: `Proven track record of 20+ years in sales leadership and business development,
              with expertise in closing high-value deals, leading enterprise/government accounts,
              and exceeding KPIs across GCC markets.`,
    contacts: {
      phone: '+966 503898146',
      email: 'esaleh1968@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ehab-elsayed-saleh-68035017/'
    }
  };

  kpis = [
    { label: 'Years of Experience', value: 20, icon: 'pi pi-briefcase' },
    { label: 'Strategic Deals Closed', value: '50+', icon: 'pi pi-chart-line' },
    { label: 'Enterprise Accounts', value: '100+', icon: 'pi pi-building' },
    { label: 'Revenue Growth', value: '3x', icon: 'pi pi-dollar' }
  ];

  aiEvaluation: any;

  ngOnInit(): void {
    // Simulated AI evaluation (from CV analysis)
    this.aiEvaluation = {
      leadership: 95,
      negotiation: 92,
      strategy: 94,
      communication: 89,
      adaptability: 87
    };
  }

   private ctx!: CanvasRenderingContext2D;
  private particles: { x: number; y: number; vx: number; vy: number }[] = [];
  private mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  ngAfterViewInit(): void {
    const canvas = document.getElementById('neutrons-bg') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    // generate particles (neutrons)
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1
      });
    }

    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = document.getElementById('neutrons-bg') as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  private animate() {
    const canvas = document.getElementById('neutrons-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;

    this.ctx.clearRect(0, 0, w, h);

    // move + draw particles
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // bounce on edges
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // draw glowing neutron
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = '#fff';
      this.ctx.fill();

      // connect to mouse (interactive aura)
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const distMouse = Math.sqrt(dx * dx + dy * dy);
      if (distMouse < 150) {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.strokeStyle = `#fff`;
        this.ctx.lineWidth = 0.8;
        this.ctx.stroke();
      }
    });

    // connect close particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `#fff`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
  
}
