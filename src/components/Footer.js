import React from 'react'
// import styled  from 'styled-components';

// const Title = styled.h1`
//   font-size: 16px;
//   text-align: left;
//   color: grey;
// `;

const Footer = (prop) => {
  return (
    <div className="bottom-footer footer-container shadow-inner border-t border-grey-light pt-4 pb-4">
      <footer className="container mx-auto">
        <p className="text-xs text-grey-dark">&copy; 2018 Ivor Padilla. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer;