    let counter = 0
    while (counter <= 9){
        // console.log(counter);
        const ood = counter % 2;
        const condition = ood ===0;
         if (condition) {
        console.log('hi',counter);

        } else {
            const negativ = -counter;
            console.log('li',negativ);
        }    
        counter = counter +1;
    }
    console.log('fff',counter);

    