import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone({setFiles, uploadedFiles}) {
  const onDrop = useCallback(files => {
    // Do something with the files
    console.log("Files: ", files)
    console.log("UploadedFiles: ", uploadedFiles)
    setFiles([...uploadedFiles, ...files])

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropbox"  {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone;