const btnsearch = document.querySelector(".search-btn")
const inputsearch = document.querySelector(".search-box")
const closesearch = document.querySelector(".search-close")
const verysearch = document.querySelector("input[type='text']")
const productname = document.querySelectorAll(".product-content h3")
const noresult = document.querySelector(".no-result")
const favoris = document.querySelectorAll(".product-favorite")

/*Recherche*/
btnsearch.addEventListener("click",function (){
    inputsearch.classList.add("active")
    verysearch.focus()
    verysearch.value = ''
})

closesearch.addEventListener("click", function (){
    inputsearch.classList.remove("active")
})

verysearch.addEventListener("input", function (){

    let search = verysearch.value.trim().toLowerCase();

    if (search !=="") {

    }
    let resultat = 0

    productname.forEach(function (product){
     let namepro = product.textContent.trim().toLowerCase()
        let cartproduit= product.parentElement.parentElement

        if(namepro.includes(search)){
            resultat++;
            console.log(resultat)
            cartproduit.style.display="";
    }else{
            cartproduit.style.display="none"
        }
})
    if(resultat === 0){
           noresult.textContent="Aucun produit trouvé"
        }else{
        noresult.textContent=""
    }

})
/*Fin Recherche*/

/*Favorie*/

favoris.forEach(function (favori){

    favori.addEventListener("click", function (){
        console.log("stpo")
          favori.classList.toggle("active")
    })

})






/* Fin Favorie*/