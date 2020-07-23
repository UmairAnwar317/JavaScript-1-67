//    Alerts

//                              Chapter # 1 >>>> Task # 1

// alert("WellCome!");

//                              Chapter # 1 >>>> Task # 2

// alert("Error! Please enter a valid password.");

//                              Chapter # 1 >>>> Task # 3

// alert(" Welcome to JS Land...\n Happy Coding!");

//                              Chapter # 1 >>>> Task # 4

// alert("Welcome to JS land...");

// alert("Happy Coding! \n Prevent this page from creating additional dialogs ");

//                                 Variable for Strings

//                              Chapter # 2 >>>> Task # 1

// var username

//                              Chapter # 2 >>>> Task # 2


// var myName = "Umair Anwar";

//                              Chapter # 2 >>>> Task # 3

// var message = "Hello World";                         
// alert(message)

//                              Chapter # 2 >>>> Task # 4

// var name = "Jhone Doe";
// var age = "15 years old";
// var certification = "Certified Mobile Application Development";

// alert(name);
// alert(age);
// alert(certification);

//                              Chapter # 2 >>>> Task # 5
  
// var a = " PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(a);

//                              Chapter # 2 >>>> Task # 6
 
// var message = "My email address is";
// var email = " umairanwar317@gmail.com";
// var result = (message + email);
// alert(result);

//                              Chapter # 2 >>>> Task # 7

// var book = " A smarter way to learn JavaScript";
// var a = "I am trying to learn from the Book"
// var z = (a + book);
// alert(z);
 
//             or

// alert("I am trying to learn from the book" + book)


//                              Chapter # 2 >>>> Task # 8

// var a = "Yah! I can write HTML content through JavaScript ";

// document.write(a);
    

//                              Chapter # 3 >>>> Task # 1


// var age = 24;
// alert("I am " + age + " years old");


//                              Chapter # 3 >>>> Task # 2

// var a = 14;
// alert("You have visited this site " + a + " times");


//                              Chapter # 3 >>>> Task # 2


// var birthYear = 1996;
// var b = " Data type of my decleared variable is number"
// document.write("My birth year is "+ birthYear+ "<br>", b )


//                              Chapter # 3 >>>> Task # 3


// var visitorsName =  "<b> John Doe </b>";
// var ProductTitle = " <b> T-Shirt </b>"
// var quantity = '<b> 5 </b>';

// document.write(visitorsName + "ordered" + quantity + ProductTitle + " on XYZ clothing store")


//                              Chapter # 4 >>>> Task # 1

// var name = "umair Anwar", age = 24, Height = "6ft";


//                              Chapter # 4 >>>> Task # 2

// Legal variable Names

// var name ;
// var lastName ; 
// var _age ;
// var $Rate ;
// var  a1 ;

// Illegal variable Names

// var Last name ;
// var 1a ;
// var percentage% ;
// var no. ;
// var 'name' ;

//                              Chapter # 4 >>>> Task # 3

// var heading = "<h1> Rules for naming JS variables </h1> ";
// var b = "Variable names can only contain, numbers, $ and _. For example $my_1stVariable ";
// var c = "Variables must begin with a letter, $ or _.  For example : $name, _name or name";
// var d = "Variable names are case sensitive";
// var e = "Variable names should not be JS keywords";

// document.write( heading);

// document.write(b);
// document.write("</br>");

// document.write(c);
// document.write("</br>")

// document.write(d);
// document.write("</br>")

// document.write(e);



//                              Chapter # 5 >>>> Task # 1

//                              Chapter # 5 >>>> Task # 2

//                              Chapter # 5 >>>> Task # 3

//  var a;
//  document.write("Value after variable declaration is: Undefined");
//  document.write ("</br>");
//   var c =  5;
// document.write("Initial value is: "+c);
//  document.write ("</br>");
// var e = c + 1;
// document.write("Value after increment is: "+e);
//  document.write ("</br>");
// var g = e + 7;
// document.write("Value after addition is: "+g);
// document.write ("</br>")
// var i= g - 1;
// document.write("Value after decrement is: " +i);
// document.write ("</br>");
// var k = i % 3;
// document.write("The remainder is : "+k);


