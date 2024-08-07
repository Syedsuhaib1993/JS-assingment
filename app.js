// <<<<<<<<<<<<< CHAPTER 1 ALERT >>>>>>>>>>>>
// <<<<<<<<<QUESTION 1>>>>>>>>>>
alert("Hi")

// <<<<<<<<<QUESTION 2>>>>>>>>>>
alert("Error! Please enter a valid password")

// <<<<<<<<<QUESTION 3>>>>>>>>>>
alert("Welcome to js land.. Happy coding")

// <<<<<<<<<QUESTION 4>>>>>>>>>>
alert("Welcome to js land \n"+ "Happy coding ")


// <<<<<<<<<QUESTION 5>>>>>>>>>>
// <<<<<<<<<CODE IN SONSOLE>>>>>>>>>>

// <<<<<<<<<QUESTION 6>>>>>>>>>>
// <<<<<<<<<USING ALERT IN THE PROJECT>>>>>>>>>>

// <<<<<<<<<QUESTION 7>>>>>>>>>>
// <<<<<<<<<USING Script in our HTML page>>>>>>>>>>


// <<<<<<<<<<<<< CHAPTER 2 VARIABLES FOR STRINGS >>>>>>>>>>>>
// <<<<<<<<<QUESTION 1>>>>>>>>>>
var username ;

// <<<<<<<<<QUESTION 2>>>>>>>>>>
var myname="M.Suhaib";

// <<<<<<<<<QUESTION 3>>>>>>>>>>
var message="HELLO WORLD" ;
alert(message);

// <<<<<<<<<QUESTION 4>>>>>>>>>>
var na = "Ali"
var age = "25 years"
var course = "Web development and Mobile app"
alert(na);
alert(age);
alert(course);

// <<<<<<<<<QUESTION 5>>>>>>>>>>
var p = "pizza"
alert(p);

// <<<<<<<<<QUESTION 6>>>>>>>>>>
var email = "Syedsuhaibhussani@gmail.com"
alert("This is my email" + email + ".")

// <<<<<<<<<QUESTION 7>>>>>>>>>>
var book = "A Smart way to learn javascript";
alert("I am trying to learn from the book" + book + ".");

// <<<<<<<<<QUESTION 8>>>>>>>>>>
console.log("Yah! I am writing JavaScript through HTML content");

// <<<<<<<<<QUESTION 9>>>>>>>>>>
var end = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(end);


// <<<<<<<<<<<<< CHAPTER 3 VARIABLES FOR NUMBERS >>>>>>>>>>>>
// <<<<<<<<<QUESTION 1>>>>>>>>>>
alert("I am" + age + "years old")

// <<<<<<<<<QUESTION 2>>>>>>>>>>
var visit = 0;
++visit
alert("you have visited this site" + " " + ++visit + " " + "times" )

// <<<<<<<<<QUESTION 3>>>>>>>>>>
var birth_year = "My Birthyear is 1993"
console.log(birth_year)

// <<<<<<<<<QUESTION 4>>>>>>>>>>
// <<<<<<<<<<<<< not attempt>>>>>>>>>>>>>



// <<<<<<<<<<<<< CHAPTER 4 LEGAL & ILLEGAL >>>>>>>>>>>>
// <<<<<<<<<QUESTION 1>>>>>>>>>>
var a = 5, b = 10 , c = 15 ;

// <<<<<<<<<QUESTION 2>>>>>>>>>>
// <<<<<<<<<LEGAL VARIABLES>>>>>>>>>>
var a = "Khan";
var $me = 10;
var user_age = 20;
var MyContact = 123;
var HARRY = 100;

// <<<<<<<<<ILLEGAL VARIABLES>>>>>>>>>>
// var 1suhaib = wrong;
// var my info = wrong;
// var @email = wrong;
// var let = wrong;
// var suh@ib = wrong;

// <<<<<<<<<QUESTION 3>>>>>>>>>>
// <<<<<<<<<DONE IN HTML>>>>>>>>>>



// <<<<<<<<<<<<< CHAPTER 5 MATH EXPRESSIONS >>>>>>>>>>>>
// <<<<<<<<<QUESTION 1>>>>>>>>>>

var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a+b
// document.write("sum of   " + a +" and  "+ b +" = "+c)


