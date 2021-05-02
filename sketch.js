var xbotao=135;
var largurabotao=200;
var largurabotao2=150;
var alturabotao2=50;
var ybotao=170;
var ybotao2=250;
var ybotao3=330;
var ybotao4=400;
var ybotao5=440;
var alturabotao=70;
var xfase=10;
var xfase2=170;
var xfase3=330;
var yfase=345;
var vX = []
var vY = []
var xpersonagem = 220
var ypersonagem = 430
var qtElementos = 10
var qtElementos2 = 15
var qtElementos3 = 20
var imagemcorona;
var imagemeducadora;
var imagemprogramador;
var imagemcovid;
var imagemcovidgame;
var imagempersonagem;
var imagemhospital
var tela = 0;
// tela 0 = menu
// tela 1 = instruçoes
// tela 2 = creditos
// tela 3 = jogo
// tela 4 = Fase 1
// tela 5 = Fase 2
// tela 6 = Fase 3
// tela 7 = GameOver
// tela 8 = Fim
// tela 9 = Passou de Nível

function preload(){
  imagemeducadora = loadImage("dayse.jpg")
  imagemprogramador = loadImage("cleobulo.jpg")
  imagemcovid = loadImage("fundo.jpg")
  imagemcovidgame = loadImage("covid-game.svg")
  imagemcorona = loadImage("corona.png")
  imagempersonagem = loadImage("personagem.png")
  imagemhospital = loadImage("hospital.png")
}

