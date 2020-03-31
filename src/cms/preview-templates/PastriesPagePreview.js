import React from 'react';
import PropTypes from 'prop-types';
import { PastriesPage } from '../../templates/meet-the-owner';

const PastriesPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return data ? (
    <PastriesPage
      isCms
      markdownBody={data.markdownBody}
      mainImage={getAsset(data.mainImage)}
      mainImageActive={data.mainImageActive}
    />
  ) : (
    <div>Loading...</div>
  );
};

PastriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default PastriesPagePreview;
