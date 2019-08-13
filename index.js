// Declaring Variables and assign values to these variables
    
    let firstName = "Hatem" , lastName = "Zreek"; 

    let name = "Natalia", nationality = "Russia" , favoriteColor = "green" , job = "Junior developer" , age = 33;

    let length = 16.78; // I think it is a number
    let surname = "Johnson"; // I think it is a string
    let car = ""; // I think it is also a string
    let isOpen = true; // I think it is a boolean

    let ageMark = "31" , ageJohn = 32;

    let ageTest = ageMark > ageJohn;

    let a = 3 , b = 4 , c = 5;

    let programmingLanguage = "JavaScript" , isFun = true;

    let test;

    let calculation = [(2*4) / (4-2)] + [(6/3) * (5-2)];

// 1. Vars & console.log() 
   
    console.log(firstName, lastName);
    console.log("---------------------------------------------------------------------------------------------------------");

// 2. Variable Info!
    
    console.log(name, nationality, favoriteColor, job, age);
    console.log("---------------------------------------------------------------------------------------------------------");

// 3. Concatenation

    console.log("I am "+ name+ " and I am from "+nationality+" .I work now as a "+job+" .I am "+age+" years old and my favorite color is "+favoriteColor+".");
    console.log("---------------------------------------------------------------------------------------------------------");

// 4. Data Types
   
    console.log("length is a "+typeof length+" ,surname is a "+typeof surname+" ,car is a "+typeof car+" ,and isOpen is a "+typeof isOpen);
    console.log("---------------------------------------------------------------------------------------------------------");

// 5. Number Vars
    
    console.log("ageMark is a "+typeof ageMark+" , and ageJohn is a "+typeof ageJohn);
    console.log("---------------------------------------------------------------------------------------------------------");

// 6. Who's older?

    console.log("John is older than Mark: "+ ageTest); //ask
    console.log("---------------------------------------------------------------------------------------------------------");

// 7. Compare and contrast
   
    console.log("Is a === b :"+ (a===b) + " Is b === c :"+ (b===c) + " Is a ===c :"+ (a===c));
    console.log("The type of this check is --> "+ typeof((a===b)&&(b===c)&&(a===c))); //ask
    console.log("---------------------------------------------------------------------------------------------------------");

// 8. isFun?
   
    console.log(programmingLanguage + " is fun:" +isFun);
    console.log("---------------------------------------------------------------------------------------------------------");

// 9. What type is it?
    
    console.log(typeof(test) + "---> the type of the test is undefined because we need to assign a value otherwise it will still undefined.");
    console.log("---------------------------------------------------------------------------------------------------------");

// 10. Calculation!
   
    console.log("Calculation = "+ calculation);
