
/*     var pantalla=document.getElementById('pantalla_dos')
    var contenedor=document.getElementById('contenedor')

    var comer=document.getElementById('comer')

    comer.onclick=function(){
        pantalla.innerHTML="<img id='nueva_feliz' src='../comunicate/img/opciones/comer.jpg' >"


    }
 */











    



$(document).ready(function () {
    $('#comer').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nueva_feliz' src='../comunicate/img/opciones/comer.jpg' >");       

      })

      $('#beber').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/beber.jpg' >");       

      })
      $('#caminar').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/caminar.jpg' >");       

      })
      $('#jugar').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/jugar.jpg' >");       

      })
      $('#transporte').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/transporte.jpg' >");       

      })
      $('#ropa').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/ropa.jpg' >");       

      })
      $('#animales').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/animales.jpg' >");       

      })
      $('#utiles').click(function (event) {
      $('#pantalla_dos').replaceWith("<img id='nuevo' src='../comunicate/img/opciones/utiles.png' >");       

      })

      //cambio de pagina
                      $('#comer').click(function () {

              $('#contenedor').load('comer.html')

              })



              $('#beber').click(function () {

              $('#contenedor').load('imagen.html')

              })



              $('#caminar').click(function () {

              $('#contenedor').load('imagen.html')

              })


              $('#jugar').click(function () {

              $('#contenedor').load('imagen.html')

              })



              $('#transporte').click(function () {

              $('#contenedor').load('imagen.html')

              })



              $('#ropa').click(function () {

              $('#contenedor').load('imagen.html')

              })


              $('#animales').click(function () {

              $('#contenedor').load('imagen.html')

              })

     




      $('#utiles').click(function () {

       $('#contenedor').load('imagen.html')

       })







    
}); 


    
  

var pan=document.getElementById('pan');
var galleta=document.getElementById('triste');
var hamburguesa=document.getElementById('hamburguesa');
var caramelo=document.getElementById('caramelo');
var arepa=document.getElementById('arepa');

var helado=document.getElementById('helado');
var pasta=document.getElementById('pasta');
var pizza=document.getElementById('pizza');
var queso=document.getElementById('queso');
var sopa=document.getElementById('sopa');

var reproducir=document.getElementById('reproducir')



var comer;

pan.onclick=function(){

    comer=1

}
galleta.onclick=function(){

    comer=2

}

hamburguesa.onclick=function(){

    comer=3

}
caramelo.onclick=function(){

    comer=4

}
arepa.onclick=function(){

    comer=5

}
    helado.onclick=function(){

    comer=6

    }
    pasta.onclick=function(){

    comer=7

    }

    pizza.onclick=function(){

    comer=8

    }
    queso.onclick=function(){

    comer=9

    }
    sopa.onclick=function(){

    comer=10

    }












reproducir.onclick=function(){
    play()
}





function dale() {

var pan= new Audio();
pan.src="../comunicate/sonidos/comida/pan.wav";
var galleta= new Audio();
galleta.src="../comunicate/sonidos/comida/galleta.wav";
var hamburguesa= new Audio();
hamburguesa.src="../comunicate/sonidos/comida/hamburguesa.wav";
var caramelo= new Audio();
caramelo.src="../comunicate/sonidos/comida/caramelo.wav";
var arepa= new Audio();
arepa.src="../comunicate/sonidos/comida/arepa.wav";

var pasta= new Audio();
pasta.src="../comunicate/sonidos/pasta.wav";
var pizza= new Audio();
pizza.src="../comunicate/sonidos/pizza.wav";
var queso= new Audio();
queso.src="../comunicate/sonidos/queso.wav";
var helado= new Audio();
helado.src="../comunicate/sonidos/helado.wav";
var sopa= new Audio();
sopa.src="../comunicate/sonidos/sopa.wav";

switch (emocion) {

        case 1:
            pan.play()
        
            break;
            case 2:
                galleta.play()
            
            break;
            case 3:
                hamburguesa.play()
           
            

            break;
            case 4:
                caramelo.play()
            
        
            break;
            case 5:
                arepa.play()
            

            break;

            case 6:
            helado.play()
        
            break;
            case 7:
                pasta.play()
            
            break;
            case 8:
                pizza.play()
           
            

            break;
            case 9:
                queso.play()
            
        
            break;
            case 10:
                sopa.play()
            

            break;
    
        
    }     
}


