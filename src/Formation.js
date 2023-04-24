import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Formation() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Ingénierie Informatique et Réseaux
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Ecole Marocaine des Sciences de l'Ingénieur (EMSI) 2021-En cours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign:'justify'}}>
          L'École Marocaine des Sciences de l'Ingénieur (EMSI) est une institution d'enseignement supérieur privée située au Maroc, spécialisée dans la formation en ingénierie informatique et réseaux.

Elle propose des formations de haut niveau allant du cycle préparatoire jusqu'au cycle ingénieur, en passant par les cycles technicien et licence professionnelle. Les étudiants y apprennent les fondamentaux de l'informatique, les technologies réseaux, les systèmes d'information, la programmation, la sécurité informatique, etc.

L'EMSI dispose également d'un corps professoral expérimenté et d'un équipement de pointe, permettant aux étudiants d'acquérir une formation théorique solide tout en bénéficiant d'une expérience pratique significative.

En outre, l'EMSI encourage l'innovation, la créativité et l'entrepreneuriat, en offrant à ses étudiants des projets et des défis stimulants, ainsi que des stages en entreprise pour renforcer leur expérience professionnelle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Brevet de Technicien Supérieur
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>CENTRE BTS HASSAN II  2019-2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign:'justify'}}>
          Le Brevet de Technicien Supérieur (BTS) est un diplôme d'enseignement supérieur technique délivré au Maroc. Il est décerné aux étudiants qui ont suivi une formation professionnelle de deux ans après l'obtention d'un baccalauréat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          BAC Sciences et Technologies Electriques 
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>LYCEE MOHAMMED VI 2017-2019</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign:'justify'}}>
          Le Baccalauréat en Sciences et Technologies Electriques (Bac STE) est un diplôme d'enseignement secondaire délivré après trois années d'études dans un lycée technique ou professionnel.

Ce bac est orienté vers les domaines de l'électricité, de l'électronique, de l'automatique et de la mécanique, et permet aux étudiants d'acquérir des connaissances théoriques et pratiques dans ces différents domaines.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}