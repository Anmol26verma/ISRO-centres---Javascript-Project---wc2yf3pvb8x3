// line below is used to print the console window
// console.log('Hello..........!');

// let a = 8; 
// console.log(a);

// const b = 20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**3);
// console.log(" ")

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);

// console.log();

// let age = 18 ; 
// let status = age >= 18 ? 'Yes you can Vote..!' : 'No you cannot..!';
// console.log(status);

// let lastName = 'Anmol';
// console.log(lastName);

// lastName = 10 ; 
// console.log(lastName);
// console.log();

// Control Statements 

let marks = 98; 

if( marks >= 90 ){
    console.log('A');
}
else if ( marks >= 80){
    console.log('B');
}
else if ( marks >= 70){
    console.log('C');
}
else if ( marks >= 60){
    console.log('D')
}
else{   
    console.log('E');
}



let num = 2 ; 
switch ( num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C')
    break;
    default: console.log('D');
}

// Loops 

for(let i=0; i<5; i++){
    console.log(i);
}

let i = 0;
while( i<5){
    console.log("Anmol");
    i++;
}

let y = 1;
do {
    console.log(y);
    y++;
} while( y<=5);