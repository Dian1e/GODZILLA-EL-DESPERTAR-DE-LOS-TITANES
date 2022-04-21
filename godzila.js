
var godzila,ghidorah,rodan,muto,mechagodzilla
var godimg, ghiimg, rodanimg, mutoimg, mechaimg;
var aliento, rasguñe, gruñido, cachetada, golpe;
var fondo, fondoimg;
var restartImg, gameOverImg;
var vida;

function preload(){
    godimg = loadAnimation("gruñido/gruñido-1.png","gruñido/gruñido-2.png","gruñido/gruñido-3.png","gruñido/gruñido-4.png","gruñido/gruñido-5.png.png");
   ghiimg = loadAnimation(" .png"," .png"," .png");
    aliento = loadAnimation(" .png"," .png"," .png");
    
    cachetada = loadAnimation(" .png"," .png"," .png");
    golpe = loadAnimation(" .png"," .png"," .png");
    rodan= loadAnimation(" .png"," .png"," .png");
    muto = loadAnimation(" .png"," .png"," .png");
    mecha = loadAnimation(" .png"," .png"," .png");

    fondo= loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
    
    
   restartImg = loadImage("restart.png")
   gameOverImg = loadImage("gameOver.png")
  gruñido = loadAnimation("gruñido/gruñido-1.png","gruñido/gruñido-3.png","gruñido/gruñido-5.png.png","gruñido/gruñido-9.png.png","gruñido/gruñido-12.png.png","gruñido/gruñido-17.png.png","gruñido/gruñido-19.png.png","gruñido/gruñido-22.png.png","gruñido/gruñido-24.png.png");
  }

  function setup() {
    createCanvas(600, 600);
  
    godzila = createSprite(200,200,20,50);
    godzila.addAnimation("godzila", godimg);
    godzila.addAnimation("gruñido", gruñido);
    godzila.scale = 0.5;
  
    
     fondo = createSprite(200,180,400,20);
    fondo.addImage("fondo",fondoimg);
    fondo.x = fondo.width /2;

    
    godzila.setCollider("rectangle",0,0,godzila.width,godzila.height);
    godzila.debug = true
     
    vida = 1000;
   
  }

  function draw() {
  
    background(180);
    //mostrar puntuación
   text("Vida: "+ vida, 500,50);
  
    if(gameState === PLAY){
 
      //dispara aliento atomico con r2
      if(keyDown("r2")) {
        godzila.changeAnimation("atomico", godimg);
      }

      //cambia ataque con L1
      if(keyDown("L1")) {
        var num = Math.ronund(random(1,2))

        if(num==1){
            godzila.changeAnimation("mordida", alientoimg);
        } else if (num==2){
            godzila.changeAnimation("cachetada", cachetadaimg);
        }
      }
         //golpear con la cola
      if(keyDown("x")) {
        godzila.changeAnimation("golpe", golpeimg);
      }
       
       //gruñe
       if(keyDown("left")) {
        godzila.changeAnimation("rasguñe");
      }
      
  
      if(vidas>=0){
          gameState = END;      
      }
    }
     else if (gameState === END) {
      
        fondo.velocityX = 0;
        godzila.velocityY = 0
        godzila.velocityX = 0
        
 
     }
    
   
    
    drawSprites();
  }