function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) && typeof livingCost === 'number'){
        let sum=0;
        for(const ar of arr){
            if(ar>=3000){
                sum+=ar*80/100;
            }else{
                sum+=ar;
            }
        }
        const saveMoney= sum-livingCost;
        if(saveMoney>=0){
            return saveMoney;
        }else{
            return 'Earn more'
        }
    }else{
        return 'Invalid Input'; 
    }
}

console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))