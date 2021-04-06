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
      setInputData({ ...inputData, classes: value })
    }
  };

  const submitHandler = () => {
    setStudentData([...studentData, inputData]);
    setInputData({} as Data);
    let form = document.getElementById("form") as HTMLFormElement
    form.reset();
  };

  const deleteStudent = (idx: number) => {
    let dataWithoutStudent = studentData.filter(
      (student) => student !== studentData[idx]
    );
    setStudentData(dataWithoutStudent);
  };

  const studentList = () => {
    return studentData.map(({ name, date, classes }, index) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{date}</td>
          <td>{classes}</td>
          <td>
            <button
              className="button-delete"
              type="submit"
              onClick={() => deleteStudent(index)}
            >
              Delete
              </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="from-wrapper">
        <form id="form">
          <h3 className="select-text">Student name</h3>
          <input
            className="input"
            type="text"
            onChange={(event) => inputChangeHandler(event.target.value, InputType.studentName)}
          />
          <h3 className="select-text">Enrollment date</h3>
          <input
            className="input"
            type="date"
            onChange={(event) => inputChangeHandler(event.target.value, InputType.enrollmentDate)}
          />
          <h3 className="select-text">Class</h3>
          <select className="dropdown" onChange={(event) => inputChangeHandler(event.target.value, InputType.classes)}>
            <option value="select">Select</option>
            <option value="music">Music</option>
            <option value="dancing">Dancing</option>
            <option value="painting">Painting</option>
          </select>
        </form>
        <button
          className="button-add"
          type="submit"
          onClick={() => submitHandler()}
        >
          Add
        </button>
      </div>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>Student name</th>
            <th>Starting date</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
          {studentData.length ? studentList() : null}
        </table>
      </div>
    </div>
  );
};

export default Form;