//                              Chapter # 5 >>>> Task # 6

//  var celsiusTem= 25;
//  var C = (70-32)*5/9;
//  var FahrenheitTemp= 70; 
//  var F = (25*9/5)+32;
//  document.write("<h2>"+ "The Temperature Conventer" + "</h2>");
//  document.write(celsiusTem+"<sup>"+"o"+"</sup>"+"C"+" is "+ F+"<sup>"+"o"+"</sup>"+"F");
//  document.write ("</br>");
//  document.write(FahrenheitTemp+"<sup>"+"o"+"</sup>"+"F"+" is "+C+"<sup>"+"o"+"</sup>"+"C");
                        

//                              Chapter # 6-9 >>>> Task # 2

// var a= 2, b= 1;
// var result= --a - --b + ++b + b--;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("a is: "+a+"</br>");
// document.write("b is: "+b+"</br>");
// document.write("Result is: "+ result+"</br>"+"</br>");

//                              Chapter # 6-9 >>>> Task # 3

// var name = prompt("What's your Name?");
// alert("Thanks, "+name+"!");

//                              Chapter # 9-11 >>>> Task # 2

//     var gender = prompt("what's your gender?");
//     if(gender === "Male"){
//         alert("Good Morning, Sir.");}
//     if (gender === "Female"){alert("Good Morning, Ma'am.");}

//                              Chapter # 9-11 >>>> Task # 3

// var signal = prompt("Enter the color of the traffic signal.");
// if(signal === "Red"){alert("Must Stop");}
// else if(signal === "Yellow"){alert("Ready to move");}
// else if(signal === "Green"){alert("Move now");}                            


//                              Chapter # 12-13 >>>> Task # 3

//                             var d = prompt("Enter a number");
//     if (d > 0){
//         alert("It's a positive number");
//     }
//     else if (d >= 0){
//         alert("The number is zero");
//     }
//     else if (d < 0){
//         alert("It's a Negative number");
//     }

//                              Chapter # 12-13 >>>> Task # 4


//     var char = prompt("Enter a vowel")
//     var vowels = prompt("Enter a aplabet");
//     if (vowels === "a"){
//         alert("It's a vowel");
//     } 
//     if(vowels === "e"){
//         alert("It's a vowel");
//     } 
//     if(vowels === "i"){
//         alert("It's a vowel");
//     }
//     if(vowels === "o"){
//         alert("It's a vowel");
//     } 
//     if(vowels === "u"){
//         alert("It's a vowel");
//     }

//                              Chapter # 12-13 >>>> Task # 5

// var correctPassword = "umair123";
// var user = prompt("Enter the password");
// if (user === "") {
//     alert("Please enter your password")
// }
// else if (user === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password")
// } 

//                              Chapter # 12-13 >>>> Task # 7


// var time = prompt("Enter the time in 24 hours formate");
//     if (time >= 0000 && time < 1200) {
//         alert("Good Morning!");
//     }
//     else if (time >= 1200 && time < 1700){
//         alert("Good Afternoon!")
//     }
//     else if (time >= 1700 && time < 2100 ){
//         alert('Good Evening!');
//     }
//     else if (time >= 2100 && time < 2359){
//         alert("Good night!")
//     } 

//                              Chapter # 14-16 >>>> Task # 8



// var studentName = ["Michael", "John", "Tony"];
//     var g =[];
//     var total1 = prompt("Student 1 total marks");
//     g.push(total1);
//     var total2 = prompt("Student 2 total marks");
//     g.push(total2);
//     var total3 = prompt("Student 3 total marks");
//     g.push(total3);
//     var total = 500;
//     var f =[];
//     var per1 = total1/total*100;
//     f.push(per1);
//     var per2 = total2/total*100;
//     f.push(per2);
//     var per3 = total3/total*100;
//     f.push(per3);
//     document.write("Score of "+studentName[0]+ " is "+ g[0]+". Percentage: "+f[0]+"%"+ "</br>");
//     document.write("Score of "+studentName[1]+ " is "+ g[1]+". Percentage: "+f[1]+"%"+ "</br>");
//     document.write("Score of "+studentName[2]+ " is "+ g[2]+". Percentage: "+f[2]+"%"+ "</br>"+ "</br>");



