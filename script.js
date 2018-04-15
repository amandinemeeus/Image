function changePokemon(){
    img = document.getElementsByTagName("img");
    console.log(img);
    for (var i = 1; i<img.length; i++){
        console.log(i);
        img[i].addEventListener("click", function(){
            switchPokemon(i);
        });
    }
};

function switchPokemon(i){
   var img = document.getElementsByTagName("img");
   img[0].src = img[i].src;
};

window.onload = function(){
    changePokemon();
};

