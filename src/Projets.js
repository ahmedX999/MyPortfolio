import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'Maison Searamic',
    description:
      'site web de vente en ligne de poterie artisanale',
    image: 'https://maisonsearamic.com/wp-content/uploads/2022/06/LOGO-1.png',
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
            <CardMedia component="img" height="150" image={card.image} alt={card.title} />
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
