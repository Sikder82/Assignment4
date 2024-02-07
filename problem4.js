function password(obj) {
    if(obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName') && obj.birthYear>=1000){
        const name=obj.name;
        const dob=obj.birthYear;
        const site=obj.siteName;
        return result = site[0].toUpperCase()+site.slice(1)+'#'+name+'@'+dob;
    }else{
        return 'Invalid Input';
    }
}


const obj={
     birthYear: 200, siteName: 'facebook' 
}

console.log(password(obj));