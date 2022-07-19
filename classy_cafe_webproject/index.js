// scroll event on nevbar


 window.addEventListener("scroll",
 function(){
   if(window.pageYOffset>200){
     document.getElementById('navbar').style.position="fixed";
     document.getElementById('navbar').style.transition="all 1.5s ease-in-out";
  }
 });
// scroll event on list items color
window.addEventListener("scroll",function(){
  if(window.pageYOffset>200)
  {
    document.getElementById('items1').style.color="#FA4753";

    if(window.pageYOffset>530)
    {
      document.getElementById('items1').style.color="black";
    }
  }

  // items2 if else  condition ----->
  if(window.pageYOffset>530){
    document.getElementById('items2').style.color="#FA4753";
    if(window.pageYOffset>1290)
    {
      document.getElementById('items2').style.color="";


    }
  }
  else if(window.pageYOffset<1290)
  {
    document.getElementById('items2').style.color="";
  }

  // items3 condition 
  if(window.pageYOffset>1290)
  {
    document.getElementById('items3').style.color="#FA4753";

    if (window.pageYOffset>2070) {
      document.getElementById('items3').style.color="";
    document.getElementById('items2').style.borderBottom =""

    }
  }
  else if(window.pageYOffset<2070){
    document.getElementById('items3').style.color="";
  }

  // items4 condition 
  if(window.pageYOffset>2070)
  {
    document.getElementById('items4').style.color="#FA4753";

    if(window.pageYOffset>2850)
    {
      document.getElementById('items4').style.color="";
    }
  }
  else if(window.pageYOffset<2850)
  {
    document.getElementById('items4').style.color=""
  }

});

// ham burgger icon portion javascript code is here 
var icon = document.getElementById('icon');
var block =document.getElementById('blocks') //.classList.add(".rajesh");
var cross = document.getElementById('cross');
var click = document.getElementById('click');
console.log(block);
icon.addEventListener("click",function(){
    block.style.display="block";
    console.log("what do you want");
    click.style.display="none";
    cross.style.display="block";
   
    
  });
  cross.addEventListener("click",function(){
    block.style.display="none";
    click.style.display="block";
    // cross.style.display="none";
    console.log("what is this");
  });


// slider portiion javascript code  is here 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach((carousel) => {
    insertNumbers(carousel);

    carousel.querySelector(".prev").addEventListener("click", (e) => {
      minusItem(carousel);
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      plusItem(carousel);
    });

    insertDots(carousel);

    carousel.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", (e) => {
        let item = Array.prototype.indexOf.call(
          e.target.parentNode.children,
          e.target
        );

        showItems(carousel, item);
      });
    });

    showItems(carousel, 0);
  });
});

function insertNumbers(carousel) {
  const length = carousel.querySelectorAll(".item").length;
  for (let i = 0; i < length; i++) {
    const nmbr = document.createElement("div");
    nmbr.classList.add("numbertext");
    nmbr.innerText = i + 1 + " / " + length;

    carousel.querySelectorAll(".item")[i].append(nmbr);
  }
}

function insertDots(carousel) {
  const dots = document.createElement("div");
  dots.classList.add("dots");

  carousel.append(dots);

  carousel.querySelectorAll(".item").forEach((elem) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    carousel.querySelector(".dots").append(dot);
  });
}

function plusItem(carousel) {
  let item = currentItem(carousel);

  carousel
    .querySelectorAll(".item")
    [item].nextElementSibling.classList.contains("item")
    ? showItems(carousel, item + 1)
    : showItems(carousel, 0);
}

function minusItem(carousel) {
  let item = currentItem(carousel);

  carousel.querySelectorAll(".item")[item].previousElementSibling != null
    ? showItems(carousel, item - 1)
    : showItems(carousel, carousel.querySelectorAll(".item").length - 1);
}

function currentItem(carousel) {
  return [...carousel.querySelectorAll(".item")].findIndex(
    (item) => item.style.display == "block"
  );
}

function showItems(carousel, item) {
  if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined)
    carousel.querySelectorAll(".item")[currentItem(carousel)].style.display =
      "none";
  carousel.querySelectorAll(".item")[item].style.display = "block";

  if (carousel.querySelector(".dot.active") != null)
    carousel.querySelector(".dot.active").classList.remove("active");
  carousel.querySelectorAll(".dot")[item].classList.add("active");
}

// food product slider portion javascript code is here 

var next = document.querySelector(".nextslide");
var prev = document.querySelector(".prevslide");
// console.log(next,prev);
var product = document.querySelector(".slide");
console.log(product);
var i = 0;
prev.style.color="black";
next.addEventListener("click",function(){ 



    if(i==0){
      product.style.transform ="translateX(-13.5%)";
      product.style.overflow="visible";
      console.log("this a first");
    }
    if(i==1){
      product.style.transform="translateX(-28%)";
      
    }
    i++;

});
prev.addEventListener("click",function(){
  if(i==1){
    product.style.transform ="translateX(-15%)";
    product.style.overflow="visible";
    console.log("this a first");
  }
  if(i==0){
    product.style.transform="translateX(-0%)";
    
  }
  i--;


});


// sction sixth javascript code is here 
// var header = document.getElementsByClassName(".food-div");
// console.log(header,"are run");
// var btns = document.getElementsByClassName(".food-time");
// // console.log(btns,"ekdkdjkhdh");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   console.log(current,"dkfhfhfueryu");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
