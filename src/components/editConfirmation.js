/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import "../style/home.css"
import { useDispatch } from "react-redux";
import { editPost } from "../actions";


export default function EditConfirmation({handleClose, show, item}) {
    const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
  
    const handleTitle = (event) => {
        setTitle(event.target.value);
        
       };
       const handleContent = (event) => {
        setContent(event.target.value);
       }

       useEffect(()=> {
        if(!title || !content){
            setDisabled(true)
           } else {
           setDisabled(false)
           }
       },[title,content])


  const dispatch = useDispatch()
  const handleSubmit = (event) => {
      event.preventDefault();
    const post = { ...item, title, content};
    dispatch(editPost(post))
    handleClose();
  }
    return (
    <>
      <Modal className="modal-container" size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit item</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} className="edit-form">
                <div className="input-title">
                    <label htlmfor="title">
                        <span>Title</span>
                        <input type="text" data-testid="title" name="title" value={title} placeholder="Hello World" onChange={handleTitle} />
                    </label>
                </div>
                <div className="input-content">
                    <label htlmfor="content">
                        <span>Content</span>
                        <textarea data-testid="content" name="content" value={content} placeholder="Content Here" onChange={handleContent} />
                    </label>
                </div>
                <div className="save-container">
                <input type="submit"
                value="SAVE"
                data-testid="button-create" 
                disabled={disabled}
                className={disabled? "button-save-grey" : "button-save" }/>
                </div>
            </form>
      </Modal>
    </>
  );
}