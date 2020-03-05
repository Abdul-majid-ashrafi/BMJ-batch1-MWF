// var username = "Haider";
// var greeting = "Khushamdeed";
// var message = username + " " + greeting;
// alert(message)

// var num1 = 4;
// var num2 = "4";
// alert(num1 + num2);

// var num1 = 4;
// num1 = num1 + 1;
// alert(num1)
// num1 = num1 + 1;
// alert(num1)
// num1 = num1 + 1;
// alert(num1)
// 


// var num1 = 4;
// num1 = num1 + 1;
// ++num1; // pre
// num1++; //post
// alert(++num1)// pre
// alert(num1++)// post
// alert(num1)// post


// var totalCost = 1 + 3 * 4;
// var totalCost = 1 + (3 * 4);
// var totalCost = (2 * 4) * (4 + 2);

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;



// var username = prompt("What's your name?","Ali")
// alert("Hello " + username)
// var number = +prompt("What's your cellnumber", 10) // string
// alert(10 * number)
// 2 x 1 = 2

// var table = +prompt("Enter a number");
// var count = 0;
// // 2 x 1 = 2
// document.write(table + " x " + ++count + " = " + table * count + "<br>")
// document.write(table + " x " + ++count + " = " + table * count + "<br>")

var num1 = +prompt("Enter Fisrt Number");
var operator = prompt("Enter operator");
var num2 = +prompt("Enter second Number");
console.log(num1 + operator + num2)
if (operator === "+") {
    document.write(num1 + num2)
}
if (operator === "*") {
    document.write(num1 * num2)
}