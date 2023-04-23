import React from 'react';

import Card from 'react-bootstrap/Card';

export default function Experience() {


  return (
    <section className="section">

<Card className="my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>

<Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Travail à temps partiel</Card.Subtitle>
                    <br />
                    <Card.Text><strong>Entreprise : </strong> OG COMMUNICATION 
                    </Card.Text>
                    
                    <Card.Text><strong>Date : </strong> Novembre 2022 - Maintenant
                    </Card.Text>

                </Card.Body>
                </Card>
                <Card className="my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>stage de fin d'année 2022</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Stagiaire</Card.Subtitle>
                    <br />
                    <Card.Text><strong>Entreprise : </strong> OG COMMUNICATION 
                    </Card.Text>
                    <Card.Text><strong>Sujet : </strong> Création et maintenance de plusieurs sites web WordPress
                    </Card.Text>
                    <Card.Text><strong>Technologies : </strong> Html, Css, Js, Php, Wordpress , Woocommerce
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Septembre 2022 - Novembre 2022
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card className="my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage de fin d'etude 2021</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Stagiaire</Card.Subtitle>
                    <br />
                    <Card.Text><strong>Entreprise : </strong> NOZA Agency
                    </Card.Text>
                    <Card.Text><strong>Sujet : </strong> Site web Ecommerce
                    </Card.Text>
                    <Card.Text><strong>Technologies : </strong> Html, Css, Js, Php, Mysql
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> juillet 2021 - Aout 2021
                    </Card.Text>

                </Card.Body>
            </Card>


        </section>
  );
}