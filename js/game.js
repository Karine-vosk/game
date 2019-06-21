$(document).ready( function(){

    //call start function
    start();
    $('.restart').click(start);
    $('.start').click(start);
    $('.close').click(restart);
    $('.restart').click(restart);


    // declaring move variable
    var step = 0;
    var countStep= $('.moves');

    //declaring time variable
    var minute=0, second=0, hour=0;
    var timer = $('.time');
    var interval;

    // to work only by clicking on the button START
    var startGame = false;

    //decalaring variable after open cards
    var pair1, pair2, openCount = 0;

    if($('.start'))

    $('.start').click(function(){

        $('.start').find('i').addClass('hide2');


        startGame = true;

        //when click on the button START the timer work
        interval = setInterval(function(){
            timer.text(minute + ' ' + 'mins' + ' ' + second + ' ' + 'secs');
            second++;

           if(second ==  60){
            //if  the efflux of 60 seconds plus minute
               minute++;
               second = 0;

           };
           if(minute == 60){
              //if  the efflux of 60 minuts plus hour
               hour++;
               minute = 0;

           };

        },1000)

    })


    $(".card").click(function(){

       if(!startGame){
           return false;
       }

        if($(this).hasClass('flipping')){
            return false;
        }

        if($('.flipping').length == 2){
            return false;


        }
        // if mouse hover then add .flipping class

        $(this).toggleClass("flipping");

        if(openCount == 0){
            pair1 = $(this).find('i').attr('class');
            openCount++;

        }
        else if(openCount == 1){

            pair2 = $(this).find('i').attr('class');
            openCount--;


        //ete bac e 2 hat hashvum e 1 qayl
        //if open 2 card == ONE STEP
         step++;
         countStep.text(step);


            if(pair1 == pair2){
                //hide div
                $('.flipping .back_card').addClass('success');

                setTimeout(function(){
                    $('.flipping .back_card').removeClass('success');
                    $('.flipping ').addClass('hide');
                    $('.flipping').removeClass('flipping');



                    //check if win
                    if($('.hide').length == 16){
                        winEnd();

                    }

                },1000)
            }
            else{
                //turn over the card

                $('.flipping .back_card').addClass('error');



                setTimeout(function(){
                    $('.flipping .back_card').removeClass('error');
                    $('.flipping').removeClass('flipping');
                },1000)
            }

        }

    });






    function start() {
            // declare icon in div
        var cardsArray = [
            'far fa-gem', 'far fa-gem',
            'fas fa-leaf', 'fas fa-leaf',
            'fas fa-cube', 'fas fa-cube',
            'fas fa-anchor', 'fas fa-anchor',
            'fas fa-bomb', 'fas fa-bomb',
            'far fa-paper-plane', 'far fa-paper-plane',
            'fas fa-bicycle', 'fas fa-bicycle',
            'fab fa-fly', 'fab fa-fly'
        ];


        $('.back_card').each(function () {

            //declare variable cardsArray length
            var arr_length = cardsArray.length;

            //declare variable Math.random(stanum enq patahakan i - 0-ic minchev 15)
            var i = Math.floor(Math.random() * arr_length);

            //through removeATTR remove classes
           $(this).find('i').removeAttr('class');

            //through addCLASS add [i]
            $(this).find('i').addClass(cardsArray[i]);
            //myArray.splice(start, deleteCount)
            cardsArray.splice(i, 1);//bacarum enq krknvelu depqery
        })

    }

    function winEnd() {


        $('#on_popup').addClass('show');

        clearInterval(interval);
        var finalTime = timer.text();

        $('.total_time').text(finalTime);

        $('#final_move').text(step);
    }

    function restart(event){


        $('.start').find('i').removeClass('hide2');

        startGame= false;
        //reset timer
        minute=0;
        second=0;
        hour=0;
        timer.text('0 mins 0 secs');
        clearInterval(interval);

        //reset moves
        step=0;
        countStep.text(step);

        openCount=0;
        $('.flipping').removeClass('flipping');
        $('.hide').removeClass('hide');


        if($(event.currentTarget).hasClass('close')){
            $('#on_popup').removeClass('show');
        }




    }



})
function operation(oper){
    var localOperMemory = display.value;// this var only work this function

    //console.log(localOperMemory);
    // console.log(memoryPendingOper);
    if(memoryNewNumber && memoryPendingOper != '='){
        display.value =  memoryCurrentNumber;



    }
    else {

        memoryNewNumber = true;

        // console.log(oper);
        console.log(display.value);


        //console.log(oper);
        if(memoryPendingOper === '+'){
            memoryCurrentNumber += parseFloat(localOperMemory);
        }
        else if(memoryPendingOper === '-'){
            memoryCurrentNumber -= parseFloat(localOperMemory);
        }
        else if(memoryPendingOper === '*'){
            memoryCurrentNumber *= parseFloat(localOperMemory);
        }
        else if(memoryPendingOper === '/'){
            memoryCurrentNumber /= parseFloat(localOperMemory);
        }
        else{
            memoryCurrentNumber = parseFloat(localOperMemory);
        };

        display.value = memoryCurrentNumber;

        memoryPendingOper = oper;

    };
	
	
};






