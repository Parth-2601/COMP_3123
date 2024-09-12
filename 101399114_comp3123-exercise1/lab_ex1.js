//Parthkumar Patel
//101399114clear

//1.Capitalize First Letter of all the words in string
function capitalizeFirstLetter(str){
    return str.replace(/\b\w/g, char => char.toUpperCase())
}
console.log(capitalizeFirstLetter("the quick brown fox"))


//2.Find the largest number
function findLargestNumber(a,b,c){
    return Math.max(a,b,c)
}
console.log(findLargestNumber(58,45,76));
console.log(findLargestNumber(-28,-5,-18));


//get last 3 char of word to the front
function right(str) {
    if (str.length >= 3) {
        let char = str.split(''); 
        let lastThreeChar = char.splice(-3); 
        return lastThreeChar.join('') + char.join(''); 
    } else {
        return str; 
    }
}
console.log(right("python"));
console.log(right("fullstack"));
console.log("hi")


//4.Type of angle
function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid Angle";
    }
    else if (angle < 90) {
        return "Acute";
    }
    else if (angle === 90) {
        return "Right";
    }
    else if (angle > 90 && angle < 180) {
        return "Obtuse";
    }
    else if (angle === 180) {
        return "Straight";
    }
}

console.log(angle_Type(240));
console.log(angle_Type(45));
console.log(angle_Type(90));
console.log(angle_Type(125));
console.log(angle_Type(180));