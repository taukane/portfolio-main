import {auto} from "@popperjs/core";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function dimOn() {
	document.getElementById("QuickView").style.display = "block";
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
	{id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Real Veiculos / Volkswagem <small>/ 2022</small></p>, src: 'image/Volkswagen-layout-site.png'},
	{id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda Veiculos <small>/ 2021</small></p>, src: 'image/honda-veiculos.jpg'},
	{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Autoconf <small>/ 2021</small></p>, src: 'image/layout-blog-autoconf-v2-01.jpg'},
	{id: 4, name: 'Projeto Gráfico', descricao: <p>Desenvolvimento de embalagens Bulbo Led<small>/ 2020</small></p>, src: 'image/facas-embalagens.png'},
	{id: 5, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: 'image/laww-layout-home-v2.webp'},
	{id: 6, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>CBD Med <small>/ 2018</small></p>, src: 'image/cbd-med-layout-home-logo.webp'},
	{id: 7, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2017</small></p>, src: 'image/probat-leogap.webp'},
	{id: 8, name: 'Direção de Arte', descricao:<p>Roldão Atacadista  <small>/ 2017</small></p>, src: 'image/roldao-posts.webp'},
	{id: 9, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: 'image/landing-reanult-globo.jpg'},
	{id: 10, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: 'image/marmoraria-florianopolis-2014.jpg'},
	{id: 11, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: 'image/zeta-estaleiro-redesign.jpg'},
	{id: 12, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: 'image/curitiba-cultura.jpg'},
	{id: 13, name: 'Direção de Arte', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: 'image/shopping-total.webp'},
	{id: 14, name: 'Direção de Arte Redes Sociais', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: 'image/work22_big.webp'},
	{id: 15, name: 'Direção de Arte Apresentação', descricao:<p>Boticário<small>/ 2012</small></p>, src: 'image/boticario.jpg'},
	{id: 16, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo<small>/ 2010</small></p>, src: 'image/gazeta.webp'},
];

const thumbis = [
	{id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg'},
	{id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg'},
	{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
	{id: 4, name: 'Website Interface UI', src: 'image/facas-embalagens-thumb.jpg'},
	{id: 5, name: 'Projeto Gráfico', src: 'image/laww-thumb.jpg'},
	{id: 6, name: 'Branding', src: 'image/cbd-med.jpg'},
	{id: 7, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
	{id: 8, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
	{id: 9, name: 'Website Interface UI', src: 'image/globo-renault-thumb.jpg'},
	{id: 10, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
	{id: 11, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
	{id: 12, name: 'Projeto Gráfico', src: 'image/curitiba-cultura-thumb.jpg'},
	{id: 13, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
	{id: 14, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
	{id: 15, name: 'Direção de Arte', src: 'image/boticario-thumb.jpg'},
	{id: 16, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg'},
];

function App() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<>
			<span className="scroller"></span>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="box">
							<h2>Taukane</h2>
							<p>Atuo em criação e desenvolvimento de interfaces visuais, para mídias online e off-line.
							</p>
						</div>
						<div className="box box-2">
							<h2>Designer</h2>
							<p>Experiências iniciadas em 2002 comunicando marcas nacionais e internacionais.
							</p>
						</div>
						<div className="box box-3">
							<h2>Web e Gráfico</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="apresenta rounded">
				<a
					onClick={dimOn}
					title="Designer Web e Grafico"
					href="#works"
				>
					<h1>Designer Curitiba</h1>
				</a>
				<div className="container">
					<div className="row">
						<div className="col-md-10 d-flex justify-content-md-end justify-content-center gap-5 mt-2 contact-infos">
							<div className="d-block">
								<a
									href="http://www.linkedin.com/in/taukane"
									title="Linkedin Taukane"
									rel="noopener"
									target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="#0a66c2"
										className="bi bi-linkedin"
										viewBox="0 0 16 16">
										<path
											d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
									</svg>
									<span className="btn btn-sm">Linkedin</span>
								</a>
							</div>
							<div className="d-block">
								<a
									href="https://github.com/taukane/portfolio-main"
									title="Github Taukane"
									rel="noopener"
									target="_blank">
									<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
										 data-view-component="true"
										 className="octicon octicon-mark-github v-align-middle color-fg-default">
										<path
											d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
									</svg>
									<span className="btn btn-sm">GitHub</span>
								</a>
							</div>
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
						className="portthumbs"
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
					width={50}
					height={50}
				/>
			</a>
		</>
	)
}

export default App