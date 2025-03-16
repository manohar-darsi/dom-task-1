let container = document.createElement("div")
container.className="container"
function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then(Response=>Response.json())
    .then(data=>displayData(data))
    // .catch(err=>console.error(err))
}
function displayData(data){
    for(let obj of data){
    let item = document.createElement("div")
    item.className = "item"
    item.innerHTML=`
    <img class= "image" src="${obj.image}">
    <p class = "title">"${obj.title}"</p>-<span><b>"${obj.price}"</b></span>
    <p class ="category"><i><b>"${obj.category}"</i></b></p>
    <p class ="rating">"${obj.rating.rate}"⭐</p>
    ` 
        container.appendChild(item);
    }
    
    document.body.appendChild(container)
}
fetchData()

