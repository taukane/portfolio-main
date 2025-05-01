import { NavLink } from "react-router";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const panels = [
    {id: 0, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p><a href="https://mitsul.com.br" target="_blank" className="text-light" referrerPolicy="no-referrer">Mitsul / Mitsubishi</a> <small>/ 2023</small></p>, src: 'image/mitsul.jpg'},
    {id: 2, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: 'image/black-club-layout-v2.webp'},
    {id: 3, name: 'Direção de Arte', descricao: <p>Autoconf <small>/ 2006</small></p>, src: 'image/cafe-automatic.jpg'},
    {id: 4, name: 'Tabloides', descricao: <p>Desenvolvimento de embalagens Bulbo Led <small>/ 2020</small></p>, src: 'image/megamidia.webp'},
    {id: 5, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: 'image/sdlg-2012.webp'},
    {id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>CBD Med <small>/ 2018</small></p>, src: 'image/cbd-med-layout-home-logo.webp'},
    {id: 7, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2017</small></p>, src: 'image/sibras-site.webp'},
    {id: 8, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão Atacadista  <small>/ 2017</small></p>, src: 'image/taukane-port.jpg'},
    {id: 9, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: 'image/varios-taukane.webp'},
    {id: 10, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: 'image/emariot-2011.jpg'},
    {id: 11, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: 'image/volvo-facebook-toda-familia-tem.jpg'},
    {id: 12, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: 'image/work2_big.jpg'},
    {id: 13, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: 'image/jornal-independente-big.jpg'},
    {id: 14, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: 'image/taukane-port.jpg'},    
    {id: 15, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: 'image/inicio-taukane.jpg'}
    ];
    
    const thumbis = [
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/mitsul-thumb.jpg'},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/blackclub-thumb.png'},
    {id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
    {id: 4, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg'},
    {id: 5, name: 'Website Interface', src: 'image/laww-thumb.jpg'},
    {id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
    {id: 7, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
    {id: 8, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
    {id: 9, name: 'Website Interface', src: 'image/globo-renault-thumb.jpg'},
    {id: 10, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
    {id: 11, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
    {id: 12, name: 'Projeto Gráfico', src: 'image/work15.jpg'},
    {id: 13, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
    {id: 14, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
    {id: 15, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
    ];

function Portfolio() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
return (
<>
<span className="scroller"></span>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" href="#" to="/">
                Taukane
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link fw-bold disabled" aria-current="page" to="/portfolio-taukane">Portfolio +</NavLink>
            </li>
        </ul>
        </div>
    </div>
</nav>
<div className="container-fluid">
    <div className="row">
        <div className="col-12 col-xxl-8 mx-auto">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-xxl-8 mx-auto">
                            <Swiper
                                style={{
                                    '--swiper-pagination-color': '#f90',
                                    }}
                                modules={[FreeMode, Pagination, Thumbs]}
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
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
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                    },
                                }}
                                id="works"
                            >
                            {
                                thumbis.map((tumbis) =>(
                                    <SwiperSlide key={tumbis.id} >
                                        <a href="#ancora">
                                            <h4>{tumbis.name}</h4>
                                            <img
                                            src={tumbis.src} 
                                            alt={tumbis.name}
                                            />
                                        </a>
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>
                        </div>
                        <div className="col-12 col-xxl-8 mx-auto">
                            <Swiper
                                style={{
                                '--swiper-navigation-color': '#ff9900',
                                }}
                                modules={[FreeMode, Keyboard, Navigation, Thumbs]}
                                thumbs={{ swiper: thumbsSwiper }}
                                lazy={true.toString()}
                                loop={true}
                                zoom={true}
                                spaceBetween={40}
                                keyboard={{
                                    enabled: true,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                autoHeight={true}
                            >
                            {
                                panels.map((panel) => (
                                    <SwiperSlide key={panel.id} id="ancora">							
                                        <h5 className="pt-4 fw-bold text-light">{panel.name}</h5>
                                        {panel.descricao}
                                        <img 
                                        src={panel.src} 
                                        alt={panel.name}
                                        className="img-fluid rounded shadow-lg"
                                        loading="lazy"
                                        />
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
<a href="/portfolio" className="d-flex align-items-center justify-content-center my-5">
    <img
        src="image/prev.jpg"
        alt="Criação de sites Wordpress"
        title="Criação de sites Laravel"
        className="img-fluid rounded shadow-lg"
        width={50}
        height={50}
    />
</a>
</>
)
}

export default Portfolio