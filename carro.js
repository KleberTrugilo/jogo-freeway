//código do carro

//variáveis dos carros em listas
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 4.3, 2.2, 2.8];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (pasouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function pasouTodaATela(xCarro){
  return xCarro < -50;
}

/*function velocidadeDiferente(){
  let velocidade = random(velocidadeCarros);
    
    xCarros[i] -= velocidade;
    if(xCarros[1]){
    print(velocidade);
    
  }
}*/

