import './FileUploader.css';
import { Fragment } from 'react';
import uploadImage from '../../../../../assets/fileUploaderImages/uploadFiles.png';
import { useEffect, useRef, useState } from 'react';
import { imageConfig } from '../DragAndDropFileUploader/imageConfig';


const FileUploader = ({ onFileDrop, filesList , fileRemove }) => {
    console.log(filesList)
    const wrapperRef = useRef(null);
    const onDragEnter = () => wrapperRef.current.classList.add('onDrag');
    const onDragLeave = () => wrapperRef.current.classList.remove('onDrag');
    const onDrop = () => wrapperRef.current.classList.remove('onDrag');

    return (
        <section className="file-uploader-wrapper">
            <h1>Upload files</h1>
            <article
                className="drag-and-drop-section"
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <img src={uploadImage} alt="image" />
                <h3>Drag and drop your files here</h3>
                <input type="file" multiple onChange={onFileDrop} />
            </article>

            <article className="ready-to-upload">
                <h3>Ready to upload</h3>
                {filesList.map((item, index) => {
                    return <Fragment key={index}>
                        <ul>
                            <li>
                                <img src={imageConfig[item.type.split('/')[1]] || imageConfig.default} alt="image" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{(item.size / 1024 / 1024).toFixed(2)}MB</p>
                                </div>
                                <i className="fas fa-times delete-image" onClick={() =>fileRemove(item)}></i>
                            </li>
                        </ul>
                    </Fragment>


                })}


            </article>
        </section>

    )



}

export default FileUploader