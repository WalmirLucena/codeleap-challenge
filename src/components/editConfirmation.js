/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import "../style/home.css"
import { useDispatch } from "react-redux";
import { editPost } from "../actions";
import Forms from "./formEdited";


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
            <Forms 
            handleSubmit={handleSubmit} 
            title={title} 
            content={content} 
            disabled={disabled} 
            handleTitle={handleTitle} 
            handleContent={handleContent}
            h3="Edit item"
            value="SAVE"/>
      </Modal>
    </>
  );
}