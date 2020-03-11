/** without for loop **/

// document.write("Hello World<br>");
// document.write("Hello World<br>");
// document.write("Hello World<br>");
// document.write("Hello World<br>");


















/** For Loops **/

/*
    for (initializer ; condition ; incrementer/decrementer)
    {
    }
 */

/** structure **/

//        for ( ; ; )
//        {
//
//        }


/** for loop **/

// for (var count = 1; count <= 5; count++) {
//     document.write("Hello World<br>");
// }


/** for loop **/

// for (var num = 0; num <= 10; num++) {
//     document.write(num + "<br>");
// }



/** for loop table **/
// var length = +prompt("Let me know length", 10);
// var table = +prompt("table ", 2);
// for (var num = 1; num <= length; num++) {
// document.write(table + " x " + num + " = " + table * num + "<br>");
// }

// var names = ["Majid", "Ashraf", "Haider", "Ali"]
// names[2]

// var cityName = "Tucson";

// var cleanestCities = ["Jelly", "Santa Fe", "Tucson", "Honolulu", "Karachi"];
// document.write("<h4>Cleanest Cities List</h4>");
// for (var i = 0; i < 1000; i++) {
//         console.log(i)
//         if (cleanestCities[i] === cityName) {
//                 document.write(cleanestCities[i] + " at index " + i);
//                 document.write("<br>");
//         }
// }


/** for loop - optional statements **/

// var num = 0;
// for (; num <= 10; num++) {
//     document.write(num + "<br>");
// }


/** for loop - optional statements **/

// for (var num = 0; ; num++) {
//     if (num <=  10) {
//         document.write(num + "<br>");
//     }
//     else {
//         break;
//     }
// }


/** for loop - optional statements **/

// for (var num = 0; num <= 10;) {
//     document.write(num + "<br>");
//     num++;
// }




/** Example - without for loop **/
// var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];
// var cityToCheck = prompt("Enter city name");
// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }



/** Example - with for loop **/
// var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];
// var cityToCheck = prompt("Enter city name");
// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// length of cleanestCities = 5
// index range = 0 to 4


/** problem - without break **/
// var cityToCheck = prompt("Enter city name");
// var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];

// for (var i = 0; i < cleanestCities.length; i++) {
//         if (cityToCheck === cleanestCities[i]) {
//                 alert("It's one of the cleanest cities " + i);
//         } else {
//                 alert("city not matched" + i);
//         }
// }



// /** nested for loops **/
// var firstNames = ["Ali", "Sami", "Bilal"];
// var lastNames = ["Khan", "Baig"];

// for (var i = 0; i < firstNames.length; i++) {
//         for (var j = 0; j < lastNames.length; j++) {
//                 document.write("<br>" + firstNames[i] + " " + lastNames[j])
//         }
// }

// document.write("<h1>abdul-majid-ashrafi</h1>");


// for (var i = 0; i < 4; i++) {
//     for (var t = 1; t <= 3; t++){
//         alert("child Loop " + t)
//     }
// }

// 4 * 3 = 12 times




/** when no curly braces are used, first immediate statement is considered as it's in the body of the statement **/
// var myArray = [2, 5, 2, 4];
// for (var i = 0; i < myArray.length; i++)
//     console.log(myArray[i]);
// alert("done!");




// var cityToCheck = "Santa Fe";
// var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];

// var gotCleanestCity = "";
// for (var i = 0; i < cleanestCities.length; i++) {
//         if (cityToCheck === cleanestCities[i]) {
//                 gotCleanestCity = i;
//         }
// }
// if (gotCleanestCity) {
//         alert("Match With " + gotCleanestCity)
// }