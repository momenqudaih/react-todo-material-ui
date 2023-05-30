import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function ButtonAppBar({ setTodos }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Momen's Todo app
          </Typography>
          <Button variant="outlined" color="error" onClick={() => setTodos([])}>
            <ClearAllIcon /> clear all
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
