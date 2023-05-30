import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PopModal({ todo, todos, setTodos }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editedText, setEditedText] = useState('');

  return (
    <div>
      <EditIcon onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ maxWidth: '60%', marginLeft: '20%', padding: '10px' }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your todo
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              id="outlined-helperText"
              defaultValue={todo.text}
              sx={{ minWidth: '68%' }}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => {
                setTodos(
                  todos.map((el) => {
                    if (el.id === todo.id) {
                      return { ...el, text: editedText };
                    }
                    return el;
                  }),
                );
                handleClose();
                setEditedText('');
              }}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
