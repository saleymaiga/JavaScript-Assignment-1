//How to work with variables
var x = 5;
var y = 4;
alert(x*y);

var x = "saley";
var y = "maiga";
console.log (x +","+ y);
console.log (y + "," +x);

var x = 20 ;
console.log(x * 40);

//to send an alert
alert("we pur the alert here ");

// to open the console on mac : Option+command+j 

//to log to a javascript console
console.log("this is what we will see on the console")

/* diffent data type
we have 4 different data type: 

-the string : example "My name"
-the numbers : example : 1, 2, 5, 10 ....
-the boolean that send a true of false value 
-and the undifined data () */


//working with arrays
  var my_collection = ["ford_edge", "htc_one","iphone_5s"];

	console.log(my_collection[2]);
	alert(my_collection[2]);

	var my_cars =[ "ford_edge","honda_civic"];
	var my_sport = ["basketball", "football"];

	var what_i_like = [my_cars, my_sport];

	console.log(what_i_like[0][0]);


//testing
var x = 5;
var y = 5;

var a = "saley"
var b = "maiga"

var z = x + a;
var c = y + a;

if (x !==y){
console.log ("This is not possible")
  }else if (x === a) {
  	console.log(" this is not possible at all. How dare you ")
 }else {
	console.log("Try again !!!")
}


//function

//function 1
doorCode(12345)
function doorCode(number){
	if(number ===1234){
	 alert("you are now logged in !");
   }else{
	alert(" Wrong passcode. Try again ");
   }
}

//function 2
numberOfContainer(7)
function numberOfContainer(result){
	if(result === 7 ){
		console.log("You won a computer");
	}else{
		console.log("It did not match ! ");
	}		
} 


//function 3
myFavorteColor("blue")
function myFavorteColor(color){
	if(color === "red" ){
		console.log("this is not the right color");
	}else {
		console.log("The answer was blue ");
	}		
} 









































