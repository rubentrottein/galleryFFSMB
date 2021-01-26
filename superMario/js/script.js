const cartes = document.getElementsByTagName("aside");
const levels = document.getElementsByTagName("li");
const lightbox = document.getElementById("lightBox");
const gallery = ["Final Fantasy XII", "Super Mario"];
const level = ["home","characters", "enemy","boss","screen"];
let lvl = 'home';
var title = "Gallery JS: Super Mario";
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].addEventListener("click", function (){
    getLevel("home");
});
function test(){
    for (let i=0; i<gallery.length;i++){
        document.getElementsByTagName("figcaption")[i].innerHTML = gallery[i];
    }
}
    document.getElementsByTagName("h1")[0].innerHTML += (
    `<ul>
        <a href="../index.html"><ol>Accueil</ol></a>
        <a href="../ff12/index.html"><ol>`+gallery[0]+`</ol></a>
        <a href="index.html"><ol>`+gallery[1]+`</ol></a>
    </ul>`
);
for (let i=0; i<levels.length;i++){
    let subGallery= level[i].charAt(0).toUpperCase()+level[i].substr(1);
    levels[i].innerHTML = subGallery;
    levels[i].addEventListener("click", function (){
        if(i===0){i="home";}
        getLevel(i);
        for(let j=0; j<levels.length;j++){
            levels[j].style.background = "darkgreen";
        }
        this.style.background = "tomato";
    });
}
function getLevel(newLevel){
    lvl = newLevel;
    for (let i=0; i<cartes.length;i++){
        if (lvl === 'home'){
            cartes[i].innerHTML = "<img src='img/"+(i+1)+".png' />"
        } else{
            cartes[i].innerHTML = "<img src='img/"+level[lvl]+"/"+(i+1)+".png' />";
        }
    }
    
    for (let i=0; i<cartes.length;i++){
        cartes[i].addEventListener("click",function (){
            lightbox.classList.add('is-paused');
            reveal(i);
            for(let j=0; j<cartes.length;j++){
                cartes[j].style.boxShadow = "white 0 0 0 0";
            }
            this.style.boxShadow = "indianred 0 0 10px 10px";
        });
    }
}
    
function reveal(card){
    if (lvl==='home'){
        lightbox.innerHTML = "<img src='img/"+(card+1)+".png' />";
        lightbox.style.display = "block";
    } else {
        lightbox.innerHTML = "<img src='img/"+level[lvl]+"/"+(card+1)+".png' />";
    }
    lightbox.style.display = "block";
}

getLevel(lvl);