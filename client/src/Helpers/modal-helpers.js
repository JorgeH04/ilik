import Axios from 'axios';

export async function whoLiked(postId) {
  try {
    
     const response = await Axios.get(`http://localhost:3000/post/${postId}/ledilike`);
    const likesData = response.data;
    console.log('Likes de la imagen:', likesData);
    return likesData;
  } catch (error) {
    console.error('Error al obtener los likes de la imagen:', error);
    return [];
  }
}