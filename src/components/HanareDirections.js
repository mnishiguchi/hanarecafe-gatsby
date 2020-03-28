import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import GoogleMap from '../components/GoogleMap';

export const HanareDirections = () => (
  <>
    <GoogleMap />

    <Segment vertical>
      <Header as="h3">
        <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50006.html">
          近鉄電車
        </OutboundLink>
        でお越しのみなさまへ
      </Header>
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E7%B7%9A">
        近鉄名古屋線
      </OutboundLink>{' '}
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%ÏE5%B1%B1%E9%81%93%E9%A7%85">
        海山道駅
      </OutboundLink>
      下車すぐ{'　'}
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B1%B1%E9%81%93%E9%A7%85#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:KINTETSU_MIYAMADO_STA.JPG">
        改札西出口
      </OutboundLink>
      より徒歩３０秒
    </Segment>

    <Segment vertical>
      <Header as="h3">
        <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%8B%A2%E6%B9%BE%E5%B2%B8%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93">
          伊勢湾岸自動車道
        </OutboundLink>
        でお越しのみなさまへ
      </Header>
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%88%E5%B7%9D%E8%B6%8A%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
        みえ川越インターチェンジ
      </OutboundLink>
      下車{'　'}
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%9323%E5%8F%B7">
        国道２３号
      </OutboundLink>
      津方面 ２０分
    </Segment>

    <Segment vertical>
      <Header as="h3">
        <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%90%8D%E9%98%AA%E5%9B%BD%E9%81%93">
          名阪国道
        </OutboundLink>
        でお越しのみなさまへ
      </Header>
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BA%80%E5%B1%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
        亀山インターチェンジ
      </OutboundLink>
      下車{'　'}
      <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%931%E5%8F%B7">
        国道1号
      </OutboundLink>
      四日市方面３０分
    </Segment>
  </>
);

export default HanareDirections;