/*var z =['klara', 'adame', 'bred', 'olga','karol'];

function zArg(){
	if(zArg.length <= 5){
		console.log(zArg[3]);
	}
	else{
		alert('empty');
	}
}

zArg(z);

const s = ()=> {
	var book='rose';
	

};
s(25,'mmm', 35);

function gam(){
	//console.log(arguments.length);
}

gam();

let city= 'rio';
const f=()=>{
	let city='vashigton';
	//alert(city);
}



console.log(city);
f();


var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
};

//debugger;
var a =5;
function foo(a){
		'strict mode'
		console.log('execute callback function');
	
}

const cal = function(callback){
	callback()

}
cal(foo);

//foo();
let b=15;
let c=a+b;
//let c=25;

/*for (let i=0; i<=400; i++){
	console.log (i);
	
}

for(let i=4; i<=13; i=i+3){
	
	console.log(i); 
	
	
}

for(let i=654; i>=652; i--){
	
	console.log(i); 
	
	
}

for(let i=1983; i<=2017; i++){
	
	console.log(i); 
	
	
}*/

/*let str =9;

for(let i=1; i<=10; i++){
	
	console.log(str + ' * ' + i  + ' = ' + str * i); 
}*/

/*for(let i =1; i<=10; i++){
	for(j=1; j<=10; j++){
		console.log(i + ' * ' + j  + ' = ' + i * j); 
	}
}

function addSum(){
	let sum=0;
	for(let i = 0; i<=100; i++){
		sum +=i;;
	}
	console.log(sum);
}
 addSum();

	
function numbMult(){
	let mult =1;

	for(let i=1; i<=50; i++){
		mult = mult * i;
	}
	console.log(mult); 
}
	numbMult();/*
	
/*let arr =[1, 2, 3, 4, 5];

for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}

let arr1 =[2, 3, 4, 5];
let gumar =1;
for(let i=0; i<arr1.length; i++){
	gumar = gumar * arr1[i];

}
console.log(gumar);


let obj ={
	armenia: 'erevan',
	russia: 'moskow',
	germany: 'berlin',
}

for (let key in obj){
	console.log(key + 'is ' + obj[key] + '.');
}*/

//Выведите столбец чисел от 1 до 100


