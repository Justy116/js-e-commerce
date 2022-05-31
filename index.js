
// add img

const arrImg = ["./assets/img/image-product-1-thumbnail.jpg", "./assets/img/image-product-2-thumbnail.jpg", "assets/img/image-product-3-thumbnail.jpg", "./assets/img/image-product-4-thumbnail.jpg"];
let containerImg = document.querySelector(".container-img-thumbnail");
let img1 = document.querySelector(".img-shoes")


for(i=0; i<arrImg.length; i++){
    let img = document.createElement("img");
    img.src = arrImg[i];
    containerImg.append(img)
    img.classList.add("img-thumbnail")
}

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