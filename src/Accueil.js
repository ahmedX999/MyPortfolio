import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Accueil() {
  return (
    <Card>
      <Card.Header style={{  textAlign: 'left' }}>Presentation</Card.Header>
      <Card.Body>
        <Card.Title style={{  textAlign: 'left' }}>Ait Taleb Ahmed</Card.Title>
        <Card.Text style={{  textAlign: 'left' }}> 
        <p>Je suis un étudiant ingénieur passionné de technologie et de développement web. Actuellement, je travaille à temps partiel en tant que développeur web, où j'ai acquis une expérience précieuse en créant des sites web pour différents clients.</p>
	<p>Mes principales compétences en développement web incluent la création de sites web responsives et la programmation en HTML, CSS et JavaScript. J'ai également travaillé avec des CMS populaires tels que WordPress et Joomla pour créer des sites web dynamiques et personnalisés.</p>
	<p>En tant que développeur web, je suis capable de travailler en équipe et de m'adapter à des projets différents. Je suis également un apprenant rapide et j'aime explorer de nouvelles technologies pour améliorer mes compétences.</p>
	<p>Je suis très fier de mon travail en tant que développeur web et je suis confiant que mes compétences et mon expérience seront un atout pour tout projet futur.</p>
 </Card.Text>
        <Button  variant="primary">Voir mon CV</Button>
      </Card.Body>
    </Card>
  );
}

export default Accueil;