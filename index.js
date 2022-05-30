
// add img

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

let imgThumbnail1 = document.getElementById("img-thumbnail1");
let imgThumbnail2 = document.getElementById("img-thumbnail2");
let imgThumbnail3 = document.getElementById("img-thumbnail3");
let imgThumbnail4 = document.getElementById("img-thumbnail4");

imgThumbnail1.addEventListener("click", ()=>{
    document.querySelector(".container-img img:not(.display-none)").classList.add("display-none");
    img1.classList.remove("display-none");
});

imgThumbnail2.addEventListener("click", ()=>{
    document.querySelector(".container-img img:not(.display-none)").classList.add("display-none");
    img2.classList.remove("display-none");
});

imgThumbnail3.addEventListener("click", ()=>{
    document.querySelector(".container-img img:not(.display-none)").classList.add("display-none");
    img3.classList.remove("display-none");
});

imgThumbnail4.addEventListener("click", ()=>{
    document.querySelector(".container-img img:not(.display-none)").classList.add("display-none");
    img4.classList.remove("display-none");
});


// add and remove shoes

let remove = document.getElementById("minius");
let add = document.getElementById("plus");
let number = document.getElementById("number");

remove.addEventListener("click", ()=>{
    number.value  --;
});

add.addEventListener("click", ()=>{
    number.value  ++;
});