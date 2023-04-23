import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Formation from './Formation';
import Experience from './Experience';
import Cours from './Cours';
import Certification from './Certif';
import Accueil from './Accueil';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" sx={{ display: 'flex', justifyContent: 'center' }}>
        <LinkTab label="Accueil" href="/accueil" />
        <LinkTab label="Formation" href="/formation" />
        <LinkTab label="Experience" href="/experience" />
        <LinkTab label="Cours" href="/cours" />
        <LinkTab label="Publications" href="/publications" />
        <LinkTab label="Projets" href="/projets" />
        <LinkTab label="Certification" href="/spam" />
        
      </Tabs>
      {value === 0 && <Accueil/> }
      {value === 1 && <Formation/>}
      {value === 2 && <Experience/>}
      {value === 3 && <Cours/> }
      {value === 6 && <Certification/> }
    </Box>
  );
}
