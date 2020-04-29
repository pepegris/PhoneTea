     
   
     
     
     
     
     //BOTON RESET
/*       $(document).ready(function () {
        var botonReset=document.getElementById('reset');

        botonReset.addEventListener('click',reiniciar_Imagenes ,false);


    });

    function reiniciar_Imagenes(){


            $('#nueva').replaceWith('<span id="pantalla">INGRESE AQUI</span>');
            $('#img2').remove();    
    
    } */
    //boton reset

//EMOCIONES







    document.getElementById('emociones').addEventListener('click',add_imagen,false);
    /* document.getElementById('emociones').addEventListener('click',modificar_imagen,false); */

   

        function add_imagen(){

            $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='/www/comunicate/img/emociones.jpg' >");

        }


        $(document).ready(function () {
          $('#emociones').click(function () {

              $('#contenedor').load('imagen.html')
              
          })
      });







     


    
/* 
        function modificar_imagen() {
            $('#emociones').replaceWith("<img class='nueva' src='/www/comunicate/img/feliz.png' >");
          $('#img2').replaceWith("<img class='nueva2' src='/www/comunicate/img/triste.png' >");
          $('#img3').replaceWith("<img class='nueva3' src='/www/comunicate/img/asustado.png' >");
          $('#img4').replaceWith("<img class='nueva4' src='/www/comunicate/img/duele.png' >");
          $('#img5').replaceWith("<img class='nueva5' src='/www/comunicate/img/enfadado.png' >");

            
        } */




   /*  var comunicar=document.getElementById('comunicar');
    var sonido= new Audio();
       sonido.src="../aprendizaje/sonidos/animales/buho2.mp3";
    comunicar.onclick=function (e) {
        if (condition) {
            
        }
        
    }

//resultados
    function sonido(){
        
        switch(comunicar){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        resultado.textContent = res;
      
    } */