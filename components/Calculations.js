function calculateMarks(final, internalMarks, midtermMarks) {
    let totalMarks = Math.round(final/2) + parseInt(internalMarks) + Math.round(midtermMarks/2);
  return Number(totalMarks);
}

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
            SubjectLabel: "Subject Name:",
            SubjectType: "text",
            SubjectValue: "",
            credits: 0,
            CreditLabel: "Credit:",
            CreditType: "number"
        },
        final:{
            label: "Marks out of 100:",
            type: "number",
            value: 0
        },
        internal:{
            label: "Internal marks out of 25:",
            type: "number",
            value: 0
        },
        midterm:{
            label: "Midterm marks out of 50:",
            type: "number",
            value: 0
        },
        total:{
            marks: calculateMarks(0, 0, 0),
            grade: calculateGrade(calculateMarks(0, 0, 0)),
            pointers: calculatePointers(calculateGrade(calculateMarks(0, 0, 0))),
            credits: 0
        }
    }
];

export {calculateMarks, calculateGrade, calculatePointers, calculateSGPA, inputArray}