import { Typography } from '@mui/material'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Box from '@mui/material/Box';

function MyDropzone({setFiles, uploadedFiles, isUploaded, setUploaded}) {
  const onDrop = useCallback(files => {
    // Do something with the files
    console.log("Files: ", files)
    console.log("UploadedFiles: ", uploadedFiles)
    setFiles([...uploadedFiles, ...files])
    setUploaded(true)

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <div className="dropbox"  {...getRootProps()}>
          <input {...getInputProps()} />
          <Box height={400}>
            {
              isDragActive ?
                <Typography sx={{fontSize: 20, my: 20}}>Drop the files here ...</Typography> :
                <Typography sx={{fontSize: 20, my: 20}}>Drag and drop some files here, or click to select files</Typography>
            }
          </Box>
          <Box >
            {
              isUploaded ? <Typography sx={{fontSize: 14}}>The file has been successfully uploaded</Typography> : <></>
            }
          </Box>
      </div>
    </>
  )
}

export default MyDropzone;