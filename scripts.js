var commercialsHeight = $( '#CommercialsWrapper' ).height();
var alreadyFixed = false;
var body = document.body,
    html = document.documentElement;

function fixBlock(){
  var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.offsetHeight ) - 53;
  var scrollSize = Math.max(window.pageYOffset, document.documentElement.scrollTop, window.scrollY);

  if(commercialsHeight > height){
    if(!alreadyFixed && scrollSize >= (commercialsHeight - height)){
      $('.commercials-wrapper').addClass("fix-commercials-wrapper");
      alreadyFixed = true;
    }else if(alreadyFixed && scrollSize < (commercialsHeight - height)){
      $('.commercials-wrapper').removeClass("fix-commercials-wrapper");
      alreadyFixed = false;
    }
  }else if(!alreadyFixed){
    $('.commercials-wrapper').addClass("fix-commercials-wrapper");
    alreadyFixed = true;
  }
}
