import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

const getPastries = (t) => [
  {
    image: `/img/hanare-mekabu-loaf.jpg`,
    title: t(`products.mekabu-loaf.title`),
    description: t(`products.mekabu-loaf.description`),
  },
  {
    image: `/img/hanare-wakame-shio.jpg`,
    title: t(`products.wakame-shio.title`),
    description: t(`products.wakame-shio.description`),
  },
  {
    image: `/img/hanare-sugar-butter.jpg`,
    title: t(`products.sugar-butter.title`),
    description: t(`products.sugar-butter.description`),
  },
  {
    image: `/img/hanare-oyster-gratin.jpg`,
    title: t(`products.oyster-gratin.title`),
    description: t(`products.oyster-gratin.description`),
  },
  {
    image: `/img/hanare-pastry-assortment.jpg`,
  },
  { image: `/img/hanare-danishes.jpg` },
  { image: `/img/hanare-churros.jpg` },
  { image: `/img/hanare-banana-pound-cake.jpg` },
  { image: `/img/hanare-ice-cream.jpg` },
  { image: `/img/hanare-rusk.jpg` },
  { image: `/img/hanare-sandwich.jpg` },
];

function HanarePastries() {
  const { t } = useTranslation();

  const cards = getPastries(t);

  return (
    <Media query={{ maxWidth: 599 }}>
      {(matches) =>
        matches ? (
          // For mobile, each card takes full width.
          cards.map(({ image, title, description }) => {
            const imageUrl = !!image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image;
            return (
              <Card
                key={imageUrl}
                image={imageUrl}
                header={title}
                description={description}
                fluid
              />
            );
          })
        ) : (
          // For larger devices, switch column count per row.
          <Grid doubling columns={3}>
            {cards.map(({ image, title, description }) => {
              const imageUrl = !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image;
              return (
                <Grid.Column key={imageUrl}>
                  <Card
                    image={imageUrl}
                    header={title}
                    description={description}
                  />
                </Grid.Column>
              );
            })}
          </Grid>
        )
      }
    </Media>
  );
}

export default HanarePastries;
