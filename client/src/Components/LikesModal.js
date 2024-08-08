import React from 'react';
import { Modal } from 'antd';
import Avatar from './Avatar';

 

const LikesModal = ({ visible, likes = [], onClose , user}) => {
  return (
    <Modal
      title="Likes de la imagen"
      visible={visible}
      onCancel={onClose}
      footer={null}
      user={user}
    >
      {likes.map((item, index) => (       
        <div className="like-item" key={index}>
                  <Avatar user={{ username: item }}  />
  
       </div>
      ))}
    </Modal>
  );
};



 
export default LikesModal;