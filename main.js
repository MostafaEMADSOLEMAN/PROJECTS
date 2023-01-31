"use strict"
let finalresult = [];
    async function getmovies() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=c1f39b339d01d1948fcb86019af84c11`);
    let trendingmovies = await response.json();
    finalresult = trendingmovies.results;
}



function displaymovie() {
    let mainDiv = ``;
    for (let i = 0; i < finalresult.length; i++) {
        mainDiv += `   <div class="col-md-3">
    <div class="movielist text-center">
    <img class="w-100" src="https://image.tmdb.org/t/p/w500/${finalresult[i].poster_path}" alt="">
    <h2>${finalresult[i].title}</h2>
    <p>${finalresult[i].overview}</p>
    </div>
    </div>`

    }
    document.getElementById('rowdata').innerHTML = mainDiv;
}
async function run() {
    await getmovies();
    displaymovie();
}
run();
function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);





