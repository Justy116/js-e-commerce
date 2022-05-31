
// add img
let img1 = document.querySelector(".img-shoes");

const img = document.querySelectorAll(".img-thumbnail");
img.forEach((e)=>{
    e.addEventListener("click", ()=>{
        img1.src = e.src.replace("-thumbnail", "");
    })
})

// add and remove shoes
let remove = document.getElementById("minius");
let add = document.getElementById("plus");
let number = document.getElementById("number");


remove.addEventListener("click", ()=>{
    if(number.innerText > 0){
        number.innerText --
    }
});

add.addEventListener("click", ()=>{
    number.innerText ++;
});