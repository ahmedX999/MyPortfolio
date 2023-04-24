import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'Maison Searamic',
    description:
      'Site web de vente en ligne de poterie artisanale',
    image: 'https://maisonsearamic.com/wp-content/uploads/2022/06/LOGO-1.png',
  },
  {
    id: 2,
    title: 'Pokemon',
    description:
      'Application Mobile des Apis de Pokemon',
    image: 'https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg',
  },

  {
    id: 3,
    title: 'Goal Finder',
    description:
      'Application Web & Mobile de reservation des terrains',
    image: 'https://trello.com/1/cards/6410eec0c39050b94d887cac/attachments/64149c5c48232595e1f0b829/previews/64149c5d48232595e1f0b890/download/logo11.png',
  },

  {
    id: 4,
    title: 'GymEase',
    description:
      'Application Desktop de gestion des salles de sport',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/007/412/690/small/fitness-logo-template-gym-club-logotype-sportsman-silhouette-character-logo-design-template-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg',
  },
  {
    id: 5,
    title: 'Sellify',
    description:
      'Application web de Ecommerce',
    image: 'https://d1p9wirkq0k00v.cloudfront.net/wp-content/uploads/2015/09/06130709/204114-Sellify-Logo-04-c85952-large-1460625248.png',
  },

  {
    id: 6,
    title: 'MyProject',
    description:
      'Application web de Gestion de projet',
    image: 'https://myproject.fr/images/myproject/landing/my-project-landing.png',
  },
 

  



  // Add more cards here
];

const Projets = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="200px" image={card.image} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};
export default Projets;
