import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';


const SimpleDialog = ({ onClose, setFiles, uploadedFiles, open }) => {
  
    return (
      <Dialog fullWidth={true} maxWidth={"lg"} onClose={onClose} open={open}>
        <DialogTitle>Upload Photo</DialogTitle>
            <DialogContent>
                <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(f) => {
                            console.log('Files:', f)
                            console.log("Uploaded Files: ", uploadedFiles)
                            if (f !== []) {
                                setFiles(([...uploadedFiles, ...f]))
                            }
                        }}
                />
            </DialogContent>
            
      </Dialog>
    );
}

export default SimpleDialog;