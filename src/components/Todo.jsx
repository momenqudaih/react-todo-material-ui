import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import PopModal from './PopModal';

const Todo = ({ todo, todos, setTodos }) => {
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 15, background: 'lightgray' }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="h2">
            {todo.text}
          </Typography>
          <Box>
            <IconButton edge="end" aria-label="delete">
              <PopModal todo={todo} todos={todos} setTodos={setTodos} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                setTodos(todos.filter((el) => el.id !== todo.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
