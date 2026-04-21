 
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
        .to('#ph-label',  { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .to('#ph-title',  { opacity: 1, y: 0, duration: 0.9 }, '-=0.5')
        .to('#ph-p1',     { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('#ph-p2',     { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to('#ph-btn',    { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');

      gsap.fromTo('#story-img-col', { xPercent: -5, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 });

      gsap.to('.phil-item', { opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out', scrollTrigger: { trigger: '.phil-item', start: 'top 85%' } });
      gsap.to('.stat', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.stat', start: 'top 85%' } });
      gsap.to('.tl-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.tl-title', start: 'top 85%' } });
      gsap.to('.tl-item', { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.tl-item', start: 'top 88%' } });

      gsap.fromTo('#exp-img-col', { xPercent: -6, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '#experience-section', start: 'top 75%' } });
      gsap.to('.exp-text', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '#exp-text-col', start: 'top 80%' } });

      gsap.to('.newsletter-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.to('.newsletter-sub',   { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.to('.newsletter-form',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.25, scrollTrigger: { trigger: '#newsletter-section', start: 'top 80%' } });
      gsap.fromTo('#footer', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#footer', start: 'top 90%' } });
