document.addEventListener("DOMContentLoaded", () => {
    
    const hasGSAP = typeof gsap !== 'undefined';
    const hasScrollTrigger = typeof ScrollTrigger !== 'undefined';
    const hasLenis = typeof Lenis !== 'undefined';

    let lenis = null;
    if (hasLenis) {
        try {
            lenis = new Lenis({
                duration: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            function raf(time) {
                if (lenis) lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            if (hasGSAP && hasScrollTrigger) {
                gsap.registerPlugin(ScrollTrigger);
                lenis.on('scroll', ScrollTrigger.update);
                gsap.ticker.add((time) => {
                    if (lenis) lenis.raf(time * 1000);
                });
                gsap.ticker.lagSmoothing(0, 0);
            }
        } catch (e) {
            console.warn("Lenis initialization failed:", e);
        }
    }

    /* =========================================
       CUSTOM CURSOR
       ========================================= */
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const mouseGlow = document.querySelector('.mouse-glow');

    document.addEventListener('mousemove', (e) => {
        if (mouseGlow && hasGSAP) {
            gsap.to(mouseGlow, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: "power2.out"
            });
        }
        if (cursor && hasGSAP) {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.05,
                ease: "power1.out"
            });
        }
        if (cursorFollower && hasGSAP) {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.25,
                ease: "power2.out"
            });
        }
    });

    const updateCursorHover = (isHovering) => {
        if (isHovering) {
            document.body.classList.add('hovered');
        } else {
            document.body.classList.remove('hovered');
        }
    };

    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        const interactiveSelector = 'a, button, select, input, textarea, [role="button"], .brand-item, .gallery-item, .flip-card';
        if (target.closest(interactiveSelector)) {
            updateCursorHover(true);
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target;
        const interactiveSelector = 'a, button, select, input, textarea, [role="button"], .brand-item, .gallery-item, .flip-card';
        if (target.closest(interactiveSelector)) {
            updateCursorHover(false);
        }
    });

    /* =========================================
       MOBILE NAV
       ========================================= */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* =========================================
       DATA INJECTION
       ========================================= */
    const generateCarCard = (car) => {
        return `
            <div class="car-card reveal-up">
                <div class="card-img-wrapper">
                    <img src="${car.image}" alt="${car.name}" loading="lazy" decoding="async">
                </div>
                <div class="card-content">
                    <span class="card-mfg">${car.manufacturer}</span>
                    <h3 class="card-title">${car.name}</h3>
                    <div class="card-specs">
                        <div class="spec-item">
                            <small>Engine</small>
                            <span>${car.engine}</span>
                        </div>
                        <div class="spec-item">
                            <small>Power</small>
                            <span>${car.hp}</span>
                        </div>
                        <div class="spec-item">
                            <small>Weight</small>
                            <span>${car.weight}</span>
                        </div>
                        <div class="spec-item">
                            <small>Top Speed</small>
                            <span>${car.topSpeed}</span>
                        </div>
                    </div>
                    <div class="card-racing-details">
                        <div><strong>Active Years:</strong> ${car.years}</div>
                        <div><strong>Championships:</strong> ${car.championships}</div>
                        <div><strong>Key Victories:</strong> ${car.victories}</div>
                    </div>
                    <p class="card-fact">${car.fact}</p>
                </div>
            </div>
        `;
    };

    const gt3Grid = document.getElementById('gt3-grid');
    if (window.gt3Cars && gt3Grid) {
        gt3Grid.innerHTML = window.gt3Cars.map(generateCarCard).join('');
    }

    const prototypeGrid = document.getElementById('prototype-grid');
    if (window.prototypeCars && prototypeGrid) {
        prototypeGrid.innerHTML = window.prototypeCars.map(generateCarCard).join('');
    }

    const timelineContainer = document.getElementById('timeline-container');
    if (window.raceWinners && timelineContainer) {
        timelineContainer.innerHTML = window.raceWinners.map((win) => `
            <div class="timeline-item reveal-up">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-year">${win.year}</div>
                    <h3>${win.event}</h3>
                    <div class="timeline-sub">${win.car} &bull; ${win.team}</div>
                    <p class="timeline-desc">${win.significance}</p>
                    <p class="timeline-highlights"><strong>Race Highlights:</strong> ${win.highlights}</p>
                </div>
            </div>
        `).join('');
    }

    const champList = document.getElementById('champ-list');
    if (window.championshipDetails && champList) {
        champList.innerHTML = window.championshipDetails.map(champ => `
            <div class="champ-item reveal-up">
                <div class="champ-header">
                    <span class="champ-icon">${champ.icon}</span>
                    <h4>${champ.name}</h4>
                </div>
                <span class="champ-fullname">${champ.fullName}</span>
                <p>${champ.desc}</p>
            </div>
        `).join('');
    }

    // --- GALLERY INJECTION (NO OVERLAY, NO TEXT) ---
    const galleryContainer = document.getElementById('masonry-gallery');
    if (window.galleryImages && galleryContainer) {
        galleryContainer.innerHTML = window.galleryImages.map(img => `
            <div class="gallery-item reveal-up">
                <img src="${img.src}" alt="" loading="lazy" decoding="async">
            </div>
        `).join('');
    }

    const factsGrid = document.getElementById('facts-grid');
    if (window.funFacts && factsGrid) {
        factsGrid.innerHTML = window.funFacts.map(fact => `
            <div class="flip-card reveal-up">
                <div class="flip-inner">
                    <div class="flip-front">
                        <span>Endurance Secret</span>
                        <h4>${fact.front}</h4>
                        <small style="color: #606065; letter-spacing: 1px;">Hover / Tap</small>
                    </div>
                    <div class="flip-back">
                        <p>${fact.back}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /* =========================================
       STATS ANIMATION
       ========================================= */
    if (hasGSAP && hasScrollTrigger) {
        const rankBars = document.querySelectorAll('.rank-bar');
        rankBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            ScrollTrigger.create({
                trigger: bar,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(bar, {
                        width: targetWidth,
                        duration: 1.8,
                        ease: "power3.out"
                    });
                },
                once: true
            });
        });

        const indicators = document.querySelectorAll('.comp-indicator span');
        indicators.forEach(ind => {
            const targetWidth = ind.style.width;
            ind.style.width = '0%';
            
            ScrollTrigger.create({
                trigger: ind,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(ind, {
                        width: targetWidth,
                        duration: 1.5,
                        ease: "power2.out"
                    });
                },
                once: true
            });
        });
    }

    /* =========================================
       PRIVACY POLICY MODAL
       ========================================= */
    const privacyBtn = document.getElementById('privacyPolicyBtn');
    const privacyModal = document.getElementById('privacy-modal');
    const closePrivacyBtn = document.getElementById('close-privacy-btn');
    const privacyOverlay = document.getElementById('privacy-overlay');

    if (privacyBtn && privacyModal) {
        privacyBtn.addEventListener('click', () => {
            privacyModal.classList.add('active');
            if (lenis) lenis.stop();
            if (hasGSAP) {
                gsap.to('#privacy-modal .modal-wrapper', {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out"
                });
            }
        });

        const closePrivacy = () => {
            privacyModal.classList.remove('active');
            if (lenis) lenis.start();
        };

        if (closePrivacyBtn) closePrivacyBtn.addEventListener('click', closePrivacy);
        if (privacyOverlay) privacyOverlay.addEventListener('click', closePrivacy);
    }

    /* =========================================
       BACK TO TOP BUTTON (Bottom)
       ========================================= */
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       FLOATING BACK TO TOP BUTTON
       ========================================= */
    const floatingBtn = document.getElementById('floatingTopBtn');

    if (floatingBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                floatingBtn.classList.add('show');
            } else {
                floatingBtn.classList.remove('show');
            }
        });

        floatingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       MODAL (Manufacturer Details)
       ========================================= */
    const mfgModal = document.getElementById('mfg-modal');
    const modalImg = document.getElementById('modal-img');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalHeritage = document.getElementById('modal-heritage');
    const modalStats = document.getElementById('modal-stats');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalOverlay = document.getElementById('modal-overlay');

    const openModal = (brandKey) => {
        const details = window.manufacturerDetails[brandKey];
        if (!details) return;

        modalImg.src = details.image;
        modalImg.alt = details.title;
        modalIcon.textContent = details.icon;
        modalTitle.textContent = details.title;
        modalHeritage.textContent = details.heritage;
        modalStats.textContent = details.stats;

        mfgModal.classList.add('active');
        if (lenis) lenis.stop();

        if (hasGSAP) {
            gsap.to('.modal-wrapper', {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            const modalWrapper = document.querySelector('.modal-wrapper');
            if (modalWrapper) {
                modalWrapper.style.opacity = '1';
                modalWrapper.style.transform = 'none';
            }
        }
    };

    const closeModal = () => {
        if (hasGSAP) {
            gsap.to('.modal-wrapper', {
                y: 40,
                scale: 0.95,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in",
                onComplete: () => {
                    mfgModal.classList.remove('active');
                    if (lenis) lenis.start();
                }
            });
        } else {
            mfgModal.classList.remove('active');
            if (lenis) lenis.start();
        }
    };

    document.querySelectorAll('.brand-item').forEach(item => {
        item.addEventListener('click', () => {
            const brandName = item.getAttribute('data-brand');
            openModal(brandName);
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    /* =========================================
       LIGHTBOX
       ========================================= */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    const attachGalleryLightbox = () => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightboxImg.src = imgSrc; 
                lightbox.classList.add('active');
                if (lenis) lenis.stop();
            });
        });
    };
    attachGalleryLightbox();

    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            if (lenis) lenis.start();
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                if (lenis) lenis.start();
            }
        });
    }

    /* =========================================
       NAVBAR SCROLL
       ========================================= */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       GSAP PAGE REVEAL & SCROLL ANIMATIONS
       ========================================= */
    const loaderElement = document.querySelector('.loader');
    if (hasGSAP) {
        const tlLoader = gsap.timeline();
        
        tlLoader.to('.progress', {
            width: '100%',
            duration: 1.5,
            ease: 'power2.inOut'
        })
        .to('.loader-content', {
            y: -30,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
        })
        .to('.loader', {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut'
        }, "-=0.1")
        .from('.navbar', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.3")
        .from('.hero-category-tag', {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, "-=0.5")
        .from('.hero-title, .hero-subtitle, .hero-ctas', {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out'
        }, "-=0.6")
        .from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 0.5
        }, "-=0.3");

        if (hasScrollTrigger) {
            // --- REVEAL-UP ANIMATION FOR TEXT AND CARDS ---
            const revealElements = document.querySelectorAll('.reveal-up');
            revealElements.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out"
                });
            });

            // --- COUNTER ANIMATION ---
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                
                ScrollTrigger.create({
                    trigger: counter,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(counter, {
                            innerHTML: target,
                            duration: 2.2,
                            ease: "power2.out",
                            snap: { innerHTML: 1 },
                            onUpdate: function() {
                                counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                            }
                        });
                    },
                    once: true
                });
            });
        }
    } else {
        if (loaderElement) {
            loaderElement.style.display = 'none';
        }
        document.querySelectorAll('.counter').forEach(counter => {
            counter.innerHTML = counter.getAttribute('data-target');
        });
    }
});