import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import {
  Container,
  Grid,
  Header,
  Icon,
  Item,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import SocialButtons from '../components/SocialButtons';
import FacebookTimeline from '../components/FacebookTimeline';
import GoogleMap from '../components/GoogleMap';
import HanareIntroVideo from '../components/HanareIntroVideo';
import { LogoImage } from '../components/gatsbyImages';

const services = [
  {
    title: 'パン製造販売',
    description: `水産業の盛んな答志島には、さまざまな海産物が溢れており、それをパンにも使用しています。例えば、めかぶの粉末を練り込んで焼き上げた食パン、天然のあおさを使用したシュガーバターパン、冬には地元のブランド牡蠣を使用した牡蠣のグラタンパンなど島外から来られた方にも印象に残るメニューを工夫しています。
漁師町の磯臭さではなく、路地からパンの焼ける香りがするのは不思議な感じかもしれません。`,
    icon: 'cloud',
    to: '/bread',
  },
  {
    title: '店内カフェ',
    description: `小さな店舗ですが八席のカフェスペースを設け、パンを店内でも食べることができるようにしました。 コーヒーやソフトアイスなど喫茶メニューも揃えています。
店名の「ハナレ」には、各家の「離れ」のようにお客さんに気軽に集まってもらいたいという思いが込められています。島のパン「屋」ではなく「家」という字をあてたのもそのためです。`,
    icon: 'coffee',
    to: '/amenities',
  },
  {
    title: 'パン移動販売',
    description: `島の反対側の答志地区まで車でのパン移動販売をしています。 また、市営定期船にパンを積み込み、各島（坂手島・菅島・神島）へパンを配達しています。
移動販売では漁協の肩が町内放送をかけてくれたり、船積み配達サービスでは他島にチラシを配っていただいたりと、島と地域の皆さんに支えられていることを実感する毎日です。
地域のお祭りや行事などにも参加させていただいてます。`,
    icon: 'truck',
    to: '/food-truck',
  },
  {
    title: 'スペシャルオーダーサービス',
    description:
      'お祝い事にカスタムメードのケーキ、フルーツタルトはいかがでしょうか？　また、各種イベントにオードブル、お弁当などのスペシャルオーダーも事前注文により承ります。（夫婦が切り盛りしておりますので、ご要望に添えない場合があることを予めご了承お願いします。）',
    icon: 'utensils',
    to: '/special-orders',
  },
];

function AppHero({ backgroundImageUrl }) {
  return (
    <Media query={{ maxWidth: 991 }}>
      {matches => (
        <div
          style={{
            alignItems: `center`,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: `50% 50%`,
            backgroundAttachment: `fixed`,
            display: `flex`,
            justifyContent: `center`,
            height: matches ? '300px' : '400px',
          }}
        >
          <div style={{ width: matches ? '200px' : '300px' }}>
            <LogoImage />
          </div>
        </div>
      )}
    </Media>
  );
}

function ImageBanner({ backgroundImageUrl, height, width, ...rest }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: `50% 50%`,
        backgroundAttachment: `fixed`,
        width: width || '100%',
        height: height || '16px',
      }}
      {...rest}
    />
  );
}

export function IndexPageTemplate({
  content,
  contentComponent,
  image,
  title,
  description,
  relatedLinks,
}) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  const PostContent = contentComponent || Content;

  return (
    <>
      <AppHero backgroundImageUrl={backgroundImageUrl} />

      <Container style={{ display: 'flex' }}>
        <div>
          <Segment
            padded="very"
            vertical
            textAlign="left"
            style={{ fontSize: '1.7rem', lineHeight: '1.7', overflowX: 'auto' }}
          >
            絶景観光スポット
            <OutboundLink href="https://ja.wikipedia.org/wiki/%E7%AD%94%E5%BF%97%E5%B3%B6">
              答志島
            </OutboundLink>
            にある
            <br />
            地元食材を使用した
            <br />
            焼きたて創作パンのお店です。
          </Segment>

          {content && <PostContent content={content} />}

          <HanareIntroVideo />

          <Segment padded="very" vertical>
            <Header as="h2">営業内容</Header>

            <Media query={{ maxWidth: 599 }}>
              {matches => (
                <Grid doubling columns={matches ? 1 : 2}>
                  {services.map(({ icon, title, description, to }, index) => {
                    return (
                      <Grid.Column key={index}>
                        <Item
                          onClick={() => navigate(to)}
                          style={{ cursor: 'pointer' }}
                        >
                          <Item.Content>
                            <Item.Header as="h4">
                              <Icon name={icon} size="large" />
                              {title}
                            </Item.Header>
                            <Item.Meta>{description}</Item.Meta>
                          </Item.Content>
                        </Item>
                      </Grid.Column>
                    );
                  })}
                </Grid>
              )}
            </Media>
          </Segment>

          <ImageBanner backgroundImageUrl={backgroundImageUrl} />

          <Segment padded="very" vertical>
            <Header as="h2">交通案内</Header>
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
          </Segment>

          <ImageBanner backgroundImageUrl={backgroundImageUrl} />

          {/* For mobile, show the Facebook here */}
          <Media
            query="(max-width: 991px)"
            render={() => (
              <>
                <Segment padded="very" vertical>
                  <Grid centered columns={2}>
                    <div>
                      <FacebookTimeline title="FacebookTimeline-mobile" />
                    </div>
                  </Grid>
                </Segment>
                <Segment vertical textAlign="center">
                  <SocialButtons />
                </Segment>
              </>
            )}
          />
          {relatedLinks.length > 0 && (
            <Segment padded="very" vertical>
              <Header as="h2">リンク</Header>
              <List>
                {relatedLinks.map((relatedLink, i) => (
                  <List.Item key={i}>
                    <OutboundLink href={relatedLink.href}>
                      {relatedLink.title}
                    </OutboundLink>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </div>

        <aside>
          {/* For desktop, show the Facebook sidebar. */}
          <Media
            query="(min-width: 992px)"
            render={() => (
              <div style={{ marginLeft: '1rem' }}>
                <FacebookTimeline title="FacebookTimeline-desktop" />
              </div>
            )}
          />
        </aside>
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  relatedLinks: PropTypes.array,
};

function IndexPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <IndexPageTemplate
        content={markdownRemark.html}
        contentComponent={HTMLContent}
        image={markdownRemark.frontmatter.image}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        relatedLinks={markdownRemark.frontmatter.relatedLinks}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        relatedLinks {
          title
          href
        }
      }
    }
  }
`;
