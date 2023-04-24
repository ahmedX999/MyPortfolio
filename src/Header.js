import React from 'react';
import img1 from './avatar-man.png'

const Header = () => {
    return (
        <section style={{  }}>
            <header className="header">
                <img src={img1} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 210, height: 220 }} />
                <h1>AIT TALEB Ahmed</h1>
                <h2>Étudiant ingénieur informatique et réseau et développeur web à temps partiel</h2>
             
                   
            </header>

<br/>
        </section>
    );
}

export default Header;