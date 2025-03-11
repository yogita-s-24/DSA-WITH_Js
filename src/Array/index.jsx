import React from "react";

const Index = () => {
  const studentData = ["Yogita", "Rahul", "Yuvraj", "Sayali"];

  const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
      if (allStudents[i] === studentName) {
        console.log(studentName);
      }
    }
  };

  findStudent(studentData, "Yogita");

  const girlData = ["Ira", "Riya", "Kiya", "Ria"];

  const findGirls = (allGirls, girlsName) => {
    for (let i = 0; i < allGirls.length; i++) {
      if (allGirls[i] === girlsName) {
        console.log(girlsName);
      }
    }
  };
  findGirls(girlData, "Ira");

  return <div>hi</div>;
};

export default Index;
