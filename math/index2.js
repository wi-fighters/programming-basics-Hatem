// 1. Lowest Number
    const x = 2 ; y = 4 ; z = 6 ;
    console.log(`the lowest number is: ${Math.min(x,y,z)}`);

// 2. Highest Number
    const array = [1 , 2 , 3 , 4 , 5];
    console.log(`the highest number is: ${Math.max(...array)}`);

// 3. Rounding
    const a = Math.ceil(3321.32321);
    const b = Math.ceil(326.76);
    const c = Math.ceil(76788.7);
    const d = Math.ceil(-9.78);
    const e = Math.ceil(43.342);
    const f = Math.floor(3321.32321);
    const g = Math.floor(326.76);
    const h = Math.floor(76788.7);
    const i = Math.floor(-9.78);
    const j = Math.floor(28.329);
    console.log(`the rounding up numbers: ${a} ${b} ${c} ${d} ${e}`);
    console.log(`the rounding down numbers: ${f} ${g} ${h} ${i} ${j}`);

// 4. Dice Roll!
    const firstNumber = 1;
    const secondNumber = 6 ;
    console.log (` the random number between 1 -- 6 is: ${Math.floor(Math.random() * ((secondNumber-firstNumber)+1) + firstNumber)}`);
