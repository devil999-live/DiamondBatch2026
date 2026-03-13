/* ============================= */
/* RANDOM BACKGROUND IMAGES */
/* ============================= */

const bgImages = [

"images/classroom/20251204_042732.jpg",
"images/classroom/IMG_20240815_113906.jpg",
"images/events/20251220_092009.jpg",
"images/farewell/IMG-20260211-WA0028.jpg",
"images/playground/20251203_063727.jpg",
"images/rangoli/20251018_043438.jpg"

];

function changeBackground(){

let randomImage = bgImages[Math.floor(Math.random()*bgImages.length)];

let bg = document.getElementById("background-slideshow");

if(bg){
bg.style.backgroundImage = `url(${randomImage})`;
}

}

changeBackground();
setInterval(changeBackground,7000);



/* ============================= */
/* NAVIGATION BUTTON ACTIVE */
/* ============================= */

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(l=>{
l.classList.remove("active")
l.style.opacity="0.4"
})

this.classList.add("active")
this.style.opacity="1"

})

});



/* ============================= */
/* FULLSCREEN IMAGE LIGHTBOX */
/* ============================= */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",function(){

let lightbox=document.createElement("div")
lightbox.id="lightbox"

lightbox.style.position="fixed"
lightbox.style.top="0"
lightbox.style.left="0"
lightbox.style.width="100%"
lightbox.style.height="100%"
lightbox.style.background="rgba(0,0,0,0.9)"
lightbox.style.display="flex"
lightbox.style.justifyContent="center"
lightbox.style.alignItems="center"
lightbox.style.zIndex="9999"

let image=document.createElement("img")

image.src=this.src
image.style.maxWidth="90%"
image.style.maxHeight="90%"
image.style.border="3px solid #00ffff"
image.style.boxShadow="0 0 20px #00ffff"

lightbox.appendChild(image)

document.body.appendChild(lightbox)

lightbox.onclick=function(){
lightbox.remove()
}

})

});



/* ============================= */
/* GALLERY FILTER */
/* ============================= */

function filterGallery(category){

let sections=document.querySelectorAll(".gallery-section")

sections.forEach(section=>{

if(category==="all"){
section.style.display="block"
}

else if(section.classList.contains(category)){
section.style.display="block"
}

else{
section.style.display="none"
}

})

}



/* ============================= */
/* TIMELINE SCROLL ANIMATION */
/* ============================= */

document.addEventListener("DOMContentLoaded",function(){

let items=document.querySelectorAll(".timeline-item")

function showTimeline(){

items.forEach(item=>{

let top=item.getBoundingClientRect().top

if(top < window.innerHeight - 100){

item.classList.add("show")

}

})

}

window.addEventListener("scroll",showTimeline)

showTimeline()

})



/* ============================= */
/* START FAREWELL MUSIC ON NAV CLICK */
/* ============================= */

document.addEventListener("DOMContentLoaded",function(){

let music=document.getElementById("farewellMusic")

if(!music) return

navLinks.forEach(link=>{

link.addEventListener("click",function(){

music.play().catch(()=>{})

})

})

})
