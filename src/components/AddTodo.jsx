import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Add from '@mui/icons-material/Add';

const AddTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const createTodo = () => {
    setText('');
    text && setTodos([...todos, { id: Math.random() * 1000, text: text }]);
    // here we need to push the new todo to the todos array on the local storage

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Container maxWidth="sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTodo();
          }}
        >
          <FormControl fullWidth={true}>
            <TextField
              label="I will do this"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
              onClick={createTodo}
            >
              <Add />
              Add
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default AddTodo;
