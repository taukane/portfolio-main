const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp', null ]},
{
id: 2,
name: 'Branding + Website Interface + Desenvolvimento Wordpress',
descricao: <p>CBD Med <small>/ 2018</small></p>,
src: ['image/cbd-med-layout-home-logo.webp', null],
},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp', null]},
{id: 5, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg', null]},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Emariot <small>/ 2012</small></p>, src: ['image/emariot-2011.jpg', null]},
{id: 10, name: 'Direção de Arte Redes Sociais', descricao: <p>Café Automatic <small>/ 2012</small></p>, src: ['image/cafe-automatic.jpg', null]},
{id: 11, name: 'Direção de Arte UI Design', descricao: <p>SDLG <small>/ 2012</small></p>, src: ['https://raw.githubusercontent.com/taukane/portfolio-main/594e0fd0008231daa9b2afb0005d7d0aac9a4046/dist/image/sdlg-2012.webp?raw=true', 'image/sdlg-2012-2.jpg']},
{id: 12, name: 'Direção de Arte Web + Desenvolvimento', descricao:<p>Carmen Steffens / Loja Villa / Franquias Brasileiras...  <small>/ 2011</small></p>, src: ['image/taukane-port.jpg', null]},
{id: 13, name: 'Direção de Arte Web + Email Marketing + Desenvolvimento', descricao:<p>Diversos <small>/ 2008 / 2011</small></p>, src: ['image/varios-taukane.webp', null]},
{id: 14, name: 'Websites + Projetos Gráficos + Website Interface', descricao:<p>Diversos <small>/ 2004 / 2008</small></p>, src: ['image/inicio-taukane.jpg', null]},
{id:15,src: null,}
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
{id: 5, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/emariot-thumb.jpg'},
{id: 10, name: 'Direção de Arte Redes Sociais', src: 'image/cafe-automatic-thumb.jpg'},
{id: 11, name: 'Direção de Arte Web', src: 'image/sdlg-thumb.jpg'},
{id: 12, name: 'Direção de Arte Web', src: 'image/antigos-thumb.jpg'},
{id: 13, name: 'Direção de Arte Web', src: 'image/tauk-2008-thumb.jpg'},
{id: 14, name: 'Direção de Arte Web', src: 'image/tauk-2004-thumb.jpg'},
{id:15, last:<a href="/portfolio" className="d-block my-auto text-center">
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

import { NavLink } from "react-router";
import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DarkModeToggle from './assets/DarkModeToggle.jsx';

function Portfolio() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeHash, setActiveHash] = useState(null);
    const panelsSwiperRef = useRef(null);

    const thumbs = useCallback((Swiper) => {
        setThumbsSwiper(Swiper);
    }, [])

    const hash = useCallback((Swiper) => {
        const hash = Swiper.params.hashNavigation;
        if(!hash) return;

        const update = () => {
            const hash = Swiper.slides[Swiper.activeIndex].getAttribute('data-hash');
            if(!hash) return;
            document.location.hash = hash;
        }

        Swiper.on('slideChange', update);
        Swiper.on('slideChangeTransitionEnd', update);
    }, [])
return (
<>
<span className="scroller"></span>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Navegação">
            <span className="navbar-toggler-icon"></span>
        </button>
        <DarkModeToggle />
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav mt-3 hstack gap-5 d-block d-md-flex">
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
            slidesPerView: 2,
            spaceBetween: 3,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        '@1.50': {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }}
    id="works"
>
    {thumbis.map((tumbis) => (
        <SwiperSlide key={tumbis.id} data-hash={`slide-${tumbis.id}`}>
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
    ref={panelsSwiperRef}
>
    {panels.map((panel) => (
        <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} id="ancora">
            <h5 className="pt-4 ps-4 fw-bold text-light">{panel.name}</h5>
            <div className="ps-4">{panel.descricao}</div>
            {panel.src && panel.src.length > 0 ? (
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation={panel.src.length > 1}
                    pagination={{ clickable: true }}
                    autoHeight={true}
                >
                    <SwiperSlide>
                        <img
                            src={panel.src[0]}
                            alt={`${panel.name} - Design 1`}
                            className="img-fluid rounded shadow-lg"
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
                    </SwiperSlide>
                    {panel.src[1] && (
                        <SwiperSlide>
                            <img
                                src={panel.src[1]}
                                alt={`${panel.name} - Design 2`}
                                className="img-fluid shadow"
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
                        </SwiperSlide>
                    )}
                    {panel.src[2] && (
                        <SwiperSlide>
                            <img
                                src={panel.src[2]}
                                alt={`${panel.name} - Design 3`}
                                className="img-fluid"
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
                        </SwiperSlide>
                    )}
                    {panel.src[3] && (
                        <SwiperSlide>
                            <img
                                src={panel.src[3]}
                                alt={`${panel.name} - Design 4`}
                                className="img-fluid"
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
                        </SwiperSlide>
                    )}
                </Swiper>
            ) : null}
            
        </SwiperSlide>
    ))}

</Swiper>
<hr className="border-0"/>
</>
)
}

export default Portfolio
