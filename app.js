let x = 1;
let y = 4;
let z = -1;
let firstPara = document.getElementById(para1);

if (x < 2){
    alert("X est plus petit que 2!")
}

if (y > 3){
    introductionElement = "Y est plus grand que 3 !";
}

if (z <= 0){
    alert("Z est inférieur ou égal à 0!")
}

if ( (x < 2) && (y > 3) && (z <= 0) ){
    console.log("X est plus petit que 2, Y est plus grand que 3 et Z est inférieur ou égale a 0, le test est donc vrai !")
}

if ( (x < 2 && y > 3) || z === -1){

}