/*let i= 0;
while(i<=100){
	if(i%2==0){
		console.log(i);
	}

	i++;
}

/*let j= 1;
while(j<=33){
	
	console.log(j);
	j++;
}

for(let i=0; i<100; i=i+2){
	console.log(i);
}

/*for(let j=1; j<33; j++){
	console.log(j);
}





let obj = {paul: '200', anna: '300', alis: '400'};

for(let key in obj){
	//console.log(key);
	console.log(key + 'salary is'+ obj[key]);
}

let arr = [1, 2, 5, 9, 4, 13, 4, 10];

for(let i = 0; i < arr.length; i++){
	if(arr[i]==4 ){
	
		console.log('it is');
		break;
	}
	
	
	
}

var arr = [10, 20, 30, 50, 235, 3000];


for(var i = 0; i < arr.length; i++){
	var arrIndex = arr[i].toString();
	var firstNum = Number(arrIndex[0]);
	console.log(typeof firstNum)
	//firstNum.parseInt();
	if(firstNum === 1 || firstNum === 2 || firstNum === 5){
		alert(arr[i]);
	}
		
	
}*/



/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i =0; i < arr.length; i++){
	console.log('-' + arr.join('-'));
}*/


/*let arr = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let i = 0; i < arr.length; i++){
	
	if( arr[i] === 'Saturday'  || arr[i] === 'Sunday'){
		console.log(arr[i] + 'is weekend');
		//console.log(arr[6] + 'is weekend');
		
	}
	else{
		//console.log('hello');
		console.log(arr[i]);
	}
	
}

let arr = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let i = 0; i < arr.length; i++){
	
	if(i === 5  || i === 6){
		console.log(arr[i] + 'is' + ' '+ 'weekend');
		//console.log(arr[6] + 'is weekend');
		
	}
	else{
		console.log(arr[i]);
	}
	
}*/


/*let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


for (let i = 0; i < dayList.length; i++){
	let today = new Date();
	//let day = today.getDay();
	let day = dayList[today.getDay()];
	
	if(dayList[i]== day){
		console.log(day+ ' ' + 'it is red')
	}
	else{
		console.log(dayList[i]);
	}
	
}

let monthList =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'Noyember', 'December'];


for(let i = 0; i < monthList.length; i++){
	let curMonth = new Date();
	let month = monthList[curMonth.getMonth()];
	
	if(monthList[i]== month){
		console.log(month + ' ' + 'it is a current month');
	}
	else{
		console.log(monthList[i]);
	}
	
}

let n =1000;
let step =0;
 while(n > 50){
	 console.log(n =n / 2);
	 step++;
	 
	 
 }
console.log(step);


let test = true;

/*if(test){
	console.log('it is true');
}
else{
	console.log('it is false');
}

if(test !=true){
	alert('it is true');
}
else{
	alert('it is false');
}*/

//5, 0, -3, 2


/*let as = 6;

if(as > 0 && as < 5){
	console.log('it is true');
}
else{
	console.log('it is false');
}*/

//Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

