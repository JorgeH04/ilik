


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as thumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as thumbsUpSolid } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton({ onSubmitLike, like }) {
  return (
    <button onClick={onSubmitLike}>
      {like ? (
        <FontAwesomeIcon className="text-blue" icon={thumbsUpSolid} />
      ) : (
        <FontAwesomeIcon icon={thumbsUpRegular} />
      )}
    </button>
  );
}