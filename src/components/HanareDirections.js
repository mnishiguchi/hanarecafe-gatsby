import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Icon, Message, Segment, Step } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useTranslation } from 'react-i18next';
import GatsbyImage from 'gatsby-image';

import GoogleMap from '../components/GoogleMap';

function StepsFromMarineTerminal() {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 88, height: 88) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Step.Group fluid unstackable size="large">
      <Step link>
        <Step.Content>
          <Step.Title></Step.Title>
          <Step.Description>
            <OutboundLink href="https://goo.gl/maps/q7X27MuGMmw1PJAU7">
              {t(`directions.toba-municipal-liner`)}
              <br />
              {t(`directions.satahama-stop`)}
              <br />({t(`directions.toba-marine-terminal`)})
            </OutboundLink>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step active>
        <Icon name="ship" />
        <Step.Content>
          <Step.Description>
            <OutboundLink href="https://www.city.toba.mie.jp/teikisen-kanri/page/access.html">
              {t(`directions.toba-municipal-liner`)}
              <br />
              {t(`directions.13-minutes`)}
            </OutboundLink>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step link>
        <Step.Content>
          <Step.Title></Step.Title>
          <Step.Description>
            <OutboundLink href="https://goo.gl/maps/bg61Yc632UJfM6Rj9">
              {t(`directions.momotori-stop`)}
            </OutboundLink>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step active>
        <Icon name="child" />
        <Step.Content>
          <Step.Description>
            <OutboundLink href="https://www.google.com/maps/dir/%E6%A1%83%E5%8F%96%E5%AE%9A%E6%9C%9F%E8%88%B9%E5%BE%85%E5%90%88%E6%89%80+%E3%83%88%E3%82%A4%E3%83%AC+Momotoricho,+Toba,+Mie+517-0003,+Japan/%E9%B3%A5%E7%BE%BD%E7%A3%AF%E9%83%A8%E6%BC%81%E5%8D%94%E6%A1%83%E5%8F%96%E7%94%BA%E6%94%AF%E6%89%80%E9%AD%9A%E5%B8%82%E5%A0%B4/@34.5142783,136.8506658,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6004f845c9269a9b:0xaf7dace80d3f9dea!2m2!1d136.8523671!2d34.5139489!1m5!1m1!1s0x6004f845dfba0121:0x51f481fa5de12bf0!2m2!1d136.853104!2d34.514995!3e2?hl=en">
              {t(`directions.walking`)}
              <br />
              {t(`directions.3-minutes`)}
            </OutboundLink>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step style={{ padding: '0 0 0 0.6rem' }}>
        <Step.Content>
          <GatsbyImage
            fixed={data.logoImage.childImageSharp.fixed}
            style={{ height: '88px', width: '88px' }}
          />
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

export function HanareDirections() {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: '92vw' }}>
      <GoogleMap title="directions.map" />

      <Message size="large">{t(`directions.message`)}</Message>

      <Segment vertical style={{ overflowX: 'auto' }}>
        <StepsFromMarineTerminal />
      </Segment>

      <Segment>
        <Segment vertical>
          <Header as="h3">{t(`directions.by-kintetsu-train-title`)}</Header>
          <p>
            {t(`directions.by-kintetsu-train-description`)}{' '}
            <OutboundLink href="https://www.kintetsu.co.jp/station/station_info/station19009.html">
              {t(`directions.kintetsu-toba`)}
            </OutboundLink>
          </p>
        </Segment>
        <Segment vertical>
          <Header as="h3">{t(`directions.by-jr-train-title`)}</Header>
          <p>
            {t(`directions.by-jr-train-description`)}{' '}
            <OutboundLink href="https://railway.jr-central.co.jp/station-guide/tokai/toba/index.html">
              {t(`directions.jr-toba`)}
            </OutboundLink>
          </p>
        </Segment>
        <Segment vertical>
          <Header as="h3">{t(`directions.by-car-title`)}</Header>
          <p>
            {t(`directions.by-car-description`)}{' '}
            <OutboundLink href="https://goo.gl/maps/PKvByF9qWfGVVXD67">
              {t(`directions.satahama-parking`)}
            </OutboundLink>
          </p>
        </Segment>
      </Segment>
    </div>
  );
}

export default HanareDirections;
