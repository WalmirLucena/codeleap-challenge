import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../actions';
import Forms from '../components/formEdited';
import '../style/home.css';
import editImage from "../images/edit-regular.svg";
import deleteImage from "../images/trash-alt-regular.svg"
import DeleteConfirmation from '../components/deleteConfirmation';
import EditConfirmation from '../components/editConfirmation';
import moment from 'moment';

function Home () {
   const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [remove, setRemove] = useState();
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false)

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
        const post = {name, title, content, date: (new Date())}
        dispatch(newPost(post));
    }

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        setRemove(item)
        setShow(true);        
    }

    const handleShowEdit = (item) => {
        setEdit(item)
        setShow(true);        
    }

    const showDate = (date) => {
      const atual =  moment(new Date());
      const difference = atual.from(date);
      console.log(difference);
        return  <h4 className='date'>{difference} ago</h4>
    }

  

    const renderPosts = () => {
        if(storePost.post) return (
            storePost.post.map((item) => (
                <section className="post-section">
                    <div className="post-header">
                        <h3>{item.title}</h3>
                        <div className="post-buttons">
                            <div onClick={() => handleShow(item)}>
                                <img className='image' src={deleteImage}  alt="icon to delete post"/>
                            </div>
                            <div onClick={() => handleShowEdit(item)}>
                                <img className='image' src={editImage} alt="icon to edit post"/>
                            </div>
                        </div>
                    </div>
                    <div className='post-container'>
                        <div className="info-section">
                            <h4 className='name'>@{item.name}</h4>
                            { showDate(item.date)}

                            {/* <h4 className='date'>{item.date.toLocaleString()}</h4> */}

                        </div>
                        <div className='content'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </section>
               
        ))) 
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
            handleContent={handleContent}/>
            {renderPosts()}
            <DeleteConfirmation handleClose={handleClose} show={show} item={remove} />
            <EditConfirmation handleClose={handleClose} show={show} item={edit} />

        </main>
    )
}


export default Home;