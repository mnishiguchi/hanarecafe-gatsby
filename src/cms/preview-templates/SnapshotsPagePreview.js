import React from 'react';
import PropTypes from 'prop-types';
import { SnapshotsPageTemplate } from '../../templates/simple-page';

const SnapshotsPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <SnapshotsPageTemplate
      isCms
      markdownBody={data.markdownBody}
      mainImage={getAsset(data.mainImage)}
      mainImageActive={data.mainImageActive}
      snapshots={data.snapshots.map(({ image, title }) => ({
        image: getAsset(image),
        title,
      }))}
    />
  );
};

SnapshotsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default SnapshotsPagePreview;
