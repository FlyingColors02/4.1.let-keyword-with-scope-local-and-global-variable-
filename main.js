//VARIABLES
// keywords: let, var, and const

//1.let keyword with scope(local and global variable)

//case 1
let intValue0= 0; //global variable
console.log(intValue0); //0

//since their is only one scope here that is global therefore it is global variable.

////////////////////////////////////////////////////////////////////////////////////////////


//case 2
let intValue1 = 1;    //global variable(since variable is defined out of the scope)
{
  console.log(intValue1); //1
}
//scope: the functional bracket(i.e;{}) is scope
//global variable can be access outside as well as inside the scope.

///////////////////////////////////////////////////////////////////////////////////////////////////


{
  //console.log(intValue2); //case 3: error- cannot access 'intValue2' before initialization
  let intValue2= 2;      //local variable
  console.log(intValue2);//2
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(intValue3); //case 4 :error- undefined
{
//console.log(intValue3); // error: cannot access 'intValue3' before initialization
let intValue3= 3;      //local variable
console.log(intValue3);//3   (within the scope u can access the data after defining it)
}


/*note: within the scope we get error "cannot access before initialization"
   but in case 4 'intValue3' is defined in a scope and we want to access it before 
   the scope has even started. So interpreter cannot find 'intValue3' which is a local variable.
 */ 

////////////////////////////////////////////////////////////////////////////////////////////////////

{
    //console.log(intValue4);     //error: cannot access 'intValue' before initialization
    let intValue4= 4;            // local variable(since defined within the scope)
    console.log(intValue4);      //4
}
//console.log(intValue4);         //case 5: error- undefined



/* here 'intValue' is defined within the scope and with we want to access it outside it 
but after the variable is defined. But let keyword works only within the scope so we get 'undefined' error
*/


/*Note: case-4 and case-5 are completely different as in case 4 we want to access the value 
before declaration and in case-5 we want to access the value after declaration */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let intValue5;   //declared
{
  intValue5=5; //defined
  console.log(intValue5); //5
}
console.log(intValue5); //5

//'intValue5' is global variable since declared outside scope

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*IMPORTANT*/

let intValue6;   //declared
{
  
  console.log(intValue6); //undefined (without error: it gives undefined output but execute the further code)
  intValue6=6; //defined
  console.log(intValue6); //6
}
console.log(intValue6); //6

//just because we have declared the variable and now it is global variable it won't give exception else undefined output

/////////////////////////////////////////////////////////////////////////////////////////////////////

let intValue7;   //declared
{
  intValue7=7.1; //defined
  console.log(intValue7); //7.1
}
console.log(intValue7); //7.1 (no error because their is already defined value for intValue6(global variable))
intValue7=6.2;


////////////////////////////////////////////////////////

 let intValue8= 8;  //global variable(since defined outside scope)
 {
   //console.log(intValue8);  //cannot access before initialization
   let intValue8 = 8.3;         //local variable(defined within scope)
   console.log(intValue8); //8.3
 }
 console.log(intValue8); //8


 //here both the variable are having same name(bad practice) 
