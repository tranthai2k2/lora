import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ Twitterclone, setTwitterclone, editTwitterclone, seteditTwitterclone }) {
  const [kytu, setKytu] = useState(250);

  const handleTextChange = (e) => {
    setKytu(250 - e.target.value.length);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  

    const textareaValue = document.querySelector('#textareavalue').value;

    const now = new Date();
    const time = now.toLocaleString('en-GB');

    const newTweet = {
      id: uuidv4(),
      textarea: textareaValue,
      time: time,
      completed: false,
    };
    // console.log(newTweet);
 
    setTwitterclone((prev) => [...prev, newTweet]);
  };

  return (
    <div className="container">
      <div className="form-group container" style={{ display: 'flex' }}>
        <textarea
          id="textareavalue"
          className="form-control"
          rows="3"
          value={Twitterclone.text}
          placeholder={Twitterclone.text ?? ' '}
          onChange={handleTextChange}
        />
        {/* <button type="button" className="btn btn-primary" onClick={onFormSubmit}>
          Submit
        </button> */}
        {kytu > 0 && kytu < 250 && (
             <button type="button" className="btn btn-primary" onClick={onFormSubmit}>
              Submit
            </button>
        )}
        {kytu < 0 || kytu == 250 && (
            <button type="button" disabled className="btn btn-primary" onClick={onFormSubmit}>
              Submit
            </button>
        )}
      </div>
      <div style={{ color: '#b2b2f1', textAlign: 'right' }}>{kytu}</div>
    </div>
  );
}

export default Form;
