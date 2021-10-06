let scale = document.getElementById('scale');
let title = document.getElementById('title');
let content1 = document.getElementById('card1');
let content2 = document.getElementById('card2');
let content3 = document.getElementById('card3');

scale.addEventListener("mouseover", function(){
    content1.style.transform = "scale(1,1)";
    content2.style.transform = "scale(1,1)";
    content3.style.transform = "scale(1,1)";
});

scale.addEventListener("mouseout", function(){
    content1.style.transform = "scale(1,0)";
    content2.style.transform = "scale(1,0)";
    content3.style.transform = "scale(1,0)";

});

console.log("coucou")