import React from 'react';
import PropTypes from 'prop-types';
import { SimplePageTemplate } from '../../templates/simple-page';

const SimplePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <SimplePageTemplate
      isCms
      markdownBody={data.markdownBody}
      mainImage={getAsset(data.mainImage)}
      mainImageActive={data.mainImageActive}
    />
  );
};

SimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default SimplePagePreview;
