//código do ator

let xAtor = 85;
let yAtor = 366;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMoverAtor()){
      yAtor += 3;
    }
  }
}

function verificaColisaoAtor(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (meusPontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textStyle(BOLD);
  textSize(22);
  textAlign(CENTER);
  fill(255,255,0);
  text(meusPontos, width / 4, 26);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function meusPontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeMoverAtor(){
  return yAtor < 366;
}