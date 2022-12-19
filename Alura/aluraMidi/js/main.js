// Selecção individual de classe
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSom(idElementoAudio){
  document.querySelector(idElementoAudio).play();
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
  };

}