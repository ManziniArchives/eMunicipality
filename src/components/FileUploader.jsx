import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader({ onUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: onUpload
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop photo here…</p> : <p>Drag & drop or click to select</p>}
    </div>
  );
}