import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h5>Developed By: 101415118 || Neeraj Kumar || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
