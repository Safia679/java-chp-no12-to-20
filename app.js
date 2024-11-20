                                 ///<<<<<<<<<<<< chp no 12,13>>>>>>>>>>>>>>>>>////

// Q no 03:
// answer:
let number = prompt("Enter a number");
if ( number > 0){
    alert("the number is positive")
    
}
else if(number < 0){
    alert("the number is negative")
}
else{
    alert("the number is zero")
}
// Q no 04:
let  alpha= "aeiou";

if(alpha === "aeiou"){
    alert("true")
}
else{
    alert ("false")
}
// Q no 05:
let password = prompt("Enter yout password");
let correctPass = "karachi12";
if (password === null || password === "") {
    alert(" Please! Enter yout password")
} 

if (password === correctPass){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}
// Q no 06:
let hour = 13;
if (hour < 18) {
    console.log("Good day");
     
    
} else {
   console.log("Good evening");
   
}
// Q no 07:
let time = prompt("Enter your time");
if (time < 1200) {
    alert("Good morning")
    
} else if (time > 1200 && time <= 1700) {
    alert("Good afternoon")
} 
else if(time > 1700 && time <= 2000 ){
    alert("Good Evening")
}
else{
    alert("Good Night")
}
                     ///<<<<<<<<<<<< chp no 14-16>>>>>>>>>>>>>>>>>////
    // Q no 01:                 
// let arr = 
 // Q no 02:  
let objArr = [];
// Q no 03:
let stringArr1 = [""];
let stringArr2= [''];
// Q no 04:
let numberArr = [1,2];
// Q no 05:
let booleanArr =[true,false];
// Q no 06:
let mixArry = ["karachi",1,true];
// Q no 07:
let educaArray = ["1)SSC <br> 2)HSC  <br>  3)BCS  <br>  4)BS <br> 5)BCOM <br> 6)MS <br> 7)M.Phil <br> 8)phD <br> "];
document.write("Qualifications: <br>");
document.write(educaArray);
// // Q no 08:
document.write("<b> Q no 08:</b> <br>")
let studentsName = ["Michael","john","Tony"];
let scoreOfStudents = [320,230,480];
let num = 500;
let num2 = scoreOfStudents[0];
let result = num2 / num * 100;
document.write("Score of" + "&nbsp" +  studentsName[0] + "&nbsp" + "is" +"&nbsp" + num2 + "."+ "&nbsp" + "percentage:" + result + "%" + "<br>" );
let num3 = scoreOfStudents[1];
let result1 = num3 / num * 100;
document.write("Score of" + "&nbsp" +  studentsName[1] + "&nbsp" + "is" +"&nbsp" + num3 + "."+ "&nbsp" + "percentage:" + result1 + "%" + "<br>");
let num4 = scoreOfStudents[2];
let result2 =  num4 / num * 100;
document.write("Score of" + "&nbsp" +  studentsName[2] + "&nbsp" + "is" +"&nbsp" + num3 + "."+ "&nbsp" + "percentage:" + result2 + "%" + "<br>");
// Q no 09:
document.write("<b> Q no 09:</b> <br>")
let colors = ["red","blue","Green","Yellow <br>" ];
document.write(colors);
// a:
let userEnter = prompt("Enter your color?")
let colorsAdd = colors.unshift(userEnter)
document.write( colors);
// b:
let userEnter1 = prompt("Enter color to add in end ") 
let colorsAdd1 = colors.push(userEnter1)
document.write(colors +"<br>");
// c:
let colorsAdd2 = colors.unshift("Black","skyblue");
document.write(colors);
// d:
let deleteColor = colors.shift();
document.write(colors);
// e:
let deleteLast = colors.pop()
document.write(colors + "<br>");
// f:
let addColourIndex = prompt("Which index you want to add color");
let addedAtIndx =colors.splice( addColourIndex,0,"white");
document.write(colors);
// g:
let deleteColorIndex = prompt("Which index you want to delete colors")
// let removeColor = delete colors(deleteColorIndex)
document.write(colors +"<br>");
//  Q no 10:
document.write("<b> Q no 10:</b> <br>");
let studentsScore =[320,230,480,120];
document.write(  "Score of Students:" + studentsScore +"<br>");
let orderedScore = studentsScore.sort();
document.write("Ordered Scores of Students:" + orderedScore +"<br>");
//  Q no 11:
document.write("<b> Q no 11:</b> <br>");
let citiesNames = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:<br> " + citiesNames +"<br><br>");
let selectCities = citiesNames.slice(2,4);
document.write( "Selected cities list:<br> "+ selectCities +"<br>");
//  Q no 12:
document.write("<b> Q no 12:</b> <br>");
let array = ["This","is","my","cat"];
let joinArr = array.join("")
document.write(joinArr +"<br>");
//  Q no 13:
document.write("<b> Q no 13:</b> <br>");
let values = [" Out: <br> keyboard <br>"+" Out: <br> mouse <br> "+" Out : <br> printer <br>"+" Out: <br> monitor: <br>"];
document.write(values );
//  Q no 14:
document.write("<b> Q no 14:</b> <br>");
let values2 = [" Out: <br> keyboard <br>"+"Out: <br> mouse <br>"+"Out: <br> printer <br>"+"Out: <br> monitor <br>"];
let valuesReverse = values2.reverse();
document.write(valuesReverse);
//  Q no 15:
document.write("<b> Q no 15:</b> <br><br>");
let Mobiles = ["Apple <br>","Samsung <br>","Motorola <br>","Nokia <br>","Sony <br>","Haier <br>"];
let removeQoma = Mobiles.join("");
document.write("<b> Select Your Mobile</b> <br>");
document.write(removeQoma);
                             ///<<<<<<<<<<<< chp no 17-20>>>>>>>>>>>>>>>>>////
