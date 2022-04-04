import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../actions';
import forms from '../components/forms';
import '../style/home.css';

function Home () {
   const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [post, setPosts] = useState();

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

       useEffect(()=>{
           setPosts(storePost.post)
       },[storePost])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {name, title, content, date: (new Date()).toLocaleString()}
        dispatch(newPost(post));
    }

    const renderPosts = () => {
        if(post) return (
            post.map((item) => (
                <section className="post-section">
                    <div className="post-header">
                        <h3>{item.title}</h3>
                    </div>
                    <div className='post-container'>
                        <div className="info-section">
                            <h4 className='name'>@{item.name}</h4>
                            <h4 className='date'>{item.date}</h4>
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
            {forms({handleSubmit, title, content, disabled, handleTitle, handleContent})}
            {renderPosts()}
        </main>
    )
}


export default Home;