import Axios from 'axios';

export async function getLikeStatus(postId) {
  const url = `http://localhost:3000/post/${postId}/likes/status`;
  try {
    console.log(`Requesting like status from ${url}`);
    const response = await Axios.get(url);
    console.log(`Received like status response:`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error while requesting like status:", error);
    return { isLiked: false };
  }
}

// export async function toggleLike(post) {
//   const url = `http://localhost:3000/post/${post._id}/likes`;
//   let postConLikeActualizado;
//   if (post.isLiked) {
//     try {
//       console.log(`Deleting like at ${url}`);
//       await Axios.delete(url);
//       postConLikeActualizado = {
//         ...post,
//         isLiked: false,
//         numLikes: post.numLikes - 1
//       };
//     } catch (error) {
//       console.error("Error while deleting like:", error);
//       postConLikeActualizado = post;
//     }
//   } else {
//     try {
//       console.log(`Posting like at ${url}`);
//       await Axios.post(url);
//       postConLikeActualizado = {
//         ...post,
//         isLiked: true,
//         numLikes: post.numLikes + 1
//       };
//     } catch (error) {
//       console.error("Error while posting like:", error);
//       postConLikeActualizado = post;
//     }
//   }
//   console.log(`Updated post after toggling like:`, postConLikeActualizado);
//   return postConLikeActualizado;
// }


export async function toggleLike(post) {
  const url = `http://localhost:3000/post/${post._id}/likes`;
  let updatedPostWithLike;
  if (post.isLiked) {
    try {
      console.log(`Deleting like at ${url}`);
      await Axios.delete(url);
      updatedPostWithLike = {
        ...post,
        isLiked: false,
        numLikes: post.numLikes - 1
      };
    } catch (error) {
      console.error("Error while deleting like:", error);
      updatedPostWithLike = post;
    }
  } else {
    try {
      console.log(`Posting like at ${url}`);
      await Axios.post(url);
      updatedPostWithLike = {
        ...post,
        isLiked: true,
        numLikes: post.numLikes + 1
      };
    } catch (error) {
      console.error("Error while posting like:", error);
      updatedPostWithLike = post;
    }
  }
  console.log(`Updated post after toggling like:`, updatedPostWithLike);
  return updatedPostWithLike;
}