if(window.innerWidth > window.innerHeight){
    document.getElementById('social').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelector('#about p').style.fontSize = "2.70vh";
}

const projectObj = {
	feedReaderTesting: {
		id: 'feedReaderTesting',
		name: 'Feed Reader Testing',
		image: 'images/projects/feed-reader-testing.png',
		description: 'Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship',
		build: 'Test suite built with Jasmine',
		url: 'http://portfolio.threadkind.com/GWGND04-Feed-Reader-Testing/',
		repo: 'https://github.com/threadkind/GWGND04-Feed-Reader-Testing'
	},
	arcadeGameClone: {
		id: 'arcadeGameClone',
		name: 'Arcade Game Clone',
		image: 'images/projects/classic-arcade-game-clone.png',
		description: 'Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship',
		build: 'Built with HTML, CSS + (Object Oriented) Javascript',
		url: 'http://portfolio.threadkind.com/GWGND03-Classic-Arcade-Game-Clone/',
		repo: 'https://github.com/threadkind/GWGND03-Classic-Arcade-Game-Clone'
	},
	memoryGame: {
		id: 'memoryGame',
		name: 'Memory Game',
		image: 'images/projects/memory-game.png',
		description: 'Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/GWGND02-Memory-Game/',
		repo: 'https://github.com/threadkind/GWGND02-Memory-Game'
	},
	portfolioSite: {
		id: 'portfolioSite',
		name: 'Portfolio Site',
		image: 'images/projects/portfolio-site.png',
		description: 'Created as part of the Grow With Google Udacity Front End Web Developer Nanodegree Scholarship',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/GWGND01-Portfolio-Site/',
		repo: 'https://github.com/threadkind/GWGND01-Portfolio-Site'
	},
	pixelArtMaker: {
		id: 'pixelArtMaker',
		name: 'Pixel Art Maker',
		image: 'images/projects/pixel-art-maker.png',
		description: 'Created as part of the Udacity/Google Scholarship',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/udacity-google/Lesson%2021/Project%20-%20Pixel%20Art%20Maker/project-pixel-art-maker-starter-master/index.html',
		repo: 'https://github.com/threadkind/udacity-google/tree/master/Lesson%2021/Project%20-%20Pixel%20Art%20Maker/project-pixel-art-maker-starter-master'
	},
	tvSpinner: {
		id: 'tvSpinner',
		name: 'TV Spinner',
		image: 'images/projects/tv-spinner.png',
		description: 'Spinner to choose what to watch on TV',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/tv-game/index.html',
		repo: 'https://github.com/threadkind/tv-game'
	},
	bedtimeGame: {
		id: 'bedtimeGame',
		name: 'Bedtime Game',
		image: 'images/projects/bedtime-game.png',
		description: 'Bedtime routine game for children',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/schedule/index.html',
		repo: 'https://github.com/threadkind/schedule'
	},
	codevember: {
		id: 'codevember',
		name: 'Codevember 2017',
		image: 'images/projects/codevember.png',
		description: 'CodeVember is a challenge for developers creating a creative sketch a day in November',
		build: 'Built with HTML, CSS + Javascript',
		url: 'http://portfolio.threadkind.com/codevember2017/index.html',
		repo: 'https://github.com/threadkind/codevember2017'
	}
}


for (let i = 0; i < Object.values(projectObj).length; i++){
	const name = Object.values(projectObj)[i].name;
	const image = Object.values(projectObj)[i].image;
	const description = Object.values(projectObj)[i].description;
	const build = Object.values(projectObj)[i].build;
	const url = Object.values(projectObj)[i].url;

	document.querySelector('#projects').innerHTML +=
		`<div class="project">
            <img src="${image}">
            <a href="${image}" target="_blank">
              <div class="projectInfo hide">
                <h2>${name}</h2><br>
                <p>${description}</p><br>
                <p>${build}</p>
              </div>
            <div class="overlay"></div>
          </div>`

};

document.querySelector('#projects').addEventListener('mouseover', function(e){
	if(e.target.className === 'overlay'){
		e.target.previousElementSibling.classList.remove('hide');
	}
});

document.querySelector('#projects').addEventListener('mouseout', function(e){
	if(e.target.className === 'overlay'){
		e.target.previousElementSibling.classList.add('hide');

	}
});

