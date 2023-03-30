import React, { useState } from 'react';

const Nav = () => {
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Proyectos</a>
        </li>
        <li>
          <a href='#'>Nosotros</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