//  Q no 01:
document.write("<b> Chp no 17-20: </b> <br><br>");
let emptyArray = [[]];
//  Q no 02:
document.write("<b> Q no 02: </b> <br><br>");
let multiArray = [[0,1,2,3 + "<br>"],[1,0,1,2 +"<br>"],[2,1,0,1 +"<br>"]];
let multiArray2 = multiArray.join("");
document.write(multiArray2 +"<br>");
//  Q no 03:
document.write("<b> Q no 03: </b> <br><br>");
for (var i = 1; i <= 10 ; i++){
    document.write(i)
}
//  Q no 04:
document.write("<br><b> Q no 04: </b> <br><br>");
let numberTable = prompt("Enter a number to show the multiplication table");
let tableLength = prompt("Enter length multiplication table");
document.write(" Multiplication table of &nbsp"+ numberTable + "&nbsp length" + tableLength +"<br>");
       // creating table :
for (var i = 1; i <= tableLength; i++) {
// multiplay i with a number :
const resultOftable = i * numberTable;
// display the result
 document.write(`${numberTable} × ${i} = ${resultOftable} <br>`)
}
//  Q no 05:
document.write("<b> Q no 05: </b> <br><br>");

let fruits = ["apple","banana","mango","orange","strawberry"];
for (let i = 0; i<fruits.length; i++ ){
    document.write(fruits[i] +"<br>")
}
for (let i = 0; i<fruits.length; i++ ){
    
    document.write("<br> Element at index"+ i + "is"+ fruits[i]  )
}
//  Q no 06:
document.write(" <br><b> Q no 06:<br> Counting </b> <br><br>");
// a :
let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write(counting +"<br><br>");
// b:
document.write("<b>Reverse Counting </b><br><br>")
let sequenceCount =[1,2,3,4,5,6,7,8,9,10];
let reverseCount = sequenceCount.reverse();
document.write(reverseCount +"<br><br>");
// c:
let evenArray = [0,2,4,6,8,10,12,14,16,18,20];
document.write("<b> Even </b><br><br>");
document.write(evenArray +"<br><br>");
// d:
let oddArray = [1,3,5,7,9,11,13,15.17,19];
document.write("<b> Odd </b><br><br>");
document.write(oddArray +"<br><br>");
// e:
let seriesArray = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"];
document.write("<b> Series </b><br><br>");
document.write(seriesArray +"<br><br>");
//  Q no 07:
let askFromUser = prompt("Welcome to ABC Bakery.What do you want to order sir/mam?");
let bakeryItems =["cake","apple pie","cookie","chips","patties"];
for (var i = 0; i < bakeryItems.length; i++){
if (askFromUser === bakeryItems[i]) 
    alert(askFromUser +" is available at index " + i + " in our bakery " )
else{alert ("sorry." + askFromUser + " is not available in our bakery ")
}
 }
//  Q no 08:
document.write("<b> Q no 08: </b> <br>");
let A = [24,53,78,91,12];
let largest = A[3];
for(var i = 1; i < A.length; i++){
    if (A === largest) {
        
    }
    console.log(largest)
}
document.write("Array items:" + A +"<br>");
document.write("The largest number is" +  largest +"<br>")
//  Q no 09:
document.write("<b> Q no 09: </b> <br>");

let smallest = A[4];
for(var i = 1; i < A.length; i++){
    if (A === smallest) {
        
    }
    console.log(smallest)
}
document.write("Array items:" + A +"<br>");
document.write("The smallest number is" +  smallest +"<br>")
//  Q no 10:
document.write("<b> Q no 10: </b> <br><br>");
let numberOfMultiply = 5
for ( var i = 1; i <= 20 ;i++){
    document.write(numberOfMultiply * i +",")
}