/*let as = 4;

if(as == 0 || as == 2){
	as += 7
	console.log(as);
}
else{
	as /= 7
	console.log(as);
}


 let d = 6;
 let f =  5;
 let cc = 0;
 
 if(d == 1 && f >= 3 ){
	 cc = d + f;
	 console.log(cc);
 }
 else{
	 cc = d - f;
	 console.log(cc);
 }
 
 
  переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). Показать решение.

 let day = 22;
 
 if (day <= 10){
	var part = 1;
 }
 if(day >= 11 && day <= 20){
	 var part = 2;
 }
 if(day >=21 && day <=31){
	 var part = 3;
 }
 
 alert(part);
 let month = 12;
 
 if(month == 12 || month <= 2){
	 var sezon = 'winter';
 }
 if(month >=3 && month <= 5){
	 var sezon = 'spring';
 }
 if(month >= 6 && month <= 8){
	  var sezon = 'summer';
 }
 
 if(month >= 9 && month <=11){
	  var sezon = 'autumn';
	 
 }
 
 alert(sezon);
 
 
var symbol = 'abcde';
var firstLet = symbol.charAt();

if(firstLet == 'a'){
	console.log('yes');
}
else{
	console.log('no');
}


var strNum = '12345';

if(strNum[0]==1 strNum[0] == 2 || strNum[0] == 3){
	console.log('yes');
}
else{
	console.log('No');
}


var strNum = '345';
var sum = Number(strNum[0]) + Number(strNum[1])+ Number(strNum[2]);
console.log(sum);

var strNum = '124152';
var substr1 = strNum.substr(0,3);
var sum1 = Number(substr1[0]) + Number(substr1[1])+ Number(substr1[2]);
var substr2 = strNum.substr(3,5);
var sum2 = Number(substr2[0]) + Number(substr2[1])+ Number(substr2[2]);

if(sum1 == sum2){
	console.log('it is right');
}
else{
	console.log('it is false');
}

let d = 2;
let f = 9;

var st = Math.pow(2,10);
console.log(t); 


var t= Math.sqrt(245);

console.log(t); 

var arrNum  = [4, -2, 5, 19, -130, 0, 10, -255, -560];

var maxNum = Math.max.apply(null, arrNum);
var minNum = Math.min(...arrNum);
var randomNum = Math.random.apply(null, arrNum);
//Math.min( ...arr)
console.log(maxNum + ' ' + minNum);
console.log(Math.floor(randomNum));




let str ='aaa@bbb@ccc';
let d = str.replace(/@/g, 'FD');
console.log(str);

let str = 'aaa bbb ccc';
let sliceStr = str.slice(4,7);
let substrStr = str.substr(4,3);
let substringStr = str.substring(4,7);

console.log(str);
console.log(sliceStr);
console.log(substrStr);
console.log(substringStr);

 let str = '2025-12-31';
 let arr= str.split("-").reverse().join("/");


console.log(arr);

let str = 'js';
let v = str.toUpperCase()
console.log(v + ' ' + v.toLowerCase());


let str = 'я учу javascript';
let sliceStr = str.slice(6,16);
let substrStr = str.substr(6,10);
let substringStr = str.substring(6,16); 
console.log(str.indexOf('учу'));
console.log(sliceStr);
console.log(substrStr);
console.log(substringStr);

 
let str= 'i am learn javascript';
let arr = str.split('');

let str = '2025-12-31';
let arrRev = str.split('-').reverse().join('.');
console.log(arrRev);

let str = 'i am learn javascript';
let arr = str.split(' ');
for (let i = 0; i < arr.length; i++){
	arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
	
}
console.log(arr.join());
//console.log(str[0].toUpperCase());
//console.log(str.charAt().toUpperCase());

//varTestText
let str = 'var_test_text';
let arr = str.split('_');
for (let i = 1; i < arr.length; i++){
	arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
	console.log(arr.join(''));
}




let ac = ['a', 'b', 'c'];
let bd = [1, 2, 3];
let cd= ac.concat(bd);
cd.push(1, 2,'kl');
console.log(cd);


var monthes ={
	ru:['январь', 'февраль'],
	en: ['january', 'februar'],
}
console.log(monthes);




 var obj={js:'test', 
 jq: 'hello', 
 css: 'world'};
 
 
var arr = Object.keys(obj);
 console.log(arr);
 
 
 var str = 'wonderful';
str= str[0].toUpperCase() + str.substring(1);
 console.log( str);

var arr=[1,2,3,4,5];
arr[8]=25;
var str= '';

for(var i=0; i < arr.length; i++){
	if(arr[i]!== undefined){
		var str = str + arr[i] + ' ';
	}
		
	
}
alert(str);
let gretting, pronoun;
let arr = ['hello', 'I', 'am', 'a', 'Karine'];
[gretting, pronoun] = arr;
console.log(arr);
console.log(gretting, pronoun);

let temp = [2, 0, 5, -4, 5, 6, 15, 25, -14, 10, 5, -2];

var temp1 = [
	[1, 5, -5],
	[-2, 0, 5],
	[9, -10,5 ]
	
]
function mijHash(){
	let tempSum = 0;
	for(var i=0; i< temp.length; i++){
	tempSum += temp[i];
	var tempMij = tempSum / temp.length;
	
	}
	console.log(tempMij);

}
mijHash();
/*for(var k = 0; k < temp1.length; k++){
	var tempSum = 0;
	for(var l= 0; l < temp1[k].length; l++){
		tempSum = tempSum + temp1[k][l];
	}
	console.log(tempSum);
	console.log(tempSum/temp1[k].length);
}


var arr =[1, 22, 0, 3 ,5, -15, 2, -5, 8];
var ar =[];
for (var i = 0; i < arr.length; i++){
	if(arr[i] > 0){
		ar.push(arr[i]);
		//remove();
	}
	
}

console.log(arr);
console.log(ar + 'new array');

var arr2 = [1, 2, 3 ,5, 8];
arr2[7] = 8;
var arr3 = arr2.map((x, y, z)=>{
	return arr3 = x *2;
})

console.log(`hello ${arr3}`);

let result = 2009;
const func = (x = 262) =>{
	result= x;
}

alert(func(null));




 var x= function(){
	 //let that =this;
	 this.val = 1;
	 setTimeout(()=>{
		this.val++;
		console.log(this.val);	
	 },1)
 };


var xx=new x();


const surfArreaCalc= (radius)=>{
	return 4 * 3.14 * square(radius);

}

const square =(n) => n * n;
//let radiusNum= 3390;
const radius = surfArreaCalc(3390);
console.log(square(4));
console.log(radius);


const factorial = (n) =>{
	if(n===1){
		return 1;
	}
	else{
		return n *factorial(n-1);
	}
	
}

console.log('factorial ' + factorial(5));


let i =0;

function func(){
	console.log(i++);
	if(i<=10){
		func()
	}
}

func();

function loopC(){
	for(var i=0; i<=10; i++){
		console.log(i + 'loop');
	}

}

loopC();


let array = [1,2,3,4,5];

const arrShift = (arr, item) => {
	for(var k =0; k <= item; k++){
		console.log(arr.shift()+'el');
	}
	console.log(arr);
}

arrShift(array,4);



let names = ["Harvey", "Donna", "Mike", "Rachel" ,"Louis", "Jessica"];

while(i = names.shift() !== undefined){
	console.log(names);
}

let myArray = ["one", "two", "three", "four"];
//let arrayShift = myArray.shift();

for (let j= 0; j < myArray.length; j++){
	if(p=myArray.shift()!== undefined){
		console.log(myArray.shift());
	}
	console.log(myArray);
}

function multiply(){
	let summ =4;
	let mult =1;

	for (var p=1; p <= summ; p++){
	mult= mult* p;
	}
	return mult;

}

console.log(multiply());


let arrTiv =[1,2,3,4,5]
	
const numbMul=()=>{
	//let mult =1;
	mult= 1;
	for(let h= 1; h <= arrTiv.length; h++){
		mult= mult * h;
	}
	console.log(mult);
		
}
	numbMul();
	
	
let arrLeng = arrTiv.length;
const tivSum = (n) => {
	return n * (n+1)/2;
}
console.log(tivSum(arrLeng));	*/



let myArray = ["one", "two", "three", "four"];
//let arrayShift = myArray.shift();
let f= [];


for (let j= 0; j < myArray.length; j++){
		
	if(p=myArray.shift()!== undefined){
		f = myArray.shift();
	}
	
	console.log(myArray.length);
	
	
}

var factorial =(n) => {
	var iter = (counter, acc) => {
		if(counter === 1){
			return acc;
		}
		//else 
			return iter(counter-1, counter*acc);
			
	}
	return iter(n,1);
}


console.log(factorial(4));

var re = new XMLHttpRequest();
document.getElementById("ip_button").value='poxel';


