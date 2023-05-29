import Courses from "@/utils/Courses";

function calculateMarks(final, internalMarks, midtermMarks) {
    let totalMarks = Math.round(final/2) + parseInt(internalMarks) + Math.round(midtermMarks/2);
  return Number(totalMarks);
}

const Colours =["#31ee31","#e8e234","#e9832a","#4b74dc","#de3939"];

function calculateGrade(totalMarks) {
    let grade = '';
    if (totalMarks >= 80) {
        grade = 'O';
    } else if (totalMarks >= 70) {
        grade = 'A+';
    } else if (totalMarks >= 60) {
        grade = 'A';
    } else if (totalMarks >= 50) {
        grade = 'B+';
    } else if (totalMarks >= 40) {
        grade = 'B';
    } else if (totalMarks >= 40) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    return grade;
}

function calculatePointers(grade) {
    let pointers = 0;
    if (grade === 'O') {
        pointers = 10;
    } else if (grade === 'A+') {
        pointers = 9;
    } else if (grade === 'A') {
        pointers = 8;
    } else if (grade === 'B+') {
        pointers = 7;
    } else if (grade === 'B') {
        pointers = 6;
    } else if (grade === 'C') {
        pointers = 5;
    } else {
        pointers = 0;
    }
    return pointers;
}

function calculateSGPA(allSubjectArr){
    let totalCredits = 0;
    let totalPoints = 0;
    allSubjectArr.forEach((subject) => {
        totalCredits = totalCredits + subject.subject.credits*10;
        totalPoints = totalPoints + subject.total.pointers * subject.subject.credits;
    });
    let sgpaArr = [totalCredits, totalPoints];
    return sgpaArr;
}

let inputArray = [
    {
        id: "1",
        subject: {
            SubjectLabel: "Subject Name",
            SubjectType: "text",
            SubjectValue: "",
            credits: 0,
            CreditLabel: "Credits",
            CreditType: "number"
        },
        final:{
            label: "Marks marks ( /100)",
            type: "number",
            value: 0
        },
        internal:{
            label: "Internal marks ( /25)",
            type: "number",
            value: 0
        },
        midterm:{
            label: "Midterm marks ( /50)",
            type: "number",
            value: 0
        },
        total:{
            marks: calculateMarks(0, 0, 0),
            grade: calculateGrade(calculateMarks(0, 0, 0)),
            pointers: calculatePointers(calculateGrade(calculateMarks(0, 0, 0))),
            credits: 0,
            colour: Colours[4]
        }
    }
];

function arrComputer (){
    let arr =[]
    Courses("Computer").forEach((course, index) => {
        arr.push({
            id: `${index + 1}`,
            subject: { 
                SubjectLabel: "Subject Name",
                SubjectType: "text",
                SubjectValue: course.name,
                credits: course.credits,
                CreditLabel: "Credits",
                CreditType: "number"
            },
            final:{
                label: "Marks marks ( /100)",
                type: "number",
                value: 0
            },
            internal:{
                label: "Internal marks ( /25)",
                type: "number",
                value: 0
            },
            midterm:{
                label: "Midterm marks ( /50)",
                type: "number",
                value: 0
            },
            total:{
                marks: calculateMarks(0, 0, 0),
                grade: calculateGrade(calculateMarks(0, 0, 0)),
                pointers: calculatePointers(calculateGrade(calculateMarks(0, 0, 0))),
                credits: 0,
                colour: Colours[4]
            }
        })
    }
    )
    return arr;
}

function courseChecker(name){
    if(name === "Computer"){
        return arrComputer();
    }
    else{
        return inputArray;
    }
}

function getColour(Grade){
    let colour = '';
    if (Grade === 'O') {
        colour = Colours[0];
    } else if (Grade === 'A+') {
        colour = Colours[1];
    } else if (Grade === 'A') {
        colour = Colours[2];
    } else if (Grade === 'B+') {
        colour = Colours[3];
    } else {
        colour = Colours[4];
    }

    return colour;
}


export {calculateMarks, calculateGrade, calculatePointers, calculateSGPA, inputArray,arrComputer, courseChecker, Colours, getColour}