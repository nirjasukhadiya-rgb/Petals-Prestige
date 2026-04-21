

      gsap.registerPlugin(ScrollTrigger);

      // ── Navbar scroll shadow ──
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 30) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');
      });

      // ── Hero entrance ──
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .to('#nav-logo', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        .to('#nav-links', { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to('#hero-heading', { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, '-=0.4')
        .to('#hero-btn',    { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');

      // Hero parallax on scroll
      gsap.to('#hero-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // ── Collection section ──
      gsap.to('.section-label', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.section-label', start: 'top 85%' }
      });
      gsap.to('.section-title', {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.section-title', start: 'top 85%' }
      });
      gsap.to('.product-card', {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: { trigger: '.product-card', start: 'top 88%' }
      });

      // ── Experience section ──
      gsap.fromTo('#exp-img-col',
        { xPercent: -6, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#experience-section', start: 'top 75%' }
        }
      );
      gsap.to('.exp-text', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '#exp-text-col', start: 'top 80%' }
      });

      // ── In Full Bloom ──
      gsap.to('.bloom-title', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.bloom-title', start: 'top 85%' }
      });
      gsap.to('.bloom-item', {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '.bloom-item', start: 'top 88%' }
      });

      // ── Newsletter ──
      gsap.to('.newsletter-title', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' }
      });
      gsap.to('.newsletter-sub', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' }
      });
      gsap.to('.newsletter-form', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.25,
        scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' }
      });

      // ── Footer fade ──
      gsap.fromTo('#footer',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '#footer', start: 'top 90%' }
        }
      );

      // Set initial states for all gsap-hidden elements
      gsap.set('.gsap-hidden', { y: 40 });


