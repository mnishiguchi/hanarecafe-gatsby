import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import GatsbyImage from 'gatsby-image';

const translateItems = (t, items) => {
  return items.map(({ image, translationKey }) =>
    translationKey
      ? {
          image: image,
          title: t(`${translationKey}.title`),
          description: t(`${translationKey}.description`),
        }
      : { image }
  );
};

function PastrieCard({ image, title, description, fluid = false }) {
  return (
    <Card fluid>
      <GatsbyImage fluid={image.childImageSharp.fluid} />
      {title && description && (
        <Card.Content>
          {title && <Card.Header>{title}</Card.Header>}
          {description && <Card.Description>{description}</Card.Description>}
        </Card.Content>
      )}
    </Card>
  );
}

function HanarePastries({ items }) {
  const { t } = useTranslation();
  const cards = translateItems(t, items);

  return (
    <Media query={{ maxWidth: 599 }}>
      {(matches) =>
        matches ? (
          // For mobile, each card takes full width.
          cards.map((card, index) => {
            return <PastrieCard key={index} {...card} />;
          })
        ) : (
          // For larger devices, switch column count per row.
          <Grid doubling columns={3}>
            {cards.map((card, index) => {
              return (
                <Grid.Column key={index}>
                  <PastrieCard {...card} />
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
