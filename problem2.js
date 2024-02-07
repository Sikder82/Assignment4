function checkName(name) {
    if(typeof name === 'string'){
        const n=name.length;
        const s=name[n-1].toLowerCase();
        if(s=== 'a' || s=== 'y' || s=== 'i' || s=== 'e' || s=== 'o' || s=== 'u' || s=== 'w'){
            return 'Good Name';
        }else{
            return 'Bad Name';
        }
    }else{
        return 'Invalid Input';
    }
}

console.log(checkName(['Rashed']));