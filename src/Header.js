import React from 'react';
import img1 from './avatar-man.png'

const Header = () => {
    return (
        <section style={{ backgroundColor: '#B1D4E0' }}>
            <header className="header">
                <img src={img1} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 210, height: 220 }} />
                <h1>AIT TALEB Ahmed</h1>
                <h2>Etudiante en ingénieur informatique et réseau</h2>
             
                   
            </header>

<br/>
        </section>
    );
}

export default Header;