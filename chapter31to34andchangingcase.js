

// --------------------- CHAPTER 31-34 -----------------------------------------

//------->Q1
var rightNow = new Date();
document.write(rightNow);
document.write("<br>");


//------->Q2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var nowmomth = new Date();
var curmonth = nowmomth.getMonth();
alert("Current Month : "+months[curmonth]);


//------->Q3
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var nowday = new Date();
var currday = nowday.getDay();
alert("Today is : "+days[currday]);


//------->Q4
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var nowday = new Date();
var currday = nowday.getDay();
if(currday==days["Sunday"] || currday == days["Saturday"] ){
document.write("Its Fun Day");
}
else{
    document.write("Today is : "+days[currday]);
    document.write("<br>");
}


//-------> Q5
var currdate = new Date();
var viewdate = currdate.getDate();
if(viewdate < 16){
    document.write("First fifteendays of the month");
    document.write("<br>");
}
else{
    document.write("Last days of the month");
    document.write("<br>");
}

//-------> Q6
var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var difference = Todaymilli - todayMin;
var diffmin = difference/(1000*60*60);
var accmin = Math.floor(diffmin);
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970 : " + accmin)


//-------> Q7 
var time = new Date();
var t = time.getHours();
var t2 = time.getMinutes();
if(t<12 && t2<=59){
    document.write("<br> Its AM!");
}
else{
    document.write("<br> Its PM!")
}
//document.write("<br>"+t+" : "+t2);


//-------> Q8
var laterDate = new Date();
 laterDate.setMonth(11);
 laterDate.setYear(2020);
 laterDate.setHours(00);
 laterDate.setMinutes(00);
laterDate.setSeconds(00);
 laterDate.setDate(31);
document.write("<br>"+laterDate);

//-----> Q9
var ramadandate = new Date();
ramadandate.setYear(2015);
ramadandate.setMonth(4);
ramadandate.setDate(18);
var currentdate = new Date();
currentdate.setYear(2022);
currentdate.setMonth(3);
currentdate.setDate(2);
var passeddays =( currentdate - ramadandate)/(1000*60*60*24);
document.write("<br>"+passeddays+" days have Passed since 1st Ramadan 2015.");

//------> Q10
var referencedate = new Date();
referencedate.setMonth(0);
referencedate.setDate(1);
referencedate.setYear(2015);
referencedate.setHours(00);
referencedate.setMinutes(00);
var cdate = new Date();
cdate.setMonth(10);
cdate.setDate(25);
cdate.setYear(2022);
cdate.setHours(20);
cdate.setMinutes(42);
var sec = (cdate - referencedate)/1000 
document.write("<br>"+sec+" seconds had passed since beginning of 2015");

//------> Q11
var d = new Date();
document.write("<br>Current Time : "+d);
 d.setHours(d.getHours()-1);
document.write("<br>1 hour ago it was : "+d);



//------>Q12

var d2 = new Date();
document.write("<br> Current Time : "+d2);
d2.setYear(d2.getFullYear()-100);
document.write("<br> 100 year back it was : "+d2);


//------->Q13

var bdate = new Date();
var curryear = bdate.getFullYear();
var age = prompt("Enter Your Age : ");
var birthday = curryear - age;
document.write("<br>Your Birthday Year is : "+birthday);

//------> Q14

var months1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var customerName = "Abdullah";
var billmonth = new Date();
var bm = months1[billmonth.getMonth()];
var Number_of_Unit = 450;
var charges_per_unit = 10;
var net_amount_payable = Number_of_Unit * charges_per_unit ;
var late_amount_surcharge = 350;
var Gross_Amount_Payable = net_amount_payable + late_amount_surcharge ;
document.write( "<br><br> K-Electric Bill");
document.write("<br><br> Customer Name : "+customerName);
document.write("<br> Month : "+bm);
document.write("<br> Number Of Unit : "+Number_of_Unit);
document.write("<br> Charges per Unit : "+charges_per_unit);
document.write("<br><br>");
document.write("<br>  Net Amount Payable (within Due Date) : "+net_amount_payable);
document.write("<br> Late Payment Surcharge : "+late_amount_surcharge);
document.write("<br> . Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);



// ------------------> CHANGING CASE< --------------------
// -----------Q1

 var name1=prompt("Enter a name : ");
 name1=name1.toLocaleLowerCase( );
 console.log(name1);


//------------> Strings: measuring length and extracting parts
// --------Q1

  var phone=prompt("Enter a phone number : ");
  var total=phone.length;
 document.write("<br> <br>"+total);


 // ----------Q2

 var no=phone.slice(10);
 console.log(no);

//-----------> Strings: finding segments

// --------Q1

 var pak="pakistan";
 var con=pak.indexOf('n');
 document.write("<br>"+con);