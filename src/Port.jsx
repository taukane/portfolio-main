
import { NavLink } from "react-router";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Real Veiculos / Volkswagen <small>/ 2022</small></p>, src: 'image/Volkswagen-layout-site.png'},
{id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda Veiculos <small>/ 2021</small></p>, src: 'image/honda-veiculos.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Autoconf <small>/ 2021</small></p>, src: 'image/layout-blog-autoconf-v2-01.jpg'},
{id: 4, name: 'Projeto Gráfico', descricao: <p>Desenvolvimento de embalagens Bulbo Led<small>/ 2020</small></p>, src: 'image/facas-embalagens.png'},
{id: 5, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: 'image/laww-layout-home-v2.webp'},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>CBD Med <small>/ 2018</small></p>, src: 'image/cbd-med-layout-home-logo.webp'},
{id: 7, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2017</small></p>, src: 'image/probat-leogap.webp'},
{id: 8, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão Atacadista  <small>/ 2017</small></p>, src: 'image/roldao-posts.webp'},
{id: 9, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: 'image/landing-reanult-globo.jpg'},
{id: 10, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: 'image/marmoraria-florianopolis-2014.jpg'},
{id: 11, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: 'image/zeta-estaleiro-redesign.jpg'},
{id: 12, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: 'image/curitiba-cultura.jpg'},
{id: 13, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: 'image/shopping-total.webp'},
{id: 14, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: 'image/work22_big.webp'},
{id: 15, name: 'Direção de Arte Apresentação', descricao:<p>Boticário<small>/ 2012</small></p>, src: 'image/boticario.jpg'},
{id: 16, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo<small>/ 2010</small></p>, src: 'image/gazeta.webp'},
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg'},
{id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
{id: 4, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg'},
{id: 5, name: 'Website Interface', src: 'image/laww-thumb.jpg'},
{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 7, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
{id: 8, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
{id: 9, name: 'Website Interface', src: 'image/globo-renault-thumb.jpg'},
{id: 10, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
{id: 11, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
{id: 12, name: 'Projeto Gráfico', src: 'image/curitiba-cultura-thumb.jpg'},
{id: 13, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
{id: 14, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
{id: 15, name: 'Direção de Arte', src: 'image/boticario-thumb.jpg'},
{id: 16, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg'},
];

import * as bootstrap from 'bootstrap'

function Port() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
return (
<>
<span className="scroller"></span>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid d-flex justify-content-end">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" href="#" aria-current="page" to="/">
                Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link active" to="/portfolio">Portfolio</NavLink>
            </li>
        </ul>
        </div>
    </div>
</nav>
<div className="apresenta lh-007 rounded-bottom w-100 h-100">
    <a  title="Designer Web e Grafico"
        href="#works">
        <h1>Taukane / Portfolio Web Designer Curitiba</h1>
    </a>
    <div className="container">
        <div className="row">
            <div className="col-8 mx-auto">
                <h2>Desde 2002 Desenvolvendo Interfaces para Design <b>Web</b> e <b>Gráfico.</b></h2>
                <hr/>
                <h3>Experiência sólida em desenvolvimento web full-stack (front-end e back-end), desde a concepção da arquitetura da informação e wireframes até a implementação de interfaces UX/UI centradas no usuário.</h3>
                <hr/>
                <h4>Criação de identidades visuais para marcas e embalagens até a arte final para impressão.</h4>
            </div>
        </div>
    </div>
</div>
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
                    modules={[FreeMode, Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    lazy={true.toString()}
                    loop={true}
                    spaceBetween={40}
                    navigation={true}
                    grabCursor={true}
                    className="portfolio"
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
</>
)}

export default Port