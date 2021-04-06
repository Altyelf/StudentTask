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
  const [inputData, setInputData] = useState<Data>({ name: "", date: "", classes: "" });
  const [errorData, setErrorData] = useState<string[]>([]);

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

    let errorCount = validateInputs();
    if (errorCount > 0) return;

    setStudentData([...studentData, inputData]);
    setInputData({ name: "", date: "", classes: "" });
    let form = document.getElementById("form") as HTMLFormElement
    form.reset();
  };

  const validateInputs = () => {
    let errors: string[] = [];
    if (inputData.name.length === 0) {
      errors.push("No name entered");
    }

    if (inputData.date.length === 0) {
      errors.push("No date selected");
    }

    if (inputData.classes.length === 0) {
      errors.push("No class selected");
    }
    setErrorData(errors)
    return errors.length;
  }

  const deleteStudent = (idx: number) => {
    let dataWithoutStudent = studentData.filter(
      (student) => student !== studentData[idx]
    );
    setStudentData(dataWithoutStudent);
  };

  const fieldErrors = () => {
    return errorData.map((error, idx) => { return (<p key={idx}>{error}</p>) })
  }

  const studentList = () => {
    return studentData.map(({ name, date, classes }, index) => {
      return (
        <tr key={index}>
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
        <div>
          {fieldErrors()}
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>Student name</th>
            <th>Starting date</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
          {studentData.length === 0 ?
            <tr>
              <td colSpan={6}>Database is empty</td>
            </tr>
            :
            studentList()
          }
        </table>
      </div>
    </div>
  );
};

export default Form;
