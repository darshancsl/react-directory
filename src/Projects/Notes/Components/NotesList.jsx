import React from "react";
import { Col, Row } from "react-bootstrap";

const NotesList = ({ notes, setNotes }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let temp = notes.filter((el) => {
      return el.id.toString() !== e.target.id;
    });
    setNotes(temp);
  };
  return (
    <div>
      <Row className='p-sm-5 p-1'>
        {notes?.map(({ id, question, answer, category }) => {
          return (
            <Col
              key={id}
              className='col-12 p-3 border border-secondary mb-2 position-relative'
            >
              <span className='num position-absolute fw-bold fs-5'>{id}</span>
              <div className='position-absolute bottom-0 end-0 p-2'>
                <span>{category}</span>
                <button
                  id={id}
                  onClick={handleClick}
                  className='btn-default btn-delete mx-4'
                >
                  Delete
                </button>
              </div>

              <div className='mx-5'>
                <div className='fw-bold fs-4'>{question}</div>
                <div className='fs-6 mb-5'>
                  <p dangerouslySetInnerHTML={{ __html: answer }}></p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NotesList;
