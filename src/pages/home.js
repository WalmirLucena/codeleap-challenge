import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../actions';
import Forms from '../components/formEdited';
import DeleteConfirmation from '../components/deleteConfirmation';
import EditConfirmation from '../components/editConfirmation';
import RenderPosts from '../components/renderPosts';
import '../style/home.css';


function Home () {
    const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [remove, setRemove] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const [edit, setEdit] = useState(false);
    const [showRemove, setShowRemove] = useState(false);

    const name = useSelector(state => state.user);
    const storePost = useSelector(state => state.post)
    const dispatch = useDispatch();
  
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

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {name: name.toString(), title, content, date: (new Date().toLocaleString())}
        dispatch(newPost(post));
    }

    const handleClose = () => { 
      setShowEdit(false);
      setShowRemove(false);
    }

    const handleShowDelete = (item) => {
        if(item.name === name){
            setRemove(item)
            setShowRemove(true);
        }        
    }

    const handleShowEdit = (item) => {
        if(item.name === name){
            setEdit(item)
            setShowEdit(true);  
        }
              
    }

    return (
        <main className="main-home">
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <Forms 
            handleSubmit={handleSubmit} 
            title={title} 
            content={content} 
            disabled={disabled} 
            handleTitle={handleTitle} 
            handleContent={handleContent}
            h3="What's on your mind?"
            value="CREATE"/>
            <RenderPosts storePost={storePost} 
            handleShowDelete={handleShowDelete} 
            handleShowEdit={handleShowEdit}
            name={name}/>
            <DeleteConfirmation handleClose={handleClose} show={showRemove} item={remove} />
            <EditConfirmation handleClose={handleClose} show={showEdit} item={edit} />

        </main>
    )
}


export default Home;