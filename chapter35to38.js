
// -------------------- CHAPTER 35 - 38 0----------------------------

// -------- Q1

var crtime = new Date();
document.write("<br><br>"+crtime);


// ------ Q2

var fname,lname;
function userfullname(fname,lname){
   
    fname = prompt("Enter first Name : ");
    lname = prompt("Enter Last Name : ");
    return fname+lname;
}

document.write("<br> Full Name : "+userfullname(fname,lname)); 

// ---------- Q3

var n1,n2;
n1 = +prompt("Enter First Number : ");
n2= +prompt("Enter Second Number  : ");
function sum(n1,n2){
    return (n1+n2);
}
document.write("<br> Sum is : ",sum(n1,n2));

// ------ Q4

var num1,num2,operator;
num1 = +prompt("Enter 1st Number : ");
num2 = +prompt("Enter 2nd Number : ");
operator = prompt("Enter Operation (+,-,*,/) : ");

function calculator(num1,num2,operator){
if(operator=="+"){
    return(num1+num2);
}
else if(operator=="-"){
    return(num1-num2);
}
else if(operator=="/"){
    return(num1/num2);
}
else if (operator=="*"){
    return(num1*num2);
}
else{
    document.write("<br>invalid");
}

}
document.write("<br> Answer : ",calculator(num1,num2,operator));

// ----------Q5

var a = +prompt("Enter Number for Square : ");
function sq(a){
    return (a*a);
}
document.write("<br> Square is : ",sq(a));

// -------- Q6

var n =+prompt("Enter Number for Factorial : ") ;

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  answer = factorial(n)
  document.write("<br>The factorial of " + n + " is " + answer);

 

  // -------- Q8

  var base = +prompt("Enter Value of Base " );
  var perp = +prompt("Enter value of Perpendicular : ");
   var hyp;
  function calhyp(hyp){
    function calbase(base){
        return (base*base);
    
    }
    function calperp(perp){
        return  (perp*perp);
         
    }
    return (calbase(base)+calperp(perp));
   }
document.write("<br> Hypotenuse^2 is : ",calhyp(hyp));

// ---------- Q9

var height = +prompt("Enter Value of Height " );
  var width = +prompt("Enter value of width : ");
  function areaofrect(height,width){
    return (height*width);
  }
  document.write("<br> Area of Rectangle : ",areaofrect(height,width));

  // ------------- Q 14
  var radius = +prompt("Enter Value of Radius for Circumference of Circle : ");

  function circumferenceofcircle(radius){
    return(2*3.142*radius);
  }
  document.write("<br> Circumference of Circle : ",circumferenceofcircle(radius));

  var radius1 = +prompt("Enter Radius for Area of Circle : ");
  function areaofcircle(radius1){
    return(3.142*radius1*radius1);
  }
  document.write("<br> Area of Circle : ",areaofcircle(radius1));