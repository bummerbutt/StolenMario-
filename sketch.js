
const spectres = []
const numSpectres = 4
let spectreCounter = 0
const heroMink = new Mink({x: 200, y: 280}, 120)
function preload(){
    objectsImg = loadImage('assets/Spectre.png')
    minkImg = loadImage('assets/Mink.png')
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)
  //  heroMink.images = loadMinkImages(minkImg)
    for(let i = 0; i < numSpectres; i++){
        spectres.push(objectsImg.get(0 * 15 , 1, 35, 35))
//animate spectre in video 10.1 -10 mins in
    }
   
}

function draw(){
    background(10, 90, 90)
    fill(0, 20, 30)
    rect(0, 400, 1000, 200)
    image(spectres[spectreCounter], 400, 100, 100, 100)
    image(spectres[spectreCounter], 300, 100, 100, 100)
    image(spectres[spectreCounter], 200, 100, 100, 100)
    image(spectres[spectreCounter], 100, 100, 100, 100)
    heroMink
    if(spectreCounter < spectres.length -1){
        spectreCounter ++
    }
    else {
        spectreCounter = 0
    }
}

