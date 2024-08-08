import React, { useState } from 'react';
import Main from '../Components/Main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Upload() {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ImageData) {
      alert('Debes proporcionar un mensaje.');
      return;
    }

    const postData = {
      image: image,
      caption: caption,
    };

    try {
      await axios.post('http://localhost:3000/post/upload', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigate('/');
    } catch (error) {
      console.error('Error al subir el mensaje:', error);
    }
  };

  return (
    <Main center>
      <div className="Upload">
        <form onSubmit={handleSubmit}>
          <input
            name="image"
            className="Upload__message"
            maxLength="180"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            name="caption"
            className="Upload__caption"
            maxLength="180"
            placeholder="Caption."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button className="Upload__submit" type="submit">
            Post
          </button>
        </form>
      </div>
    </Main>
  );
}

export default Upload;