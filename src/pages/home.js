import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/home.css';

function Home () {
   const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const {state: name} = useLocation();
  
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

    return (
        <main className="main-home">
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <form>
                <h3>What's on your mind?</h3>
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
                <input type="submit"
                value="CREATE"
                data-testid="button-create" 
                disabled={disabled}
                className={disabled? "button-create-grey" : "button-create" }/>
            </form>
        </main>
    )
}
export default Home