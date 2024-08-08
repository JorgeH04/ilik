import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import LikeButton from './LikeButton';
import { toggleLike, getLikeStatus } from '../Helpers/post-helpers';
import { whoLiked } from '../Helpers/modal-helpers.js';
import LikesModal from './LikesModal';

export default function Post({ post, updatePost, user }) {
  const {
    numLikes,
    caption,
    image,
    _id
  } = post;

  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [numLikesState, setNumLikesState] = useState(numLikes);
  const [enviandoLike, setEnviandoLike] = useState(false);

  const [showLikesModal, setShowLikesModal] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    async function fetchLikeStatus() {
      try {
         const status = await getLikeStatus(post._id);
         setIsLiked(status.isLiked);
      } catch (error) {
        console.error("Error while fetching like status:", error);
      }
    }

    fetchLikeStatus();
  }, [post._id]);

  async function onSubmitLike() {
    if (enviandoLike) {
      return;
    }
    try {
      console.log(`Toggling like for post [${post._id}]`);
      setEnviandoLike(true);
      const postActualizado = await toggleLike({ ...post, isLiked });
      console.log(`Toggled like, updated post:`, postActualizado);
      updatePost(post, postActualizado);
      setIsLiked(postActualizado.isLiked);
      setNumLikesState(postActualizado.numLikes);
      setEnviandoLike(false);
    } catch (error) {
      console.error("Error while toggling like:", error);
      setEnviandoLike(false);
    }
  }

  const obtenerLikesDeImagenModal = async (postId) => {
    try {
      const likesData = await whoLiked(postId);
      setLikes(likesData);
      setShowLikesModal(true);
    } catch (error) {
      console.error('Error al obtener los likes de la imagen:', error);
    }
  };

  const handleCloseLikesModal = () => {
    setShowLikesModal(false);
  };

  return (
    <div className="Post-Componente">
      <Avatar user={user} />
      <img src={image} alt={caption} className="Post-Componente__img" />
      <div className="Post-Componente__acciones">
        <div className="Post-Componente__like-container">
          <LikeButton onSubmitLike={onSubmitLike} like={isLiked} />
        </div>
        <p onClick={() => obtenerLikesDeImagenModal(_id)}>Liked por {numLikesState} personas</p>
        {showLikesModal && (
          <LikesModal visible={showLikesModal} likes={likes} onClose={handleCloseLikesModal} user={user} />
        )}
        <ul>
          <li>{caption}</li>
        </ul>
      </div>
    </div>
  );
}