import React from 'react';
import { Grid, Icon, Item, Segment } from 'semantic-ui-react';
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

const breadColor = '#9a5623';

function HanareServiceList() {
  const { t } = useTranslation();

  return (
    <Media query={{ maxWidth: 599 }}>
      {(matches) => (
        <Grid doubling columns={matches ? 1 : 2}>
          {getServices(t).map(({ icon, title, description, to }, index) => {
            return (
              <Grid.Column key={index}>
                <Segment size="large">
                  <Item>
                    <Item.Content>
                      <Item.Header as="h3" style={{ color: breadColor }}>
                        <Icon name={icon} size="large" />
                        <span style={{ marginLeft: '.5rem' }}>{title}</span>
                      </Item.Header>
                      <Item.Description style={{ lineHeight: '1.6' }}>
                        {description}{' '}
                        <I18nLink to={to}>
                          {t('labels.details')}
                          <Icon name="angle double right" />
                        </I18nLink>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      )}
    </Media>
  );
}

export default HanareServiceList;
