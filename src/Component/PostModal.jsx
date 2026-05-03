import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import '../Style/PostModal.css'

const PostModal = ({ close }) => {
     const [text, setText] = useState("");
      const [image, setImage] = useState(null);
     const { addPost } = useContext(AppContext);

      const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }

    const handlePost = () => {
    if (!text.trim() && !image) return;
    addPost(text, image);
    setText("");
    setImage(null);
    close();
  };

  return (
    <div className='modal_overlay' onClick={close}>
       <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        <textarea
          placeholder="What is happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {image && <img src={image} className="preview_img" />}
         {/* <input type="file" onChange={handleImage} /> */}
         <label className="upload_btn">
             📷
          <input type="file" onChange={handleImage} hidden />
            </label>
         <div className="modal_actions">
        <button className="cancel_btn" onClick={close}>Cancel</button>
        <button className="post_btn" onClick={handlePost} >Post</button>    
        </div>
      </div>
    </div>
  )
}

export default PostModal
