const studentData = ["Yogita", "Rahul", "Yuvraj", "Sayali"];

const findStudent = (allStudents, studentName) =>{

    for(let i=0; i<allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log(studentName)
        }
    }

}

findStudent(studentData, "Yogita")