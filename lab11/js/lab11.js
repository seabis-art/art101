/**
 * Author: Sebastian Delgado
 * Created:   11.9.2022
 *
 * (c) Copyright by Blub Corp.
 **/

$("#Challenge").click(function(){
  $("#Challenge").toggleClass("special");
  $("#Challenge").css({color:'orange'});
});

$("#Problems").click(function(){
  $("#Problems").toggleClass("special");
  $("#Problems").css({color:'yellow'});
});


$("#Results").click(function(){
  $("#Results").toggleClass("special");
  $("#Results").css({color:'red'});
});
