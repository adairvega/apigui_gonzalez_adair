<script>
	import axios from "axios";
	import {Carousel} from 'bootstrap';
	export let name;
	let lang = 'es-MX';
	let ApiKey = '67646533ff20f872ad220eca3ec84d9c';

	let cartelera = [];
	let dates = [];
	
	axios.get(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=${lang}&page=1`)
	.then(function (response) {
		dates = response.data.dates;
		cartelera = response.data.results;
	})
	.catch(function (error) {
		console.log(error);
	})
	.then(function () {
	});

	var myCarousel = document.querySelector('#myCarousel')
	var carousel = new Carousel(myCarousel, {
	interval: 150,
	wrap: false
	})
</script>

<main>
	<div class="container">
		<h2 class="my-5">¡{name} al almanaque de Peliculas!</h2>
		<h5 class="pb-4 fw-lighter">Adair Emanuel Gonzalez Vega - IDyGS - 9no A</h5>
		<h6 class="pb-4 fw-lighter d-inline">Estás es la cartelera del {dates.minimum} al {dates.maximum} usando una API de terceros.
		</h6>
		<a href="https://www.themoviedb.org/documentation/api" class="stretched-link mb-4" style="position: relative">The Movie DB</a>
		
		<div class="row mt-5">
			<div class="col-8 offset-2">
				<div id="carouselExampleCaptions" class="carousel slide" style="height: 100%; width: 100%;" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						{#each cartelera as estreno, i}
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="{i}" aria-label="Slide 2"></button>
						{/each}
					</div>
					
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="height: 100%; width: 20%;" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								
							</div>
						</div>
						{#each cartelera as estreno}
						<div class="carousel-item">
							<img src="https://image.tmdb.org/t/p/original{estreno.poster_path}" class="d-block w-100" style="height: 100%;" alt="...">
							<div class="carousel-caption d-none d-md-block" style="position: absolute;
							bottom: 20px;
							right: 20px;
							background-color: black;
							color: white;
							padding-left: 20px;
							padding-right: 20px;">
								<h5>{estreno.title}</h5>
								<p>{estreno.overview}</p>
							</div>
						</div>

						{/each}
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					  <span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					  <span class="carousel-control-next-icon" aria-hidden="true"></span>
					  <span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	<div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h2 {
		color: #002e5b;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>