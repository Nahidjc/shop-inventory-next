import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoading = () =>{
  return (
    <div className="flex items-center justify-center h-screen"> 
      <CircularProgress />
    </div>
  );
}
export default CircularLoading;