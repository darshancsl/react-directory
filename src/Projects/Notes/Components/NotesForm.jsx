import React, { useState } from "react";
import Input from "../../../Components/FormComponents/Input";
import { Col, Row } from "react-bootstrap";
import Select from "../../../Components/FormComponents/Select";
import Button from "../../../Components/FormComponents/Button";
import { validateErrors } from "../../../Utils/validateErrors";
import TextArea from "../../../Components/FormComponents/TextArea";

const formDataObj = {
  question: "",
  answer: [],
  category: "Misc",
};

const categories = ["Misc", "Problems", "Advanced"];

const NotesForm = ({ notes, setNotes, setIsAddNotes }) => {
  const [formData, setFormData] = useState(formDataObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = validateErrors(formData);
    if (Object.keys(formErrors).length > 0) {
      console.log(formErrors);
    } else {
      setNotes([...notes, { ...formData, id: notes.length + 1 }]);
      console.log("Note Submitted");
      setFormData(formDataObj);
      setIsAddNotes(false);
    }
  };

  return (
    <form className='mx-auto p-4 p-sm-1 m-5 shadow-lg' onSubmit={handleSubmit}>
      <h1 className='text-center text-uppercase fs-3 fw-bold'>Insert Note</h1>
      <Row className='px-2 py-1 px-sm-5 py-3'>
        <Col>
          <Input
            type='text'
            placeHolder='Question...'
            value={formData.question}
            name='question'
            data={formData}
            setData={setFormData}
          />
        </Col>
      </Row>
      <Row className='px-2 py-1 px-sm-5 py-3'>
        <Col>
          <TextArea
            placeHolder='Answer...'
            value={formData.answer}
            name='answer'
            data={formData}
            setData={setFormData}
          />
        </Col>
      </Row>
      <Row className='px-2 py-1 px-sm-5 py-3'>
        <Col>
          <Select
            options={categories}
            data={formData}
            setData={setFormData}
            name='category'
          ></Select>
        </Col>
      </Row>
      <Row className='px-2 py-1 px-sm-5 py-3'>
        <Col>
          <Button text='Add Note' type='submit' />
        </Col>
      </Row>
    </form>
  );
};

export default NotesForm;