//                              Chapter # 14-16 >>>> Task # 9


// //1
// var colors = ["Pink","Yelow","Red"];
// document.write(colors + "</br>");
// //a
// var h = prompt("What color you want to add at the begining?", "Orange");
// colors.unshift(h);
// document.write(colors + "</br>");
// //b
// var i = prompt("What colors you want to add at the end", "Purple");
// colors.push(i);
// document.write(colors + "</br>");
// //c
// colors.unshift("Black","Light Pink");
// document.write(colors+ "</br>");
// //d
// colors.shift();
// document.write(colors + "</br>");
// //e
// colors.pop();
// document.write(colors + "</br>");
// //f
// var j = prompt("At which poistion you want to add the color?");
// var k = prompt("And what color you want to add?", "Golden");
// colors.splice(j,0,k);
// document.write(colors+ "</br>");
// //g
// var position = prompt("At which Position you want to delete the color?");
// var deleted = prompt("And how many colors you want to delete");
// colors.splice(position,deleted);
// document.write(colors+ "</br>"+ "</br>");



//                              Chapter # 14-16 >>>> Task # 11


// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
//     document.write("Cities list: "+ "</br>" + cities +"</br>"+ "</br>");
//     var selected = cities.slice(2,4);
//     document.write("Selected cities list: " + "</br>" + selected+ "</br>" + "</br>" );


//                              Chapter # 17-20 >>>> Task # 1


// var multiDArray = [[], [], []]

//                              Chapter # 17-20 >>>> Task # 4


// var table = prompt("Enter a number to show it's mupliplication table");
//     var lengthNum = prompt("Eneter the length of the multiplication table");
//     document.write("Multiplication table of " + table+ "</br>");
//     document.write("Length " + lengthNum+ "</br>"+ "</br>");
//     for (var b = 1; b <= lengthNum; b++){
//         document.write(table+" x "+ b + " = " + table*b + "</br>");
//     }
//     document.write("</br>");

//                              Chapter # 17-20 >>>> Task # 5


// var fruits = [apple, orange, banana, graps, mango];
//     var stop = prompt("Enter the stop value");
//     for (var m = 0; m<=5; m++){
//         if (stop == scores[m]){ ++m;
//             var copied = fruits.splice(0,m)
//             document.write(copied);
//             break;
//         }
//     }



                            //  Chapter # 17-20 >>>> Task # 6


// document.write("<h4>"+"Counting: "+"</h4>");
// for (d = 1; d <=15; d++){
//     document.write(d+", ");
// }
// document.write("</br>");
// document.write("<h4>"+"Reverse Counting: "+"</h4>");
// for (e = 10; e <= 10 && e > 0; e--){
//     document.write(e+", ");
// }
// document.write("</br>");
// document.write("<h4>"+"Even: "+"</h4>");
// for(f = 0; f<=20 ; f=f+2){
//     document.write(f+", ");
// }
// document.write("</br>");
// document.write("<h4>"+"Odd: "+"</h4>");
// for(g = 1; g<=20 ; g=g+2){
//     document.write(g+", ");
// }
// document.write("</br>");
// document.write("<h4>"+"Series: "+"</h4>");
// for(h = 0; h <= 20; h= h+2){
//     if (h == 0){

//     }
//     else if(h > 0){
//       document.write(h+"k, ");
//     }
    
// }


                            //  Chapter # 17-20 >>>> Task # 7


// var sweets = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
//     var search = prompt("Welcome! to the Bakery, What do you want to order Sir/Ma'am");
//     var matchFound = false;
//     for (var i = 0; i <= 4; i++){
//         if(search === sweets[i]){
//             matchFound = true;
//             document.write(search + " is available at index " + i + " in our bakery. ");
//             break;
//         }
//     } 
//     if(matchFound === false) {
//         document.write("We are Sorry, "+ search + " is not available in our bakery. ");
//     }

                            //  Chapter # 17-20 >>>> Task # 8