// <<<<<<<<<QUESTION 2>>>>>>>>>>

//////////////subtraction//////
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a-b
// document.write("sub of   " + a +" and  "+ b +" = "+c)



//////////////////multiplication/////////

var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a*b
// document.write("multiplication of   " + a +" and  "+ b +" = "+c)


////////////division ///////////
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a/b
// document.write("Divison of   " + a +" and  "+ b +" = "+c)



/////////////modulus///////////
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a%b
// document.write("modulus of   " + a +" and  "+ b +" = "+c)

// <<<<<<<<<QUESTION 3>>>>>>>>>>
var math ;
console.log("Value after variable declaration is" + math)
math = 5;
console.log("Value after increment is:" + ++math)
math +=7;
console.log("Value after addition is " + math );
console.log("value after decrement is" + --math );
var rem = math / 3;
console.log("The reminder is " + rem); 


// <<<<<<<<<QUESTION 4>>>>>>>>>>
var ticket_price = 600;
var total_cost = ticket_price*5;
console.log("total cost of buy 5 ticket moives  " +total_cost+"PKR")

// <<<<<<<<<QUESTION 5>>>>>>>>>>
var n = +prompt("Enter a Number");
console.log(n + "* 1 =" + n*1)
console.log(n + "* 2 =" + n*2)
console.log(n + "* 3 =" + n*3)
console.log(n + "* 4 =" + n*4)
console.log(n + "* 5 =" + n*5)
console.log(n + "* 6 =" + n*6)
console.log(n + "* 7 =" + n*7)
console.log(n + "* 8 =" + n*8)
console.log(n + "* 9 =" + n*9)
console.log(n + "* 10 =" + n*10)


// <<<<<<<<<QUESTION 6>>>>>>>>>>
// <<<<<<<<<<Part a>>>>>>>>>
var f =+prompt("Enter Fehrenheit Temperature");
var c = (f - 32 ) * 5/9;
console.log(c);

// <<<<<<<<<<Part a>>>>>>>>>
var C =+prompt("Enter Celsius temperature")
var F = (C * 9/5) + 32;
console.log(F)

// <<<<<<<<<QUESTION 7>>>>>>>>>>
var price_item1 = 60;
var price_item2 = 40;
var Qty_item1 = 1;
var Qty_item2 = 3;
totalcost = (price_item1*Qty_item1)+(price_item2*Qty_item2)
console.log("price item1 is = 60\n"+"QTY item1 = 1\n"+"price item2 = 40\n"+"Qty item2 = 3\n"+"totalcost your order  = "+totalcost)


// <<<<<<<<<QUESTION 8>>>>>>>>>>
var Tot_mks = 900;
var Mks_obt = 859;
var per = (Mks_obt/Tot_mks)*100;
console.log("Percentage: " + per);


// <<<<<<<<<QUESTION 9>>>>>>>>>>
var us_dollor = 10;
var s_riyal = 25;
var T_dollor = us_dollor*104.8;
var T_riyal = s_riyal*28;
console.log("The total Currency is :" + (T_dollor + T_riyal));



// <<<<<<<<<QUESTION 10>>>>>>>>>>
var num10 = 10;
var res = (num10 + 5) *10/2;
console.log(res);



// <<<<<<<<<QUESTION 11>>>>>>>>>>
var Current_Year = 2024;
var Birth_year = 2000;
var Years_Old = Current_Year + Birth_year;
console.log("Your age is : " + Years_Old);



// <<<<<<<<<QUESTION 12>>>>>>>>>>
var radius = 15;
var cir = 2*3.14*radius;
console.log("The Raduis is :" + radius);
console.log("The CIrcumference is :" + cir);


// <<<<<<<<<QUESTION 13>>>>>>>>>>
var Fav_Snack = "Ice Cream";
var Current_age = 24;
var Est_age = 50;
var Snack_per_day = 2;

console.log("Favourite snack :" + Fav_Snack);
console.log("Current age :" + Current_age);
console.log("Estimated Maximum age :" Est_age);
console.log("Amount of Snacks per day :" + Snack_per_day);
var Total_Snacks = (Est_age - Current_Year ) *2*256
console.log("You will need" + Total_Snacks + "Ice Cream to last you until the ripe old age  of 65")