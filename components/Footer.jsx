import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>{date} PestaStore || All rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer