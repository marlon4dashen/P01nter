import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import MyDropzone from './MyDropZone';

const SimpleDialog = ({ onClose, setFiles, uploadedFiles, open, isUploaded, setUploaded }) => {


    return (
      <Dialog fullWidth={true} maxWidth={"md"} onClose={onClose} open={open}>
        <DialogTitle sx={{color:"black"}} >Upload Photo</DialogTitle>
            <DialogContent sx={{color: "black"}}>
                <MyDropzone class="dropbox"
                    setFiles={setFiles}
                    uploadedFiles={uploadedFiles}
                    isUploaded={isUploaded}
                    setUploaded={setUploaded}
                />
            </DialogContent>

      </Dialog>
    );
}

export default SimpleDialog;