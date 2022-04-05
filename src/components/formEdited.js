function forms ({handleSubmit, title, content, disabled, handleTitle, handleContent}) {
    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default forms;