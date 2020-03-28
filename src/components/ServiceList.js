import React from 'react';
import { navigate } from 'gatsby';
import { Grid, Icon, Item } from 'semantic-ui-react';
import Media from 'react-media';

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

function ServiceList() {
  return (
    <Media query={{ maxWidth: 599 }}>
      {(matches) => (
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
  );
}

export default ServiceList;
