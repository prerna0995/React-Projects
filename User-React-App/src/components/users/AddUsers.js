import React, { useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import ErrorModal from '../error/ErrorModal';

import classes from './AddUsers.module.css';

const AddUser = (props) => {
  
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            header: 'Invalid input',
            description: 'Please enter a valid name and age (non-empty value)'
        });
        return;
    }
    if(enteredAge < 1) {
        setError({
            header: 'Invalid age',
            description: 'Please enter a valid age > 0'
        });
        return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <div>
        {error && <ErrorModal header={error.header} description={error.description} onClickOkay={() => setError(false)}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input id="username" type="text" value={enteredName} onChange={(event) => {setEnteredName(event.target.value)}}/>
        <label>Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={(event) => {setEnteredAge(event.target.value)}}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;