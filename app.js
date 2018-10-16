let movieList = document.getElementById("movie-list")
const LINK = "http://www.omdbapi.com/?s=batman&apikey=" + apiKey





function listData(){

  $.get(LINK, function(data){
    let count = 1;

    data.Search.map(function(each){
      let movie = `
      <ul>
      <div class="reveal">
      <img src="${each.Poster}"/>
      <div class="hidden">
   <div class="caption">
     <div class="centered">
      <a id="${count}" href="#"><h3>${each.Title}</h3></a> 
     </div>
     </div>
     </div>
     </div>
      </div>

      </ul>
      `

      movieList.insertAdjacentHTML("beforeend", movie)

let title = document.getElementById(count)
  count ++;


title.addEventListener("click", function(){



    $.get("http://www.omdbapi.com/?i=" + each.imdbID +"&apikey="+ apiKey, function(list){

      let movieItems = `
      <ul>
      <h3>${list.Title}</h3>
      <div class="reveal">
      <img src="${each.Poster}"/">
      </div>
      <p>${list.Writer}</p>
      <p>${list.Plot}</p>
      </ul>
      `
      movieList.insertAdjacentHTML("beforeend",movieItems)

      })
    })
})
})



}

listData()
