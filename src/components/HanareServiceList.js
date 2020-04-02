import React from 'react';
import { Grid, Icon, Item } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

import I18nLink from './I18nLink';

const getServices = (t) => [
  {
    title: t('pages.pastries.title'),
    description: t('pages.pastries.description'),
    icon: 'cloud',
    to: '/pastries',
  },
  {
    title: t('pages.amenities.title'),
    description: t('pages.amenities.description'),
    icon: 'coffee',
    to: '/amenities',
  },
  {
    title: t('pages.food-truck.title'),
    description: t('pages.food-truck.description'),
    icon: 'truck',
    to: '/food-truck',
  },
  {
    title: t('pages.special-orders.title'),
    description: t('pages.special-orders.description'),
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
                      <I18nLink to={to}>
                        {t('labels.details')}
                        <Icon name="angle double right" />
                      </I18nLink>
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
