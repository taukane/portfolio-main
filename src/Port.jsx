
import { NavLink } from "react-router";


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function dimOn() {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}

function toTop() {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}
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

function Port() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
return (
    <>
        <span className="scroller"></span>
        <div className="container-fluid">
            <div className="row">
                <div className="col text-light">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/contato">
                    Contato
                </NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                </div>
            </div>
        </div>
        <div className="apresenta rounded">
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-xxl-8 mx-auto">
                <Swiper
                    style={{
                        '--swiper-pagination-color': '#f90',
                        }}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    pagination={{
                        clickable: true,
                        }}
                    lazy={true}
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
                    modules={[FreeMode, Pagination, Thumbs]}
                    id="works"
                >
                {
                    thumbis.map((tumbis) =>(
                        <SwiperSlide>
                            <a href="#ancora">
                                <h4>{tumbis.name}</h4>
                                <img key={tumbis.id} 
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
                    loop={true}
                    spaceBetween={40}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    lazy={true}
                    grabCursor={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="portfolio"
                    autoHeight={true}
                >
                {
                    panels.map((panel) => (
                        <>
                            <SwiperSlide>		
                                {({ isActive }) => (
                                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                                )}						
                                <h5 id="ancora" className="pt-4 fw-bold text-light">{panel.name}</h5>
                                {panel.descricao}
                                <img key={panel.id} 
                                src={panel.src} 
                                alt={panel.name}
                                className="img-fluid rounded shadow-lg"
                                />
                            </SwiperSlide>
                        </>
                    ))
                }
                </Swiper>
                </div>
            </div>
        </div>
        <a href="#" onClick={toTop} title="Topo Portfolio" id="topo">
            <img
                src="image/top.jpg"
                alt="Taukane - Diretor de Arte Web"
                title="Diretor de Arte Web Curitiba"
                className="img-fluid rounded shadow-lg"
                width={50}
                height={50}
            />
        </a>
    </>
)
}

export default Port