// var smallestnum = [24,53,78,91,12];
//     document.write("Array items: " +smallestnum+"</br>");
//     for (var k= 0; k <=4; k++){
//         if(smallestnum[k] < 20 ){
//             document.write("The smallest number is: " + smallestnum[k]);
//         }
//     }
//     var largestnum = [24,53,78,91,12];
//     document.write("Array items: " +largestnum+"</br>");
//     for (var j = 0; j<=4; j++){
//         if (largestnum[j] > 90 ){
//         document.write("The largest number is: "+ largestnum[j]);
//         }
//     }


                            //  Chapter # 21-25 >>>> Task # 2


// var phoneName = prompt("Enter your favorite mobile phone model.");
//         var nameLength = phoneName.length;
//         document.write("My Favorite phone is: " + phoneName + "</br>" + "Length of string: " + nameLength);


                            //  Chapter # 21-25 >>>> Task # 3

        // var city = "Pakistani";
        // var n = city.indexOf("n");
        // document.write("String: " + city + "</br>" + "Index of 'n': " + n);

                            //  Chapter # 21-25 >>>> Task # 5


        // var country = "Pakistani";
        // var i = country.charAt(3);
        // document.write("String: " + country + "</br>" + "Character at index 3: " + i);
        // document.write("</br>" + "</br>");


                            //  Chapter # 21-25 >>>> Task # 7


        // var city2 = "Hyderabad";
        // var cityreplace = city2.replace("Hyder", "Islam");
        // document.write("City " + city2 + "</br>" + "After replacement: " + cityreplace);
        // document.write("</br>" + "</br>");

                            //  Chapter # 21-25 >>>> Task # 8


        // var message = "Ali and Sami are best friends. They play cricket and football together. ";
        // var messagereplace = message.replace(/and/g, "&");
        // document.write(message + "</br>" + "After replacement: " + messagereplace);


                            //  Chapter # 21-25 >>>> Task # 10

        // var name = prompt("Enter your name");
        // var capCase = name.toUpperCase();
        // alert(capCase);
                            //  Chapter # 21-25 >>>> Task # 11


        // var firstName = prompt("Enter your first name?");
        // var lastName = prompt("Enter your last name?");
        // var firstChar = firstName.slice(0, 1);
        // firstChar = firstChar.toUpperCase();
        // var firstChar1 = lastName.slice(0, 1);
        // firstChar1 = firstChar1.toUpperCase();
        // var otherChars = firstName.slice(1);
        // otherChars = otherChars.toLowerCase();
        // var otherChars1 = lastName.slice(1);
        // otherChars1 = otherChars1.toLowerCase();
        // var titleFirst = firstChar + otherChars;
        // var titleLast = firstChar1 + otherChars1;
        // alert("Welcome " + titleFirst + " " + titleLast + "!");


                            //  Chapter # 21-25 >>>> Task # 12


        // var num = 35.36;
        // num = num.toString();
        // var num1 = num.replace(".", "");
        // document.write("Number: " + num + "</br>" + "Result: " + num1);

                            //  Chapter # 21-25 >>>> Task # 13

        // var userName = prompt("Enter your valid usename");
        // for (var i = 0; i < userName.length; i++) {
        //     if (userName.indexOf("@") !== -1 || userName.indexOf(".") !== -1 || userName.indexOf(",") !== -1 || userName.indexOf("!") !== -1) {
        //         alert("Please eneter a valid username");
        //         break;
        //     }
        // }


                            //  Chapter # 21-25 >>>> Task # 18

        // var text = "the quick brown fox jumps over the lazy dog";
        // var t = 0;
        // for (var i = 0; i < text.length; i++) {
        //     if (text.slice(i, i + 3) === "the") {
        //         t++;
        //     }
        // }
        // document.write("Text: " + text + "</br>" + "There are " + t + " occurrences of word 'the' ");

                            //  Chapter # 26-30 >>>> Task # 1


        // var a = prompt("Enter a positive floating point number");
        // var b = Math.round(a);
        // var c = Math.floor(a);
        // var d = Math.ceil(a);
        // document.write("number: " + a + "</br>" + "round off value: " + b + "</br>" + "floor value: " + c + "</br>" + "ceil value: " + d + "</br>" + "</br>");

                            //  Chapter # 26-30 >>>> Task # 2
        
        // var a = prompt("Enter a negative floating point number");
        // var b = Math.round(a);
        // var c = Math.floor(a);
        // var d = Math.ceil(a);
        // document.write("number: " + a + "</br>" + "round off value: " + b + "</br>" + "floor value: " + c + "</br>" + "ceil value: " + d + "</br>" + "</br>");

                            //  Chapter # 26-30 >>>> Task # 4

        // var randomNumber = Math.random();
        // alert(randomNumber);

                            //  Chapter # 26-30 >>>> Task # 5

        // var k = Math.random() * 2;
        // var o = k + 1;
        // var p = Math.floor(o);
        // if (p == 2) {
        //     document.write("random coin value: Heads")
        // }
        // if (p == 1) {
        //     document.write("random coin value: Tails")
        // }

                            //  Chapter # 26-30 >>>> Task # 7


        // var w = prompt("Enter your weight");
        // var x = parseFloat(w);
        // document.write("The weigth of user is: " + x + " kilogram");

                            //  Chapter # 26-30 >>>> Task # 7

        // var t = prompt("Guess a number between 1 to 10");
        // var u = Math.random() * 10 + 1;
        // var v = Math.floor(u);
        // if (t == v) {
        //     alert("Congratulation!");
        // }
        // else {
        //     alert("Try Again");
        // }

                            //  Chapter # 31-34 >>>> Task # 1


