    let counter = 1
    while (counter <= 10){
        const ood = counter % 2;
        const condition = ood ===1;
         if (condition) {
        console.log('hi',counter);

        } else {
            const negativ = -counter;
            console.log('li',negativ);
        }    
        counter = counter +1;
    }
    console.log('fff',counter);

   
    
