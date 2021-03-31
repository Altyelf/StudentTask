import React, { useState } from "react";
import "./form.scss";

type Data = {
  name: string;
  date: string;
  classes: string;
};

enum InputType {
  studentName,
  enrollmentDate,
  classes,
}

const Form = () => {
  const [studentData, setStudentData] = useState<Data[]>([]);
  const [inputData, setInputData] = useState<Data>({} as Data);

  const inputChangeHandler = (
    value: string,
    inputType: InputType
  ) => {
    if (inputType === InputType.studentName) {
      setInputData({ ...inputData, name: value });
    } else if (inputType === InputType.enrollmentDate) {
      setInputData({ ...inputData, date: value });
    } else if (inputType === InputType.classes) {
      setInputData({ ...inputData, classes: value})
    }
  };

  const submitHandler = () => {
    setStudentData([...studentData, inputData]);
    setInputData({} as Data);
    
  };

  const deleteStudent = (idx: number) => {
    var dataWithoutStudent = studentData.filter(
      (student) => student !== studentData[idx]
    );
    setStudentData(dataWithoutStudent);
  };

  const studentList = () => {
    return studentData.map(({ name, date, classes }, index) => {
      return (
        <table key={index} className="table">
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
          <tr>
            <th>{name}</th>
            <th>{date}</th>
            <th>{classes}</th>
            <th>
              <button
                className="button-delete"
                type="submit"
                onClick={() => deleteStudent(index)}
              >
                Delete
              </button>
            </th>
          </tr>
        </table>
      );
    });
  };

  return (
    <div>
      <div className="from-wrapper">
        <form>
          <h3 className="select-text">Student name</h3>
          <input
          className="input"
            type="text"
            onChange={(event) => inputChangeHandler(event.target.value, InputType.studentName)}
          />
          <h3 className="select-text">Enrollment date</h3>
          <input
           className="input"
            type="text"
            onChange={(event) => inputChangeHandler(event.target.value, InputType.enrollmentDate)}
          />
          <h3 className="select-text">Class</h3>
          <div className="dropdown-wrapper">
            <select className="dropdown" onChange={(event) => inputChangeHandler(event.target.value, InputType.classes)}>
              <option value="music" >Music</option>
              <option value="dancing">Dancing</option>
              <option value="painting">Painting</option>
            </select>
          </div>
        </form>
        <button
          className="button-add"
          type="submit"
          onClick={() => submitHandler()}
        >
          Add
        </button>
      </div>
      <div className="table-wrapper">{studentList()}</div>
    </div>
  );
};

export default Form;
