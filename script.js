
/*
    function zad1(a, b){
        if (b===0){
            return 1;
        }
        let result = a;
        let result = b;

        if (b < 0){
            range = range * (-1);
        }

        for (let i = 1; i < b; i++){
            result = result * a;
        }
        return b < 0 ? 1 / result : result
    }
*/

function zad1(a, b){

    function zad2(a, b){
        for (let i=0; i<a; i++){
            let row = '';
            for(let z=0; z<b; z++){
                if (i%2 === 0){
                    if(z%2 ===0){
                        console.log("#")
                    }else{console.log(" ")
                }else{
                    if(z%2===0){
                        row = row + "";
                    }else{}
                }

                    }
                }
            }
        }
    }

function zad3(hour, min, dur){
        const MIN = 60;
        const SUT = 24;
        let futureMins = (dur+min) % MIN
        let tempM
        let futureHours = (((hour * MIN) + min + (dur - futureMins)/ MIN)) % SUT
    return `${futureHours}:${futureMins}`

    
}
