
window.addEventListener("load", () => {

    fetch("https://rickandmortyapi.com/api/character")
    .then( async (data) => {
        const response = await data.json();
        console.log(response.results)


        const list = document.getElementById("films-list")


       response.results.forEach( film => {
        
        const cardtTile = document.createTextNode(film.name)

        const card = document.createElement("div")

        

        card.style.backgroundImage = `url(${film.image})`;

        card.className ="film-card"
        card.appendChild(cardtTile)
        list.appendChild(card)

       });
    })


})







/**
 *  .then((data) => data.json())
    .then((result => console.log(result.results)))

    const list = document.getElementById("films-list")

    res
 */