// syntax of js 

/**
 * Data types 
 * 
 * numbers 
 * 1 2 -2 0.4 
 * 
 * string => 'anuthing' or "ahmad"
 * 
 * Boolean =>  true / false 
 * 
 */

/**
 * 
 * variables => container for the values/ storing 
 * 
 *  var x = 12
 * var name = "ahmad"
 * 
 */
//use strict

//operators 
/**
 * 
 * assigment op   =>   = 
 * 
 * arthmatics op =>  + , - , *, / , % 
 *  1+1 , 9%3
 * 
 * comprasion op => 
 * 
 * > , < ,==,===, !=, >= , x++ , +=
 * 
 */

// var firstName = "Hannen"
//show it on the console
// console.log(firstName)
// console.log("hello console")

// var x = '123 ! @ ahahsnsanskadn'

// console.log(x)

// console.log(1+1, 2>5, 7<10)

// var num = 10
// var num2 = 829298
// var concat = firstName + "  "+ num
// var sum = num + num2 
// console.log(concat ,"sum result", sum)

// console.log(++num)

//boolean variable
// var isGreater = true 

//undefined
// var z
// //NaN
// var y = z + 10

// console.log(z, "y=",y)


// console.log(1==1, 1>8)



/*
is 1 == 1 / value 
is 1 === 1 / value and datatype
 */

// console.log(1==1 , 1=='1',1=='12',1=='9')

// console.log(1===1, 1==='1')

/*

pop up boxes 

alert("hey and welcome")//show info to the user

prompt() // input smth from user

document.write()

*/

/*
logical operators 
&& ! || 

truth table 

T && T => T
F && T => F
F || T => T
F || F =>F
T && T && F => F

 */

// var name = prompt("what is your name")

// alert("hey, wlecome to my website " + name )

// var favCar = prompt("what is you fav car?")

// // console.log(name)

// document.write('<p>' + favCar + "</p>")

// document.write("hello from javascript")


//logical op ex

// console.log(1==1 && 1>0)
// console.log(1==9 && 1>0)
// console.log(1==9 || 1>0)

/*
conditional statment 

if(condition){
  //do smth
}
else{

}

*/

// if(1<0 || 1===1){
//   console.log('yes it is')
// }
// else{
//   console.log("no it is not")
// }


/**

loops

we use to repeat smth , to do smh over and over again

for(initiate a variable; condition;counter){

  code i want to repeate 
}
var i = 0
console.log(i)
console.log(i++)


while loop

while(condition){
code goes here
  counter
}


 */


// for(var i = 0; i<=100;i++){
//   //code goes here 
// if(i%2 != 0)
//  { console.log(i)}
// }


// var i = 1

// while(i <= 100){
//   console.log(i)
//   i += 4
// }




var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )

var favCar = prompt("what is you fav car? , please choose one of these ; Tesla, Mazda,mercedes")


//favCar = tesla 

// tesla != Tesla => true  // tesla == Tesla =>flase
// tesla ! = Mazda => true 
// whatever != Tesla => true
// Tesla != Tesla => false
// Tesla != Mazda => true 
while(favCar != "Tesla" && favCar != "Mazda" && favCar != "mercedes"){

favCar = prompt("what is you fav car? , please choose one of these ; Tesla, Mazda,mercedes")
//favCar = whatever
//favCar = Tesla 
}

var numberOfPic = prompt("how many times you wish to see it ")

while(numberOfPic >10 ){
  numberOfPic = prompt("please enter number less than 10!")
}


if(favCar == "Tesla"){

 
for(var i = 0; i< numberOfPic;i++)

{document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop' width='100' height='100'     />" + "</div>")}
}
else if (favCar =="Mazda"){

for(var i = 0 ; i <numberOfPic;i++)

{document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://cars.usnews.com/pics/size/350x262/images/Auto/custom/14497/2021_Mazda_CX-3_1.jpg' width='100' height='100'     />" + "</div>")}
}
else if(favCar =="mercedes"){
  for(var i = 0 ; i <numberOfPic;i++)
{document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://www.mercedes-benz-mena.com/ar/passengercars/mercedes-benz-cars/models/gle/coupe-c167/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_58586423/image.MQ6.8.20191119092227.jpeg' width='100' height='100'     />" + "</div>")}
}
