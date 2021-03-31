import React, { useState } from "react";
import { Dropdown } from "../../atom/dropdown/dropdown";
import "./form.scss";

type Data = {
  id: string;
  name: string;
  date: string;
  classes: string;
};

enum InputType {
  studentName,
  enrollmentDate,
}

const Form = () => {
  const [studentData, setStudentData] = useState<Data[]>([]);
  const [inputData, setInputData] = useState<Data>({} as Data);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: InputType
  ) => {
    if (inputType === InputType.studentName) {
      setInputData({ ...inputData, name: e.target.value });
    } else if (inputType === InputType.enrollmentDate) {
      setInputData({ ...inputData, date: e.target.value });
    }
  };

  const submitHandler = () => {
    setStudentData([...studentData, inputData]);
    setInputData({} as Data);
  };

  const deleteStudent = (idx: number) => {
    var dataWithoutStudent = studentData.filter(student => student !== studentData[idx])
    setStudentData(dataWithoutStudent);
  }

  const studentList = () => {
    return studentData.map(({ id, name, date, classes }, index) => {
      return (
        <table key={index} className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Class</th>
            <th></th>
          </tr>
          <tr>
            <th>{id}</th>
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
          <h3>Student name</h3>
          <input
            type="text"
            onChange={(e) => inputChangeHandler(e, InputType.studentName)}
          />
          <h3>Enrollment date</h3>
          <input
            type="text"
            onChange={(e) => inputChangeHandler(e, InputType.enrollmentDate)}
          />
          <h3>Class</h3>
          <div className="dropdown-wrapper">
            <Dropdown className="dropdown">
              <Dropdown.Toggle>Select</Dropdown.Toggle>
              <Dropdown.List>
                <Dropdown.Item>Music</Dropdown.Item>
                <Dropdown.Item>Painting</Dropdown.Item>
                <Dropdown.Item>Dancing</Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
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