//   var currentDate = new Date();
//         document.write(currentDate + "<br>" + "<br>");


                            //  Chapter # 31-34 >>>> Task # 2



// var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = currentDate.getMonth();
// var b = a[month];
// document.write("Current Month: " + b + "<br>" + "<br>");

                            //  Chapter # 31-34 >>>> Task # 3


// var c = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//         var day = currentDate.getDay();
//         var d = c[day];
//         document.write("Today is " + d + "<br>" + "<br>");

                            //  Chapter # 31-34 >>>> Task # 9

        // var i = new Date() - new Date("June 18, 2019");
        // var j = i / (1000 * 60 * 60 * 24);
        // var k = Math.floor(j);
        // document.write(k + " days have passed since 1st Ramadan, 2019" + "<br>" + "<br>");

                            //  Chapter # 31-34 >>>> Task # 9

        // var n = new Date("December 3, 2019");
        // document.write("Current Date: " + n + "<br>");
        // var p = n.setFullYear(1919);
        // document.write("100 years back, it was " + n + "<br> <br>");

                            //  Chapter # 35-38 >>>> Task # 2

        // var firstName = prompt("Enter Your First Name");
        // var lastName = prompt("Enter Your Last name");
        // function userName(first, second) {
        //     document.write("Welcome " + first + " " + second + "!");
        // }
        // userName(firstName, lastName);
        // document.write("<br>" + "<br>");

                            //  Chapter # 35-38 >>>> Task # 2


        // var num1 = +prompt("Enter a number");
        // var num2 = +prompt("Enter a number");
        // var operator = prompt("Enter the operator");
        // var val;
        // function calcu(num1, num2, operator) {
        //     if (operator == "+") {
        //         val = num1 + num2;
        //     }
        //     else if (operator == "-") {
        //         val = num1 - num2;
        //     }
        //     else if (operator == "*") {
        //         val = num1 * num2;
        //     }
        //     else if (operator == "/") {
        //         val = num1 / num2;
        //     }
        //     else if (operator == "%") {
        //         val = num1 % num2;
        //     }
        //     return val;
        // }
        // document.write("Calculated Value: " + calcu(num1, num2, operator) + "</br>" + "</br>");

                            //  Chapter # 35-38 >>>> Task # 12


        // function changeCase(string) {
        //     var firstChar = string.slice(0, 1)
        //     var changedCase = firstChar.toUpperCase();
        //     var restChars = string.slice(1)
        //     alert(changedCase + restChars)
        // }
        // changeCase("the quick brown fox")


                            //  Chapter # 35-38 >>>> Task # 13


        // function occ(word, letter) {
        //     var w = 0;
        //     for (var i = 0; i < word.length; i++) {
        //         if (word.slice(i, ++i) == letter) {
        //             w++;
        //         }
        //     }
        //     return w;
        // }
        // var p = occ(prompt("Enter some text"), prompt("Enter a letter"))