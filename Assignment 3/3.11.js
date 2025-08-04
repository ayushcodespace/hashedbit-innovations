let students={
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
}
let result={};
for(let student in students){
  let marks = Object.values(students[student]);
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  let average = Math.round(total / marks.length);
  result[student] = { average: average };
}
  
console.log(result);