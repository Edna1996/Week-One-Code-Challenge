function gradeConverter() {
    //The prompt-sync Node module provides an easy-to-use alternative to this callback-based syntax
    const prompt = require('prompt-sync')();
    studentMarks = prompt("Enter your marks: ");

    if (studentMarks > 79 && studentMarks <= 100) {
        return `Grade A`;
    } else if (studentMarks >= 60 && studentMarks <= 79){
        return `Grade B`;
    } else if (studentMarks > 49 && studentMarks <= 59){
        return `Grade C`;
    } else if (studentMarks > 40 && studentMarks <= 49) {
        return `Grade D`;
    } else if (studentMarks >= 0 && studentMarks <= 40){
        return `Grade E`;
    } else {
        return `Invalid marks entry`
    }
}
console.log(gradeConverter());


