let homeSearch = document.querySelector("#searchAtHome")



//taking input from input tag
homeSearch.addEventListener("input",function(){
    let search = homeSearch.value;  
    debouncing(search,1000);    
}) 

//bouncing it before fetching the api
let id;
let debouncing=(search,time)=>{
    if(id){
    clearTimeout(id);
    }
    id = setTimeout(function(){
    func(search);
    },time);
}

//fetch the api with the help of axios
let func = async (search)=>{
    let access_id = 'P8jZ5ccHQpvIY3JOxlwIN9uLUXo9wsVVUy6jnkteTEU';
    let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=${search}&client_id=${access_id}`);
    let dat = await res.json();
    append(dat.results);
}

let append=(array)=>{
    let images = document.querySelector("#images");
    images.innerHTML=null;
    array.map(function(e){
     let div = document.createElement("div");
     let image =  document.createElement("img");
     image.src=e.urls.small;
     div.append(image);
     images.append(div);
    })
    window.location.href = '#images';
 }