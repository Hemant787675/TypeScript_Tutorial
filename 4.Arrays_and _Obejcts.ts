let cars=['audi','tata','mercedes','volvo']; //Its an array containing string values or same datatype value

cars.push('toyota'); //It will push an element

console.log(cars)
 //Following code will throw an error cause we are pushing an booolean value:
 //cars[0]=22;

 //If we have declared out array with only datatype then we can only push similar datatype value or element

 let combined=['volvo', 23,'hyuandai', 25, 'renault', 22];

 combined.push('suzuki');
combined.push(33);

console.log(combined)


//Objects in TypeScript

let obj={
    car:'naxon',
    safetyRatings:5
}

//obj.safetyRatings='4';//It will throw an error, because we cannot pass string as value here. We have given number type value at the time of declaration

obj.car='safari'; //This is the correct one

//obj.features=['FaceLift version','Andriod Display']; //We cannot add additional properties to object, because it is resemble to obj structure  


console.log(obj);
