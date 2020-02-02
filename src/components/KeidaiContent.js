import React from 'react';
import { Link } from 'gatsby';
import { List, Segment } from 'semantic-ui-react';

import KeidaiImage from './KeidaiImage';

const KeidaiContent = props => {
  return (
    <>
      <KeidaiImage />
      <Segment>
        {/* prettier-ignore */}
        <List horizontal celled relaxed>
          <List.Item as={Link} to={`/shinmeisha`} content={`洲崎濱宮神明神社`} />
          <List.Item as={Link} to={`/honden`} content={`海山道開運稲荷神社本殿`} />
          <List.Item as={Link} to={`/kigansho`} content={`(1) 交通安全祈願所`} />
          <List.Item content={`(2) 筆　塚`} />
          <List.Item as={Link} to={`/sukeshiro`} content={`(3) 助四郎社`} />
          <List.Item content={`(4) 大漁社`} />
          <List.Item content={`(5) 八十八社`} />
          <List.Item as={Link} to={`/yashima`} content={`(6) 八鳥治太夫碑`} />
          <List.Item content={`(7) 報国稲荷社`} />
          <List.Item content={`(8) 狐　塚`} />
          <List.Item content={`(9) 招福社`} />
          <List.Item content={`(10) 足留め社`} />
          <List.Item content={`(11) 長谷川社・真弓社`} />
          <List.Item content={`(12) 熊鷹社`} />
          <List.Item content={`(13) 安全社`} />
          <List.Item content={`(14) 橿原神宮遥拝所`} />
          <List.Item content={`(15) 眼鏡塚`} />
          <List.Item content={`(16) 合格社`} />
          <List.Item content={`(17) 助一社`} />
          <List.Item content={`(18) 厄除社`} />
          <List.Item content={`(19) 福寿社`} />
          <List.Item content={`(20) 福徳社`} />
          <List.Item content={`(21) 必勝社`} />
          <List.Item content={`(22) 玉富社`} />
          <List.Item content={`(23) 出世五社伏見社`} />
          <List.Item content={`(24) 成功社`} />
          <List.Item content={`(25) 春熊社`} />
          <List.Item content={`(26) 金生社`} />
          <List.Item content={`(27) 福龍社`} />
          <List.Item content={`(28) 白龍社`} />
          <List.Item as={Link} to={`/jinguyohaisho`} content={`(29) 神宮遥拝所`} />
          <List.Item content={`(30) 奉安庫`} />
          <List.Item content={`(31) 靖国神社遥拝所`} />
          <List.Item content={`(32) 納札所`} />
          <List.Item content={`(33) 豆まき舞台`} />
          <List.Item as={Link} to={`/tenjinzo`} content={`(34) 天神菅原社`} />
        </List>
      </Segment>
    </>
  );
};

export default KeidaiContent;
