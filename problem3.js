function deleteInvalids(array) {
   if(Array.isArray(array)){
        let result=[];
        for(const ar of array){
            if(typeof ar === 'number' && !isNaN(ar) ){
                result.push(ar);
            }
        }
        return result;
   }else{
        return 'Invalid Array';
   }
}


console.log(deleteInvalids([1 , 2 , 3]));