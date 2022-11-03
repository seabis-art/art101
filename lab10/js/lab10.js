/**
 * Author: Sebastian Delgado
 * Created:   11.2.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 function sortUserName(Sebastian) {
    var userName = window.prompt("Tell me your name");
    console.log("userName =", userName);
    // split the array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //  userName.toLower().split("").sort().join("")
    return nameSorted;

    // adding button
    var button = document.getElementById('my-button');
    button.addEventListener('click', function() {

    inputValue = document.getElementById('my-input').value;
    console.log("Results", inputValue);
});
