function mergeObjects(obj1, obj2){
    return Object.assign({},obj1, obj2);
}
const student={
    name: "Kartik",
    age: 25,
    roll: 22548
}
const course={
    name: "development",
    course_id: 44527
}
console.log(mergeObjects(student,course));