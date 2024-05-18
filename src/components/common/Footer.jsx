import React from 'react';

const Footer = () => (
  <footer class="bg-black text-center dark:bg-black/90 lg:text-left shadow-md">
    <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
      © 2024 Copyright: {' '}
      <a href="#/" onClick={(e) => e.preventDefault()}>crud app</a>
    </div>
  </footer>
);

export default Footer;
