const findPies = (Pies,sweet) =>{
    let sum =0;
    for(let i=0; i<Pies.length; i++){
        if(Pies[i]===6){
            console.log([i])
        }
        for(let j=i+1; j<Pies.length; j++){
            sum = Pies[i] + Pies[j]
            if(sum === 6){
                console.log([i,j])
            }
            for(let k=j+1; k<Pies.length; k++){
                sum = Pies[i] + Pies[j] +Pies[k]
                    if(sum === 6){
                        console.log([i,j,k])
                    }
            }
        }
    }
}
findPies([1, 2, 3, 2, 1],6);