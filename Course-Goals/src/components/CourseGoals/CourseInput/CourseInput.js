import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(inputValue);
  };
  
  return(
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type={'text'} onChange={(event) => setInputValue(event.target.value)}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
