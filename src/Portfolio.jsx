const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp', null ]},
{
id: 2,
name: 'Branding + Website Interface + Desenvolvimento Wordpress',
descricao: <p>CBD Med <small>/ 2018</small></p>,
src: ['image/cbd-med-layout-home-logo.webp', null],
},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp', null]},
{id: 4, name: 'Projeto Gráfico e Direção de Arte Web', descricao: <p>Perini / Mercantil Rodrigues <small>/ 2017</small></p>, src: ['image/megamidia.webp', null]},
{id: 5, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg', null]},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Emariot <small>/ 2012</small></p>, src: ['image/emariot-2011.jpg', null]},
{id: 7, name: 'Direção de Arte Redes Sociais ', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: ['image/volvo-facebook-toda-familia-tem.jpg', null]},
{id: 8, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: ['image/shopping-total.jpg', null]},
{id: 9, name: 'Volvo CE Posts Facebook', descricao: <p>Direção de Arte Redes Sociais <small>/ 2012</small></p>, src: ['image/volvo-2012.jpg', null]},
{id: 10, name: 'Direção de Arte Redes Sociais', descricao: <p>Café Automatic <small>/ 2012</small></p>, src: ['image/cafe-automatic.jpg', null]},
{id: 11, name: 'Direção de Arte UI Design', descricao: <p>SDLG <small>/ 2012</small></p>, src: ['image/sdlg-2012.webp', null]},
{id: 12, name: 'Direção de Arte Web + Desenvolvimento', descricao:<p>Carmen Steffens / Loja Villa / Franquias Brasileiras...  <small>/ 2011</small></p>, src: ['image/taukane-port.jpg', null]},
{id: 13, name: 'Direção de Arte Web + Email Marketing + Desenvolvimento', descricao:<p>Diversos <small>/ 2008 / 2011</small></p>, src: ['image/varios-taukane.webp', null]},
{id: 14, name: 'Websites + Projetos Gráficos + Website Interface', descricao:<p>Diversos <small>/ 2004 / 2008</small></p>, src: ['image/inicio-taukane.jpg', null]},
{id:15,src: null,}
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
{id: 4, name: 'Projeto Gráfico e Direção de Arte Web', src: 'image/megamidia-thumb.jpg'},
{id: 5, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/emariot-thumb.jpg'},
{id: 7, name: 'Direção de Arte Redes Sociais', src: 'image/toda-familia-tem.jpg'},
{id: 8, name: 'Direção de Arte Redes Sociais', src: 'image/total-thumb.jpg'},
{id: 9, name: 'Direção de Arte Redes Sociais',  src: 'image/volvo-app-thumb.jpg'},
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
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DarkModeToggle from './assets/DarkModeToggle.jsx';

function Portfolio() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    <div className="container-fluid" loading="lazy">
        <div className="row">
            <div className="col-12 col-xxl-auto mx-auto">
                <Swiper
                    style={{
                        '--swiper-pagination-color': '#f90',
                        }}
                    modules={[FreeMode, Pagination, Thumbs]}
                    onSwiper={setThumbsSwiper}
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
                {
                    thumbis.map((tumbis) =>(
                        <SwiperSlide key={tumbis.id} >
                            <a href="#ancora">
                                <h4>{tumbis.name}</h4>
                                {tumbis.src ? (
                                    <img
                                    src={tumbis.src} 
                                    alt={tumbis.name}
                                    />
                                ): null
                                }
                            </a>
                            {tumbis.last}
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <div className="col-12 col-xl-11 col-xxl-auto mx-auto">
                <Swiper
                    style={{
                    '--swiper-navigation-color': '#ff9900',
                    }}
                    modules={[Keyboard, Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}

                    loop={true}
                    spaceBetween={40}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={true}
                    autoHeight={true}
                >
                {
                    panels.map((panel) => (
                        <SwiperSlide key={panel.id} id="ancora">							
                            <h5 className="pt-4 fw-bold text-light">{panel.name}</h5>
                            {panel.descricao}
                            {panel.src ? (
                                <>
                                    <img 
                                        src={panel.src[0]}
                                        alt={panel.name}
                                        className="img-fluid rounded shadow-lg"
                                    />
                                    {panel.src[1] && (
                                        <img 
                                            src={panel.src[1]}
                                    
                                            className="img-fluid rounded shadow-lg"
                                        />
                                    )}
                                </>
                            ) : null}
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <hr className="border-0"/>
        </div>
    </div>
</>
)
}

export default Portfolio
