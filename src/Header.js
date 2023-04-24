import React from 'react';

import img2 from './pdp2.jpeg'

const Header = () => {
    return (
        <section style={{  }}>
            <header className="header">
                <img src={img2} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 180, height: 250 }} />
                <h1>AIT TALEB Ahmed</h1>
                <h2>Étudiant ingénieur informatique et réseau et développeur web à temps partiel</h2>
             
                   
            </header>

<br/>
        </section>
    );
}

export default Header;