function numberChecking(nmbr1, nmbr2){
    if(nmbr1 > 100){
        console.log("Number 1 has too many numbers!")
    };
    if(nmbr1 < 0){
        console.log("Number 1 is a negative number!")
    };
    if(nmbr2 < 20){
        console.log("Number 2 is not a very high number..")
    };
    if(nmbr2 > 50){
        console.log("Number 2 is high number!")
    };
};
numberChecking(127, 17);