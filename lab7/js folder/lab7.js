/**
 * Author: Sebastian Delgado
 * Created:   10.24.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
 function sortUserName() {
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
}

//Output
document.writeln("This is how you say your name in elvish"),
    sortUserName(), "</br>");
