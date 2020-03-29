import React from 'react';
import { Grid, Icon, Item } from 'semantic-ui-react';
import Media from 'react-media';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const getServices = (t) => [
  {
    title: t('topics.bakery.title'),
    description: t('topics.bakery.description'),
    icon: 'cloud',
    to: '/pastries',
  },
  {
    title: t('topics.amenities.title'),
    description: t('topics.amenities.description'),
    icon: 'coffee',
    to: '/cafe',
  },
  {
    title: t('topics.food-truck.title'),
    description: t('topics.food-truck.description'),
    icon: 'truck',
    to: '/food-truck',
  },
  {
    title: t('topics.special-orders.title'),
    description: t('topics.special-orders.description'),
    icon: 'utensils',
    to: '/special-orders',
  },
];

function HanareServiceList() {
  const { t } = useTranslation();

  return (
    <Media query={{ maxWidth: 599 }}>
      {(matches) => (
        <Grid doubling columns={matches ? 1 : 2}>
          {getServices(t).map(({ icon, title, description, to }, index) => {
            return (
              <Grid.Column key={index}>
                <Item>
                  <Item.Content>
                    <Item.Header as="h4">
                      <Icon name={icon} size="large" />
                      {title}
                    </Item.Header>
                    <Item.Meta>
                      {description}{' '}
                      <Link as={Link} to={to}>
                        {t('details')}
                        <Icon name="angle double right" />
                      </Link>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Grid.Column>
            );
          })}
        </Grid>
      )}
    </Media>
  );
}

export default HanareServiceList;
