import React from 'react';
import publicUrl from 'utils/publicUrl';
import css from './Header.module.css';
function Header() {
  return (
    <header className={css.header}>
        <div>
          <button>
            <img src={publicUrl('/assets/camera.svg')} alt="camera"/>
          </button>
        </div>
        <div>
          <img src={publicUrl('/assets/logo.png')} alt="logo"/>
        </div>
        <div>
          <button>
          <img src={publicUrl('/assets/message.svg')} alt="message"/>
          </button>
        </div>
        
    </header>
  );
}

export default Header;
