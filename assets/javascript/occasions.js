
      gsap.registerPlugin(ScrollTrigger);
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 30) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');
      });

      gsap.set('.gsap-hidden', { y: 40 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('#nav-logo',  { opacity: 1, y: 0, duration: 0.7, delay: 0.1 })
        .to('#nav-links', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to('#ph-label',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to('#ph-title',  { opacity: 1, y: 0, duration: 0.9 }, '-=0.5')
        .to('#ph-sub',    { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

      gsap.to('.occ-card', {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: { trigger: '.occ-card', start: 'top 85%' }
      });

      gsap.to('.cta-item', {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.gsap-section', start: 'top 80%' }
      });

      gsap.to('.newsletter-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.to('.newsletter-sub',   { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.to('.newsletter-form',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.25, scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.fromTo('#footer', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#footer', start: 'top 90%' } });
