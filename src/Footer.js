import { Container} from '@mui/material';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerStyles = {
  
  color: "black",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iconStyles = {
  fontSize: "24px",
  margin: "0 10px",
};


const styles = {
  footer: {
    
    bottom: 0,
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      marginLeft: '1rem',
    },
  },
};

const Footer = () => {
  return (
    <div style={styles.footer}>
      <Container maxWidth="lg">
        <p>© 2023 Contactez moi : <a href="mailto:ahmedaittaleb999@gmail.com">ahmedaittaleb999@gmail.com</a> </p> 
        <div style={footerStyles}>
        <a href="https://www.linkedin.com/in/ahmed-ait-taleb-526b61212/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
      </a>
      <a href="https://github.com/ahmedX999" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={iconStyles} />
      </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
