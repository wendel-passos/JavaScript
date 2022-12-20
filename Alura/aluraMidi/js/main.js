// Selecção individual de classe
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio')  /*Verifica o tipo do elemento*/{
    elemento.play();
  }
  else {
    console.log ('Elemento não encontrado ou seletor inválido');
  }
  
}
// atribui todos os objetos pertencentes a classe tecla na contante
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

for  (let contador = 0; contador < listaDeTeclas.length; contador ++ ){

  const tecla = listaDeTeclas[contador] //busca a lista de instrumentos da classe
  const instrumento = tecla.classList[1]; //template string
  const idAudio = `#som_${instrumento}`;
  
  //console.log(instrumento);
  //console.log(idAudio);
  tecla.onclick = function (){//funcaoAnonima
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (botao){
    //console.log(botao);
    if (botao.code === "Enter" || botao.code === "Space"){
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }

}