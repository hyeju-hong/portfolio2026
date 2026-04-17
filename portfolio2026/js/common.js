$(function () {

// gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const scrollContainer = document.querySelector("[data-scroll-container]");

    


const imgTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro .right img',
            start: 'top 50%',
            end: 'top 50%+=1232',
            scrub: 1.5,
            pin: '.intro .right img',
            pinSpacing: true,
            pinReparent: true,
            onUpdate: (self) => {
                // 이미지 애니메이션 진행률 기준 split 클래스 적용
                if (self.progress >= 0.8) {
                    headline.classList.add('split');
                } else {
                    headline.classList.remove('split');
                }
            }
        }
    });

    imgTl.fromTo('.intro .right img',
        {
            
            scale: 0.4,
            transformOrigin: "right 44%",
            filter: 'brightness(0.7)'
        },
        {
            scrub: 0.2,
            scale: 0.6,
            filter: 'brightness(1.2)',
            ease: "power4.Out",
            duration: 3
        }
    );






 const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.line li');

    
    
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
             start: 'top 18%',
    end: 'bottom 10%',
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index),
        });
    });
    
    function setActive(index) {
        navItems.forEach(item => item.classList.remove('on'));
        navItems[index].classList.add('on');

    }

    navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const offset = window.innerHeight * 0.08; // start 값과 동일

        gsap.to(window, {
            duration: 0.2,
            scrollTo: {
                y: sections[index],
                offsetY: offset
            },
            ease: "power3.out"
        });
    });
});


    //value
    $('.txtAniBox .txtAni1').simplyScroll({
        speed: 4,
        pauseOnHover: true,
        pauseOnTouch: false,
        direction: 'forwards',
    });
    $('.txtAniBox .txtAni2').simplyScroll({
        speed: 4,
        pauseOnHover: true,
        pauseOnTouch: false,
        direction: 'forwards',
    });


//point_cards
    //카드 돌리기

    // const visionCards = gsap.utils.toArray('.point .card');
    const visionCards = gsap.utils.toArray('.point .card');
    visionCards.forEach((card, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: point,
                start: `center 60%`,

                end: `top+=${(i + 1) * 50} 50%`,
                scrub: 1.6,
            }
        });
        tl.fromTo(card, { rotationY: 0 }, {
            rotationY: 180,
            transformOrigin: "center center",
            ease: "power2.out",


        }, i * 0.8)
    })

    function applySimplyScroll(selector, speed = 4, direction = 'forwards') {
        $(selector).simplyScroll({
            speed,
            direction,
            //멈추는 상황
            pauseOnHover: true,
            pauseOnTouch: true,
        })
    }

    // applySimplyScroll('.point .list')

   // 최초 1회 실행 + 스크롤/리사이즈마다 갱신
    // updateLineWidth();
    // $(window).on("scroll resize", updateLineWidth);




})