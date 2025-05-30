import { NavLink } from "react-router";
import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp' ]},
{
id: 2,
name: 'Branding + Website Interface + Desenvolvimento Wordpress',
descricao: <p>CBD Med <small>/ 2018</small></p>,
src: ['image/cbd-med-layout-home-logo.webp'],
},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp']},
{id: 4, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg']},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Emariot <small>/ 2012</small></p>, src: ['image/emariot-2011.jpg']},
{id: 6, name: 'Direção de Arte Redes Sociais', descricao: <p>Café Automatic <small>/ 2012</small></p>, src: ['image/cafe-automatic.jpg']},
{id: 7, name: 'Direção de Arte UI Design', descricao: <p>SDLG <small>/ 2012</small></p>, src: ['image/sdlg-2012.webp', 'image/sdlg-2012-2.jpg']},
{id: 8, name: 'Direção de Arte Web + Desenvolvimento', descricao:<p>Carmen Steffens / Loja Villa / Franquias Brasileiras...  <small>/ 2011</small></p>, src: ['image/taukane-port.jpg']},
{id: 9, name: 'Direção de Arte Web + Email Marketing + Desenvolvimento', descricao:<p>Diversos <small>/ 2008 / 2011</small></p>, src: ['image/varios-taukane.webp']},
{id: 10, name: 'Websites + Projetos Gráficos + Website Interface', descricao:<p>Diversos <small>/ 2004 / 2008</small></p>, src: ['image/inicio-taukane.jpg']},
{id:11,src: null,}
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
{id: 4, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/emariot-thumb.jpg'},
{id: 6, name: 'Direção de Arte Redes Sociais', src: 'image/cafe-automatic-thumb.jpg'},
{id: 7, name: 'Direção de Arte Web', src: 'image/sdlg-thumb.jpg'},
{id: 8, name: 'Direção de Arte Web', src: 'image/antigos-thumb.jpg'},
{id: 9, name: 'Direção de Arte Web', src: 'image/tauk-2008-thumb.jpg'},
{id: 10, name: 'Direção de Arte Web', src: 'image/tauk-2004-thumb.jpg'},
{id:11, last:<a href="/portfolio" className="d-block my-auto text-center">
    <p>Portfolio</p>
    <img
        src="image/prev.jpg"
        alt="< Portfolio Taukane"
        title="< Portfolio Taukane"
        className="img-fluid rounded shadow-lg border-0 opacity-100"
        width={50}
        height={50}
    />
</a>
},
];

import DarkModeToggle from './assets/DarkModeToggle.jsx';

function Portfolio() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const panelsSwiperRef = useRef(null);

const thumbs = useCallback((Swiper) => {
    setThumbsSwiper(Swiper);
}, []);

const hash = useCallback((Swiper) => {
    const hashNavigation = Swiper.params.hashNavigation;
    if (!hashNavigation) return;

    const updateHash = () => {
        const activeSlide = Swiper.slides[Swiper.activeIndex];
        if (activeSlide) {
            const hash = activeSlide.getAttribute('data-hash');
            if (hash) {
                document.location.hash = hash;
            }
        }
    };

    Swiper.on('slideChange', updateHash);
    Swiper.on('slideChangeTransitionEnd', updateHash);
    updateHash();
}, []);
return (
<>
<span className="scroller"></span>

<nav className="navbar navbar-expand-lg mb-5  bg-body-tertiary bg-gradient shadow-lg">
    <div className="container-fluid">
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir Navegação">
            <span className="navbar-toggler-icon"></span>
        </button>
        <DarkModeToggle />
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav my-3 hstack gap-5 d-block d-md-flex">
                <li className="nav-item h3">
                <NavLink className="nav-link" href="/" to="/">
                    Taukane
                </NavLink>
                </li>
                <li className="nav-item h3">
                <NavLink  className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item h3">
                <NavLink  className="nav-link fw-bold disabled" aria-current="page" to="/portfolio-taukane">Portfolio +</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
<Swiper
    style={{
        '--swiper-pagination-color': '#f90',
    }}
    lazy={true.toString()}
    modules={[FreeMode, Pagination, Thumbs, HashNavigation]}
    hashNavigation={{
        watchState: true,
    }}
    onSwiper={thumbs}
    loop={true}
    spaceBetween={10}
    pagination={{
        clickable: true,
    }}
    freeMode={true}
    watchSlidesProgress={true}
    breakpoints={{
        '@0.00': {
        slidesPerView: 3,
        spaceBetween: 8,
        },
        '@1.00': {
        slidesPerView: 4,
        spaceBetween: 10,
        },
        '@1.50': {
        slidesPerView: 6,
        spaceBetween: 20,
        },
    }}
    id="works">
    {thumbis.map((tumbis) => (
        <SwiperSlide key={tumbis.id} data-hash={`portfolio-${tumbis.id}`}                         
        loading="lazy">
            <a href="#ancora">
                <h4>{tumbis.name}</h4>
                {tumbis.src ? (
                    <img
                        src={tumbis.src}
                        alt={tumbis.name}
                    />
                ) : null}
            </a>
            {tumbis.last}
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
    ))}
</Swiper>
<Swiper
    style={{
        '--swiper-navigation-color': '#ff9900',
    }}
    modules={[Keyboard, Navigation, Thumbs, HashNavigation]}
    hashNavigation={{
        watchState: true,
    }}
    onSwiper={hash}
    thumbs={{ swiper: thumbsSwiper }}
    loop={true}
    spaceBetween={40}
    keyboard={{
        enabled: true,
    }}
    navigation={true}
    autoHeight={true}
    ref={panelsSwiperRef}>
    {panels.map((panel) => (
        <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} id="ancora">
            <h5 className="pt-4 ps-4 fw-bold text-light">{panel.name}</h5>
            <div className="ps-4">{panel.descricao}</div>
            {panel.src && panel.src.length > 0 ? (
                <Swiper
                    style={{ '--swiper-navigation-color': '#f40', 'height': 'auto' }}
                    lazy={true.toString()}
                    spaceBetween={40}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation={panel.src.length > 1}
                    pagination={{ clickable: true }}
                    autoHeight={true}>
                    {panel.src.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`${panel.name} - Design ${index + 1}`}
                                className={`img-fluid ${index === 0 ? 'rounded shadow-lg' : (index === 1 ? 'shadow' : '')}`}
                                loading="lazy"
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : null}
        </SwiperSlide>
    ))}
</Swiper>
<hr className="border-0"/>
</>
)}

export default Portfolio