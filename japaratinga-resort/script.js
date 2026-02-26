/**
 * Japaratinga Lounge Resort
 */

document.addEventListener('DOMContentLoaded', () => {
    // Somente incia após as bibliotecas externas estarem carregadas
    window.addEventListener('load', () => {
        initLenis();
        initNavbar();
        initHeroAnimations();
        initCustomCursor();
        initSectionAnimations();
        initMagneticHover();
        initDepoimentos();
        initFAQ();
        initYear();
    });
});

/* ==========================================
   LENIS SMOOTH SCROLL
   ========================================== */
let lenis;

function initLenis() {
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integra Lenis com o GSAP ScrollTrigger
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0, 0);
        }
    }
}

/* ==========================================
   NAVBAR & SCROLL
   ========================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial
}

/* ==========================================
   HERO ANIMATIONS
   ========================================== */
function initHeroAnimations() {
    if (typeof gsap === 'undefined' || typeof SplitType === 'undefined') return;

    // SplitText using SplitType lib
    const title = new SplitType('#hero-title', { types: 'lines, words' });

    // Wrap lines for overflow hidden effect
    title.lines.forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('line-wrapper');
        wrapper.style.overflow = 'hidden';
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
    });

    const tl = gsap.timeline();

    tl.from(title.words, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.2
    })
        .to('.hero-subheadline', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, "-=0.8")
        .to('.hero-cta', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, "-=0.6");
}

/* ==========================================
   CUSTOM CURSOR
   ========================================== */
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const heroArea = document.querySelector('.hero-cursor-area');

    if (!cursor || !heroArea) return;

    // Posiciona o cursor no movimento do mouse
    heroArea.addEventListener('mousemove', (e) => {
        // Usando variáveis CSS nativas ou transform direto para performance
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

/* ==========================================
   SECTION ANIMATIONS (C & D)
   ========================================== */
function initSectionAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Parallax Image (Seção C)
    const parallaxImg = document.querySelector('.parallax-img');
    if (parallaxImg) {
        gsap.to(parallaxImg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.conceito',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Fade Up Text (Seção C)
    const conceitoText = document.querySelectorAll('.conceito-content > *');
    if (conceitoText.length) {
        gsap.from(conceitoText, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.conceito-content',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Gallery Reveal (Seção D)
    const galleryItems = gsap.utils.toArray('.gallery-item');
    if (galleryItems.length) {
        gsap.from(galleryItems, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.gallery-wall',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Mouse Tilt (Seção D)
    const tiltElements = document.querySelectorAll('.tilt-element');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width - 0.5) * 2;
            const yPercent = (y / rect.height - 0.5) * 2;

            gsap.to(el, {
                rotationY: xPercent * 5,
                rotationX: -yPercent * 5,
                transformPerspective: 1000,
                ease: 'power1.out',
                duration: 0.5
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                rotationY: 0,
                rotationX: 0,
                ease: 'power2.out',
                duration: 0.8
            });
        });
    });

    // Horizontal Cinematic Scroll (Seção E - Gastronomia)
    const gastroWrap = document.querySelector('.gastro-sticky-wrap');
    const gastroSlider = document.querySelector('.gastro-slider');
    const gastroWrapper = document.querySelector('.gastro-slider-wrapper');

    // Só aplica no desktop (>900px) conforme spec: "O Sticky Element desativa no mobile"
    if (gastroWrap && gastroSlider && window.innerWidth > 900) {

        let getScrollAmount = () => -(gastroSlider.scrollWidth - gastroWrapper.offsetWidth + 64); // 64 = padding/margin extra se tiver

        const tween = gsap.to(gastroSlider, {
            x: getScrollAmount,
            ease: "none"
        });

        ScrollTrigger.create({
            trigger: gastroWrap,
            start: "top top",
            end: "bottom bottom", // Vai usar o 300vh do wrap para definir a duração da animação no scroll
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true
        });
    }
}

/* ==========================================
   MAGNETIC HOVER (CTA PROMOÇÕES)
   ========================================== */
function initMagneticHover() {
    if (typeof gsap === 'undefined') return;

    const magneticWraps = document.querySelectorAll('.magnetic-wrap');

    magneticWraps.forEach(wrap => {
        const btn = wrap.querySelector('.btn-magnetic');
        if (!btn) return;

        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        wrap.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

/* ==========================================
   DEPOIMENTOS 
   ========================================== */
function initDepoimentos() {
    const slides = document.querySelectorAll('.depoimento-slide');
    const prevBtn = document.querySelector('.dep-prev');
    const nextBtn = document.querySelector('.dep-next');

    if (slides.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
}

/* ==========================================
   FAQ ACCORDION
   ========================================== */
function initFAQ() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');

        if (!header || !body) return;

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fechar os outros (opcional, mas elegante)
            items.forEach(otherItem => {
                otherItem.classList.remove('active');
                if (otherItem.querySelector('.accordion-body')) {
                    otherItem.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
}

function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}
