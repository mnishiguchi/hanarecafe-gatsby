import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return data ? (
    <IndexPageTemplate
      isCms
      markdownBody={data.markdownBody}
      mainBackgroundImage={getAsset(data.mainBackgroundImage)}
      mainImage={getAsset(data.mainImage)}
      relatedLinks={data.relatedLinks}
    />
  ) : (
    <div>Loading...</div>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
