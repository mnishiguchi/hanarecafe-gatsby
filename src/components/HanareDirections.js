import React from 'react';
import { Header, Icon, Message, Segment, Step } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { LogoImage } from '../components/staticImages';
import GoogleMap from '../components/GoogleMap';

const StepsFromMarineTerminal = () => (
  <Step.Group fluid unstackable size="tiny">
    <Step link>
      <Step.Content>
        <Step.Title></Step.Title>
        <Step.Description>
          <OutboundLink href="https://goo.gl/maps/q7X27MuGMmw1PJAU7">
            鳥羽市営定期船　
            <br />
            佐田浜のりば
            <br />
            (鳥羽マリンターミナル)
          </OutboundLink>
        </Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name="ship" />
      <Step.Content>
        <Step.Description>
          <OutboundLink href="https://www.city.toba.mie.jp/teikisen-kanri/page/access.html">
            定期船
            <br />
            13分
          </OutboundLink>
        </Step.Description>
      </Step.Content>
    </Step>
    <Step link>
      <Step.Content>
        <Step.Title></Step.Title>
        <Step.Description>
          <OutboundLink href="https://goo.gl/maps/bg61Yc632UJfM6Rj9">
            桃取 定期船待合所
          </OutboundLink>
        </Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name="hand point right outline" />
      <Step.Content>
        <Step.Description>
          <OutboundLink href="https://www.google.com/maps/dir/%E6%A1%83%E5%8F%96%E5%AE%9A%E6%9C%9F%E8%88%B9%E5%BE%85%E5%90%88%E6%89%80+%E3%83%88%E3%82%A4%E3%83%AC+Momotoricho,+Toba,+Mie+517-0003,+Japan/%E9%B3%A5%E7%BE%BD%E7%A3%AF%E9%83%A8%E6%BC%81%E5%8D%94%E6%A1%83%E5%8F%96%E7%94%BA%E6%94%AF%E6%89%80%E9%AD%9A%E5%B8%82%E5%A0%B4/@34.5142783,136.8506658,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6004f845c9269a9b:0xaf7dace80d3f9dea!2m2!1d136.8523671!2d34.5139489!1m5!1m1!1s0x6004f845dfba0121:0x51f481fa5de12bf0!2m2!1d136.853104!2d34.514995!3e2?hl=en">
            徒歩
            <br />
            3分
          </OutboundLink>
        </Step.Description>
      </Step.Content>
    </Step>
    <Step style={{ padding: '0 0 0 0.6rem' }}>
      <Step.Content>
        <LogoImage style={{ minWidth: '88px', minHeight: '88px' }} />
      </Step.Content>
    </Step>
  </Step.Group>
);

export const HanareDirections = () => (
  <>
    <GoogleMap />

    <Message>
      <p>当店は答志島 桃取の鳥羽磯部漁協桃取町支所魚市場の近くにございます。</p>
      <p>離島ですので、鳥羽マリンターミナルからは定期船にてお越しください。</p>
    </Message>

    <Segment vertical style={{ overflowX: 'auto' }}>
      <StepsFromMarineTerminal />
    </Segment>

    <Segment>
      <Segment vertical>
        <Header as="h3">
          <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50001.html">
            近鉄電車
          </OutboundLink>
          でお越しのみなさまへ
        </Header>
        <OutboundLink href="https://www.kintetsu.co.jp/station/station_info/station19009.html">
          鳥羽駅
        </OutboundLink>
        下車、２番出口から定期船のりばまで徒歩10分です。
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50001.html">
            JR参宮線
          </OutboundLink>
          でお越しのみなさまへ
        </Header>
        <OutboundLink href="https://railway.jr-central.co.jp/station-guide/tokai/toba/index.html">
          鳥羽駅
        </OutboundLink>
        下車、近鉄側の２番出口から定期船のりばまで徒歩10分です。
      </Segment>
      <Segment vertical>
        <Header as="h3">車でお越しのみなさまへ</Header>
        定期船のりばに最寄りの駐車場は
        <OutboundLink href="https://goo.gl/maps/PKvByF9qWfGVVXD67">
          佐田浜駐車場
        </OutboundLink>
        です。
      </Segment>
    </Segment>
  </>
);

export default HanareDirections;
