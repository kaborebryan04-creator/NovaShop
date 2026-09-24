const btnsearch = document.querySelector(".search-btn")
const inputsearch = document.querySelector(".search-box")
const closesearch = document.querySelector(".search-close")
const verysearch = document.querySelector("input[type='text']")
const productname = document.querySelectorAll(".product-content h3")

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

    resultat = 0

    productname.forEach(function (product){
     let namepro = product.textContent.trim().toLowerCase()
        let cartproduit= product.parentElement.parentElement

        if(namepro.includes(search)){
            resultat++;
            cartproduit.style.display="";
    }else{
            cartproduit.style.display="none"
        }

})

})
