/* eslint-disable react/prop-types */
import React from "react";

function Forms ({handleSubmit, title, content, disabled, handleTitle, handleContent, h3, value}) {
    return (
        <form onSubmit={handleSubmit}>
                <h3 className="form-title">{h3}</h3>
                <div className="input-title">
                    <label htlmfor="title">
                        <span>Title</span>
                        <input type="text" className="title" name="title" value={title} placeholder="Hello World" onChange={handleTitle} />
                    </label>
                </div>
                <div className="input-content">
                    <label htlmfor="content">
                        <span>Content</span>
                        <textarea className="content" name="content" value={content} placeholder="Content Here" onChange={handleContent} />
                    </label>
                </div>
                <div className="button-create-container">
                <input type="submit"
                value={value}
                disabled={disabled}
                className={disabled? "button-create-grey" : "button-create" }/>
                </div>
            </form>
    )
}

export default Forms;