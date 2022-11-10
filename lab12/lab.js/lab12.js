/**
 * Author: Sebastian Delgado
 * Created:   11.8.2022
 *
 * (c) Copyright by Blub Corp.
 **/

function sortHat(str){
  var strLength = str.length;
  var mod = strLength%4;
  if (mod == 0){
    return "Gryffindor";
  }
  if (mod == 1){
    return "Ravenclaw";
  }
  if (mod == 2){
    return "Slytherin";
  }
  if (mod == 3){
    return "Hufflepuff";
  }
}



var myButton = document.getElementById("button");
myButton.addEventListener('click', function() {
  var name = document.getElementById('input').value;
  var house = sortHat('inputValue');
  newText = "<p> The Sorting Hat has sorted you into" + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
