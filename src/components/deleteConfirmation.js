/* eslint-disable react/prop-types */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import "../style/home.css"
import { useDispatch } from "react-redux";
import { deletePost } from "../actions";


export default function DeleteConfirmation({handleClose, show, item}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deletePost(item));
    handleClose();
  }
    return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button className="modal-buttons" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal-buttons" onClick={handleClick}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}