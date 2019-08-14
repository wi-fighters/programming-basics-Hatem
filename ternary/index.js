//1. canDrive?
    const minimumAge = 18 ;  
    const personAge = 31 ; 
    const canDrive = (personAge >= minimumAge) ? "Yes, you can drive! Hope you have a license" : "Nope, you're too young!";
    console.log(canDrive);

//2. Slow Down!
    const maximumSpeed = 130 ;
    const speed = 200 ;
    const speedCheck = (speed > maximumSpeed) ? "You're going too fast - slow down!" : "You're driving below the speed limit";
    console.log(speedCheck);

//3. How old are you?
    const suitableAge = 21 ;
    const myAge = 31 ;
    const ageCheck = (myAge < suitableAge) ? "Here's some juice" : "Here's some wine";
    console.log(ageCheck);

//4. Student Discount
    const student = true ;
    const isStudent = (student) ? "Ticket costs €5,00" : "Ticket costs €12,00";
    console.log(isStudent);

//5. What time is it?
    const isMorning = false ;
    const timeofDay = (isMorning) ? "Good Morning" : "Good Evening";
    console.log(timeofDay);


