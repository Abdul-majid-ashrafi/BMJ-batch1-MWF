// var arr = [["A", "B"], ["C", "D"]]
// document.write(arr[1][0]) // C


// var arr = [[], [], [], []];
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         document.write(arr[i][j] = j * i)
//     }
//     document.write("<br>")
// }




// var userInputValue = prompt("What do you want to order?", "Chips");
// var arr = ["Cake", "Cookie", "Chips"];

// var gotIndex = arr.indexOf(userInputValue);

// if (gotIndex !== -1) { // mean we found a index
//     document.write(userInputValue + " Is available  at index " + gotIndex + " in our bkry")
// } else {
//     document.write("Sorry. " + userInputValue + " not found")
// }




// Write a program to print multiples of 5 ranging 1 to 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0){
//         document.write(i , "<br>")
//     }
// }


// join
// reverse
// contact
// includes

// var array = ["A", "B", "C", "D", "E"];
// var nums = [100, 200, 300, 400];
// // for (let index = 0; index < array.length; index++) {
// //     document.write(array[index] + " * ")

// // }
// var abc = array.concat(nums);

// document.write(array.includes("B"))
// // document.write(array.join(" * "))
// // document.write(array.reverse())
// // document.write(array.reverse())
// // document.write(array)









// var userInputValue = "kArAchi";
// var cleanestCities = ["karachi", "santa fe", "tucson", "honolulu"];
// for (let i = 0; i < cleanestCities.length; i++) {
//     if (userInputValue.toUpperCase() === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }






// var userInputValue = "kArAchi";
// var firstChar = userInputValue.slice(0, 1).toUpperCase();
// var otherChars = userInputValue.slice(1).toLowerCase();
// alert(firstChar + otherChars)



// var month = "May";
// var extractMonth;
// if (month.length > 3) {
//     extractMonth = month.slice(0, 3)// copy to fisrt 3 ltrs
// } else {
//     extractMonth = month;
// }
// document.write(extractMonth);




var str = prompt("write something", "  Hello")
for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "  ") {
        alert("do space nhi dena!");
        break;
    }
}