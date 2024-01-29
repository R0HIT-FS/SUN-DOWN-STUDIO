const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc = document.querySelector("#elem-container");
var fixedc = document.querySelector("#fixed-image");
elemc.addEventListener("mouseenter",function(){
    fixedc.style.display = "block";
})
elemc.addEventListener("mouseleave",function(){
    fixedc.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        fixedc.style.backgroundImage = `url(${image})`
    })
});

var img = document.getElementById("prightimg");
var lab = document.querySelectorAll(".lab");
var details = document.getElementById("prodet");
  lab.forEach(function(e){
    e.addEventListener("click",function(){
        if(e.innerHTML==="Design"){
            // img.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg")
            details.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        }
        else if(e.innerHTML === "Project"){
            // img.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg");
            details.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
        }
        else if(e.innerHTML === "Execution"){
            // img.setAttribute("src","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg");
            details.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
        }
    })
  })


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
  });


  var menu = document.getElementById("menu");
  var collapse = document.getElementById("collapse");
  var img = document.querySelector("nav img");
  var nav = document.querySelector("nav");
  var flag = 0;
  menu.addEventListener("click",function(){
    if(flag==0){
        collapse.style.top=0;
        img.style.opacity = 0;
        nav.style.borderBottom = "1px solid #bfbbb6";
        flag=1;
    }
    else{
        collapse.style.top='-100%';
        img.style.opacity = 1;
        nav.style.borderBottom = "none";
        flag=0;
    }     
  });

  var loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3000);