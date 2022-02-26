import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import MyDropzone from './MyDropZone';

const SimpleDialog = ({ onClose, setFiles, uploadedFiles, open }) => {

    return (
      <Dialog  fullWidth={true} maxWidth={"lg"} onClose={onClose} open={open}>
        <DialogTitle sx={{color:"black"}} >Upload Photo</DialogTitle>
            <DialogContent>
                <MyDropzone 
                    setFiles={setFiles}
                    uploadedFiles={uploadedFiles}
                />
            </DialogContent>

      </Dialog>
    );
}

export default SimpleDialog;