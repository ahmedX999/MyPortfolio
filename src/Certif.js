import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CZL7DW5PRDWZ/CERTIFICATE_LANDING_PAGE~CZL7DW5PRDWZ.jpeg',
  },
  {
    id: 2,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9BTPKBYL6E6V/CERTIFICATE_LANDING_PAGE~9BTPKBYL6E6V.jpeg',
  },
  {
    id: 3,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HTSZSEUCQD8Y/CERTIFICATE_LANDING_PAGE~HTSZSEUCQD8Y.jpeg',
  },
  {
    id: 4,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UBHKPQCGR4C5/CERTIFICATE_LANDING_PAGE~UBHKPQCGR4C5.jpeg',
  },
  



  // Add more cards here
];

const Certification = () => {
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
            <CardMedia component="img" height="250" image={card.image} alt={card.title} />
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
export default Certification;
