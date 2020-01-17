// Project Section Script:
//Gallery Filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".project-gallery").children;
console.log(filterButtons);
for(let i=0; i<filterButtons.length;i++){
	//console.log(filterButtons[i]);
	filterButtons[i].addEventListener("click",function(){
		for(let j=0; j<filterButtons.length; j++){
			filterButtons[j].classList.remove("active");
		}
		this.classList.add("active");
		const target=this.getAttribute("data-target");
		for(let k=0; k<items.length; k++){
			items[k].style.display="none";
			if(target==items[k].getAttribute("data-id")){
				items[k].style.display="block";
			}
			if(target=="all"){
				items[k].style.display="block";

			}
		}
	});
}
//Lightbox enter and exit
const closeLightbox=document.querySelectorAll(".close-lightbox");
const lightboxes=document.querySelectorAll(".lightbox");
lightboxes.forEach((lightbox) => {
	lightbox.addEventListener("click",function(event){
		const lightboxImage=lightbox.querySelector("img");
		if(event.target!=lightboxImage){
			lightbox.classList.remove("show");
			lightbox.classList.add("hide");
		}
	})	
})

closeLightbox.forEach((elm) => {
	elm.addEventListener('click', (e) => {
		let caption = document.getElementById(e.target.dataset.captionId);
		caption.classList.add("hide");
		caption.classList.remove("show");
	})
})

const gallery= document.querySelector(".project-gallery");
const galleryItem= gallery.querySelectorAll(".gallery-item");

galleryItem.forEach(function(element){
	element.querySelector(".fa-plus").addEventListener("click",function(e){
		let caption = document.getElementById(e.target.dataset.captionId);
		caption.classList.remove("hide");
		caption.classList.add("show");
	});
});

//header fixed
window.onscroll=function(){
	const docScrollTop=document.documentElement.scrollTop;
	if(window.innerWidth>991){
		if (docScrollTop>100){
			document.querySelector("header").classList.add("fixed")
		}
		else{
			document.querySelector("header").classList.remove("fixed")
		}
	}
}

//Navigation bar active
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");
a.forEach(function(element){
	element.addEventListener("click",function(){
		for(let i=0;i<a.length;i++){
			a[i].classList.remove("active");
		}
		this.classList.add("active");
		document.querySelector(".navbar").classList.toggle("show");
	})
})

// Compessed navbar
const compressBar=document.querySelector(".compress-bar");
compressBar.addEventListener("click", function(){
	document.querySelector(".navbar").classList.toggle("show");
}) 