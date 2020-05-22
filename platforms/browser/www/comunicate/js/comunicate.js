     
   
     
     
     
     
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



/*  *******************************************
*                         
*                    //EMOCIONES//
**********************************************/
    document.getElementById('emociones').addEventListener('click',add_imagen,false);
    /* document.getElementById('emociones').addEventListener('click',modificar_imagen,false); */

   

        function add_imagen(){

            $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='../comunicate/img/emociones.jpg' >");

        }


        $(document).ready(function () {
          $('#emociones').click(function () {

              $('#contenedor').load('imagen.html')
              
          })
      });

      /*  *******************************************
        *                         
        *                    /ME GUSTA//
        **********************************************/
 document.getElementById('gusta').addEventListener('click',add_imagen_gusta,false);



    function add_imagen_gusta(){

        $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='../comunicate/img/megusta/megusta1.jpg' >");

    }


    $(document).ready(function () {
      $('#gusta').click(function () {

          $('#contenedor').load('megusta_opciones.html')
          
      })
  }); 
      /*  *******************************************
        *                         
        *                    /NO ME GUSTA//
        **********************************************/
 document.getElementById('noGusta').addEventListener('click',add_imagen_no_gusta,false);



 function add_imagen_no_gusta(){

     $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='../comunicate/img/nomegusta/nomegusta.jpg' >");

 }


 $(document).ready(function () {
   $('#noGusta').click(function () {

       $('#contenedor').load('nogusta_Opciones.html')
       
   })
}); 

      /*  *******************************************
        *                         
        *                    /QUIERO//
        **********************************************/
document.getElementById('quiero').addEventListener('click',add_imagen_quiero,false);



function add_imagen_quiero(){

    $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='../comunicate/img/quiero.png' >");

}


$(document).ready(function () {
  $('#quiero').click(function () {

      $('#contenedor').load('quiero_opciones.html')
      
  })
}); 


      /*  *******************************************
        *                         
        *                    /NO QUIERO//
        **********************************************/
document.getElementById('noQuiero').addEventListener('click',add_imagen_no_quiero,false);



function add_imagen_no_quiero(){

    $('#pantalla_uno').replaceWith("<img id='nueva_primera' src='../comunicate/img/no quiero.png' >");

}


$(document).ready(function () {
  $('#noQuiero').click(function () {

      $('#contenedor').load('noquiero_opciones.html')
      
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