import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const entryRelatedLinks = entry.getIn(['data', 'intro', 'relatedLinks']);
  const relatedLinks = entryRelatedLinks ? entryRelatedLinks.toJS() : [];

  return data ? (
    <IndexPageTemplate
      isCms
      mainBackgroundImage={getAsset(data.mainBackgroundImage)}
      mainImage={getAsset(data.mainImage)}
      relatedLinks={relatedLinks}
      markdownBody={widgetFor('markdownBody')}
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
