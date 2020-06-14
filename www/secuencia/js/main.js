
// fire up all the code when the DOM has been constructed by the browser
$(document).ready(function(){

  // add showToolTip function to jQuery object to be called by any element wrapped in jQuery object
  $.fn.showToolTip_inco = function(config){

    // check if the host element is already positioned. If not set it to relative so tooltip can be positioned relative to host
    if ($(this).css('position') === 'static') {
      $(this).css('position', 'relative');
    }

    // attach tooltip to the host element as the last child
    $(this).append(` 
    </center><div class="tooltip" id="cuadro">
    <div class="tooltip-content" id="contiene">
      <div class="tooltip-header" id="cabeza=>
      ${config.title}
      </div>
      <div class="tooltip-body" id="cuerpo">
      ${config.content}
      </div>
    </div>
    <div class="tooltip-action" id="accion">
      <button class="tooltip-btn"  id="boton" >OK</button>
    </div>
  </div>
    `);

    // set up click listener on the tooltip OKAY button to animate its disapperance, to remove it from the DOM and also fire the callback provided as an argument
    $('#boton').click(function () {
      $('#cuadro').animate({ opacity: 0 }, 330, function(){
        $(this).remove();
        config.onApprove();
      })
    });

    // grab dimensional info about the tooltip, host element and the viewport width and height to calculate in which direction to show the tooltip
    let tooltipInf = $('#cuadro')[0].getBoundingClientRect();
    let parentInf = $(this)[0].getBoundingClientRect();
    let winHeight = $(window).height();
    let winWidth = $(window).width();

    // determine if there is enough space to the TOP of element to place tooltip at the TOP 
    if (parentInf.top > tooltipInf.height + 10) { 
      $('#cuadro')
        .css({ left: '100%', marginLeft: -($('#cuadro').outerWidth() / 2) + 'px', top: -(tooltipInf.height) + 'px' })
        .animate({ top: -(tooltipInf.height + 10) + 'px', opacity: 1 });

    // determine if there is enough space to the BOTTOM of element to place tooltip at the BOTTOM 
    } else if (winHeight - parentInf.bottom > tooltipInf.height + 10) { 
      $('#cuadro')
        .css({ left: '50%', marginLeft: -($('#cuadro').outerWidth() / 2) + 'px', top: '100%' })
        .animate({ top: ($(this).outerHeight() + 10) + 'px', opacity: 1 });
    
    // determine if there is enough space to the LEFT of element to place tooltip to the LEFT 
    } else if (parentInf.left > tooltipInf.width + 10) { // left
      $('#cuadro')
        .css({ top: '50%', marginTop: -(tooltipInf.height / 2) + 'px', left: -($('#cuadro').outerWidth()) + 'px' })
        .animate({ left: -($('#cuadro').outerWidth() + 10) + 'px', opacity: 1 });

    // determine if there is enough space to the RIGHT of element to place tooltip to the RIGHT 
    } else if (winWidth - parentInf.right > tooltipInf.width + 10) { // right
      $('#cuadro')
        .css({ top: '50%', marginTop: -(tooltipInf.height / 2) + 'px', left: '100%' })
        .animate({ left: ($(this).outerWidth() + 10) + 'px', opacity: 1 });

    // if TOP, RIGHT, BOTTOM, LEFT doesnt have enough space to show tooltip, then popup tooltip directly atop and in the center of element  
    } else {
      $('#cuadro')
        .css({ left: '50%', top: '50%', marginLeft: -($('#cuadro').outerWidth() / 2) + 'px', marginTop: -(tooltipInf.height / 2) + 'px'})
        .animate({opacity: 1 });
    }
  }

  //call the showToolTip on a paragraph
  $('#activate').click(function () {
    $('#text').showToolTip_inco({
      title: 'Incorrecto!',
      content: 'Vuelve intentarlo',
      onApprove: function(){
        console.log('');
      }
    });
  });

})




