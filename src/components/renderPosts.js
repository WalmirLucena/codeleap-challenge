import moment from "moment";
import React from "react";
import editImage from "../images/edit-regular.svg";
import deleteImage from "../images/trash-alt-regular.svg"

export default function RenderPosts ({storePost, handleShowDelete, handleShowEdit, name}) {
    const showDate = (date) => {
        const atual =  moment(new Date());
        const difference = atual.from(date);
          return  <h4 className='date'>{difference} ago</h4>
      }
   
        if(storePost.post) return (
            storePost.post.map((item) => (
                <section key={item} className="post-section">
                    <div className="post-header">
                        <h3>{item.title}</h3>
                        <div className={item.name ===name ? "post-buttons" : "post-buttons-block"} >
                            <div onClick={() => handleShowDelete(item)}>
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
                        </div>
                        <div className='content'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </section>
               
    )
    )
    )
}
