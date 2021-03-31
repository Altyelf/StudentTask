import React, { useState } from "react";
import { Dropdown } from "../../atom/dropdown/dropdown";
import "./form.scss";

type Data = {
  id: string;
  name: string;
  date: string;
  classes: string;
};

const Form = () => {
  const [studentData, setStudentData] = useState<Data[]>([]);
  const [inputData, setInputData] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const submitHandler = () => {
    if (inputData === "") {
      return;
    } else {
      setStudentData([
        ...studentData,
        {
         inputData
        },
      ]);
    }
    setInputData("");
  };

  const studentList = () => {
    return studentData.map(({id, name, date, classes }, index) => {
      return (
        <div key={index} className="table">
          <div className="row">
            <div className="col-xs-3">{id}</div>
            <div className="col-xs-3">{name}</div>
            <div className="col-xs-3">{date}</div>
            <div className="col-xs-3">{classes}</div>
            <div className="col-xs-3"><button>Delete</button></div>
          </div>
        </div>
      )
    }) 
  }

  return (
    <div>
      <div className="from-wrapper">
        <form>
          <h3>Student name</h3>
          <input type="text" onChange={(e) => inputChangeHandler(e)}/>
          <h3>Enrollment date</h3>
          <input type="text" onChange={(e) => inputChangeHandler(e)}/>
          <h3>Class</h3>
          <Dropdown>
            <Dropdown.Toggle>Toggle</Dropdown.Toggle>
            <Dropdown.List>
              <Dropdown.Item>Music</Dropdown.Item>
              <Dropdown.Item>Painting</Dropdown.Item>
              <Dropdown.Item>Dancing</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </form>
        <button type = "submit" onClick={submitHandler}>Add</button>
      </div>
    </div>
  )
};

export default Form;