function setup() {
  createCanvas(500, 500);
  for (i=0; i < 100; i++){
      vX[i] = random(400,800);
      vY[i] = random(1,400);
    }
}
   
  function draw(){
  //MENU
  if(tela == 0){
    background(100)
    image(imagemcovid,0,0,500,500)
    textFont('Georgia')
    textSize(50)
    fill(20, 300, 200)
    text("COVID GAME",90,60);
    noFill();
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao && mouseY < ybotao + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 3
      }
    }
   //JOGAR
    rect(xbotao,ybotao,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("JOGAR",xbotao+45,ybotao+45)
 //  INSTRUÇÕES
    noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao2 && mouseY < ybotao2 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    rect(xbotao,ybotao2,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("INSTRUÇÕES",xbotao+6,ybotao2+45)
    
    //CRÉDITOS
    noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao3 && mouseY < ybotao3 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 2
      }
    }
   
    rect(xbotao,ybotao3,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("CRÉDITOS",xbotao+22,ybotao3+45)
    
    
    
  }
  //INSTRUÇÕES 
  if(tela == 1){
   background(100)
  textSize(50)
  fill(20, 300, 200)
  text("INSTRUÇÕES:",80,100)
     rect(70,120,350,260)
  textSize(25)
  fill(10)
  text("* Evite Aglomerações e Procure o Hospital Mais Próximo.",80,150,330)
  text("* Corra o Mais Rápido que Conseguir!!",80,230,330)
  text("* O COVID está nas Ruas...",80,320,330)
     noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 0
      }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("VOLTAR",xbotao+40,ybotao4+45)
    
}
  //CRÉDITOS
  if(tela == 2){
  background(100)
  textSize(45)
  fill(20, 300, 200)
  text("CRÉDITOS:",140,80)
  textSize(25)
  fill(50)
  text("Dayse Monteiro",30,140)
  textSize(18)
  fill(10)
  text("Função: Educadora",250,170)
  textSize(16)
  fill(20, 300, 200)
  text("Licenciada em Língua Portuguesa na Universidade Potiguar no Rio Grande Do Norte(UNP).",180,185,300)
  image(imagemeducadora,60,150,100,100)
  textSize(25)
  fill(50)
  text("Cleóbulo Cortez",30,325)
  textSize(18)
  fill(10)
  text("Função: Programador",250,350)
  textSize(16)
  fill(20, 300, 200)
  text("Estudante de Ciências e Tecnologia(ECT) na Universidade Federal Do Rio Grande Do Norte(UFRN).",180,375,300)
  image(imagemprogramador,60,340,100,100)
     noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao5 && mouseY < ybotao5 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 0
      }
    }
    rect(xbotao,ybotao5,150,50,15)
    textSize(30)
    fill(0)
    text("VOLTAR",xbotao+20,ybotao4+75)
    
}
  //JOGO  
  if(tela == 3){
      background(0,255,0)
    image(imagemcorona,120,100,250,250)
    image(imagemcovidgame,60,10,400,100)
  //Botao Fase 1
    noStroke();
    for(i=10; i>=0; i--){
      fill(0,80+30*i,0);
      rect(xfase-i, yfase-i, 150+i, 50+i)
    }
    if(mouseX >= xfase && mouseX <= xfase + largurabotao2 && mouseY >= yfase && mouseY <= yfase + alturabotao2){
      fill(500)
      if(mouseIsPressed){
        tela = 4;ypersonagem=450      }
    }
     text("Fase 1",xfase+30,yfase+35)
  //Botao Fase 2
    noStroke();
    for(i=10; i>=0; i--){
      fill(0,80+30*i,0);
      rect(xfase2-i, yfase-i, 150+i, 50+i)
    }
     if(mouseX > xfase2 && mouseX < xfase2 + largurabotao2 && mouseY > yfase && mouseY < yfase + alturabotao2){
      fill(500)
      if(mouseIsPressed){
        tela = 5;ypersonagem=450
      }
    }
    
    text("Fase 2",xfase2+30,yfase+35)
  //Botao Fase 3
    noStroke();
    for(i=10; i>=0; i--){
      fill(0,80+30*i,0);
      rect(xfase3-i, yfase-i, 150+i, 50+i)
    }
    if(mouseX > xfase3 && mouseX < xfase3 + largurabotao2 && mouseY > yfase && mouseY < yfase + alturabotao2){
      fill(500)
        if(mouseIsPressed){
      tela = 6;ypersonagem=450
    }
    }
     text("Fase 3",xfase3+30,yfase+35)
    // botao voltar
      noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(500)
      if(mouseIsPressed){
        tela = 0
    }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("VOLTAR",xbotao+40,ybotao4+45)
    
    }
  // FASE 1  
  if(tela == 4){
    background(0,255,0)
   for(i=0; i<qtElementos; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }
      colisao(vX[i], vY[i]);
    
     image(imagemcorona,vX[i], vY[i], 20, 20)
    }
    image (imagempersonagem,xpersonagem,ypersonagem,60,50)
    if (keyIsDown(LEFT_ARROW))
      xpersonagem=xpersonagem-5;
    
  if (keyIsDown(RIGHT_ARROW))
    xpersonagem+=5;
  
  if (keyIsDown(UP_ARROW))
    ypersonagem-=5;
    
  if (keyIsDown(DOWN_ARROW))
    ypersonagem+=5;
    
    image(imagemhospital,200,-10,100,100)
     if(xpersonagem <=20){
    xpersonagem=20;
  }
  if(xpersonagem>= 450){
    xpersonagem=400;
   }
   if(ypersonagem <=20){
 ypersonagem=20;
 }
 if(ypersonagem >= 450){
    ypersonagem=450;
   }
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  470; 
    tela = 9 }
    fill(0)
    textSize(25)
    text("Fase 1",10,30)
  }
  // FASE 2  
  if (tela == 5){
      background(0,255,0)
      for(i=0; i<qtElementos2; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }
      colisao(vX[i], vY[i]);
    
     image(imagemcorona,vX[i], vY[i], 20, 20)
    }
    image (imagempersonagem,xpersonagem,ypersonagem,60,50)
    if (keyIsDown(LEFT_ARROW))
      xpersonagem=xpersonagem-5;
    
  if (keyIsDown(RIGHT_ARROW))
    xpersonagem+=5;
  
  if (keyIsDown(UP_ARROW))
    ypersonagem-=5;
    
  if (keyIsDown(DOWN_ARROW))
    ypersonagem+=5;
    
    image(imagemhospital,200,-10,100,100)
     if(xpersonagem <=20){
    xpersonagem=20;
  }
  if(xpersonagem>= 450){
    xpersonagem=450;
   }
   if(ypersonagem <=20){
 ypersonagem=20;
 }
 if(ypersonagem >= 450){
    ypersonagem=450;
   }
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  450; 
    tela = 10 }
     fill(0)
    textSize(25)
    text("Fase 2",10,30)
  }
  // FASE 3  
  if(tela == 6){
      background(0,255,0)
      for(i=0; i<qtElementos3; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }
      colisao(vX[i], vY[i]);
    
     image(imagemcorona,vX[i], vY[i], 20, 20)
    }
    image (imagempersonagem,xpersonagem,ypersonagem,60,50)
    if (keyIsDown(LEFT_ARROW))
      xpersonagem=xpersonagem-5;
    
  if (keyIsDown(RIGHT_ARROW))
    xpersonagem+=5;
  
  if (keyIsDown(UP_ARROW))
    ypersonagem-=5;
    
  if (keyIsDown(DOWN_ARROW))
    ypersonagem+=5;
    
    image(imagemhospital,200,-10,100,100)
     if(xpersonagem <=20){
    xpersonagem=20;
  }
  if(xpersonagem>= 450){
    xpersonagem=450;
   }
   if(ypersonagem <=20){
 ypersonagem=20;
 }
 if(ypersonagem >= 450){
    ypersonagem=450;
   }
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  450; 
    tela = 8 }
     fill(0)
    textSize(25)
    text("Fase 3",10,30)
  }
 // GAMEOVER
  if(tela == 7){
    
      background(150, 50, 50);
  fill(200);
  textSize(50);
  text("PERDEU!", 140, 250);
      noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 0
      }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("VOLTAR",xbotao+40,ybotao4+45)
      for(i=0; i<qtElementos; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }}
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  400}
       }
  if(tela == 8){
    background(0, 255,0);
  fill(0);
  textSize(50);
  text("PARABÉNS!!!", 90, 220);
  fill(0)
    textSize(28)
  text("VOCÊ PASSOU TODOS OS NÍVEIS!!!", 10 , 260)
      noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 0
      }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("VOLTAR",xbotao+40,ybotao4+45)
      for(i=0; i<qtElementos; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }}
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  400}
    
  }
    // passou para o nível 2
    if(tela == 9){
      background(0, 255,0);
  fill(0);
  textSize(50);
  text("PARABÉNS!!!", 90, 220);
  fill(0)
    textSize(28)
  text("VOCÊ PASSOU PARA O NÍVEL 2!!!", 10 , 260)
      noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 5
      }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("CONTINUE",xbotao+25,ybotao4+45)
      for(i=0; i<qtElementos; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }}
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  400}
    
    }
     // passou para o nível 3
    if(tela == 10){
      background(0, 255,0);
  fill(0);
  textSize(50);
  text("PARABÉNS!!!", 90, 220);
  fill(0)
    textSize(28)
  text("VOCÊ PASSOU PARA O NÍVEL 3!!!", 10 , 260)
      noFill()
    if(mouseX > xbotao && mouseX < xbotao + largurabotao && mouseY > ybotao4 && mouseY < ybotao4 + alturabotao){
      fill(20, 300, 200)
      if(mouseIsPressed){
        tela = 6
      }
    }
    rect(xbotao,ybotao4,largurabotao,alturabotao,15)
    textSize(30)
    fill(0)
    text("CONTINUE",xbotao+25,ybotao4+45)
      for(i=0; i<qtElementos; i++){
    vX[i] -=4;
      if (vX[i] < -25){
        vX[i] = random(400,800)
        vY[i] = random(0, 400)
     }}
    if(dist(xpersonagem,ypersonagem, 200, 50)<35){ 
    ypersonagem =  400}
    
    }
  }
function colisao(ix, iy){
  if(dist(xpersonagem,ypersonagem, ix, iy)<(25)){
    tela = 7;ypersonagem =  400; xpersonagem = 230
  }
}
