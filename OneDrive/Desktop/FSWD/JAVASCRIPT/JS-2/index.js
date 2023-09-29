// console.log('Lets Start');

// // Object Creation 

//  let recatangle = {
//     length : 1,
//     breadth : 2,

//     // Adding behavior
//     draw: function() { // This is a Method / function
//         console.log('draw');
//     }
//  };

//  // Factory Function 

//  function createRecangle (length, breadth) { // Inside the (input is taken form the user)
//     let recatangle = {
//         // length: 1,
//         // breadth : 2,

//         length,           // using this you can take user input of their values 
//         breadth,

//         draw: function(){
//             console.log('Drawing Recatangle');
//         }
//     }
//     return recatangle;
//  };

//  //  recatangle.draw(); // Using . dot function you can access their properties 

// // Calling the Object for New Object Creation 
//  let recatangleObj1 = createRecangle(10,25);

//  let recatangle2 = createRecangle(5,9);
//  let recatangle3 = createRecangle(8,20);

//  console.log(recatangleObj1);


/* Constructor Function -> property/ Methods -> Initialization or define 

    Follow - Pascal Notation - first latter of every word is Capital - NumberOfStudent 
*/

// function Rectangle (len, bread){
//     this.length = len;
//     this.breadth = bread;
//     this.draw = function(){
//         console.log('Drawing');
//     }
// }; 

// // Object Creation using Constructor Funtion

// let rectangleObject = new Rectangle(5,9);

// rectangleObject.color = 'Yellow' // Adding new property 
// console.log(rectangleObject);

// delete rectangleObject.color; // Deleting any propety of object 
// console.log(rectangleObject);


// let Recatangle1 = new Function (
    
// 'length','breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw = function(){
//     console.log('Drawing');
// }`);

// let react = new Recatangle1(2,3);
// console.log(react);



// // Primitive - copy Banti hai 

// let a = 10;
// let b = a;
// a++;

// console.log(a); //11
// console.log(b); //10


// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);


// // Reference - Pointing at same address

// let c = {value : 10};
// let d = c ;
// c.value++;
// console.log(c); // 11
// console.log(d); // 11


// let a = {value : 10};

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value); // Output 11 


// Iterating through objects 


// For-in Loop
// let recatangle = {
//     length : 2,
//     breadth : 4
// };

// for(key in recatangle){

//     //keys are accessing through the Key variables 
//     //Values are accessing through the rectangle[key]

//     console.log(key, recatangle[key]);
// }

// // How to check any Object Having propeties 

// if( 'length' in recatangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }


// Object Cloning - copy an object from other object 


let src = {
    a : 10,
    b : 20,
    c : 30
};

// let dest = {};

// // 1 Iteratiing method
// for( let key in src){
//     dest[key] = src[key]
// }
// console.log(dest);

// 2 Assign cloning

// let dest = Object.assign({}, src);
// console.log(dest);


// 3. Spread Cloning

let dest = {...src};
console.log(dest);
