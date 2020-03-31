import React from 'react';
import PropTypes from 'prop-types';
import { MeetTheOwnerPage } from '../../templates/meet-the-owner';

const MeetTheOwnerPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return data ? (
    <MeetTheOwnerPage
      isCms
      markdownBody={data.markdownBody}
      mainImage={getAsset(data.mainImage)}
      mainImageActive={data.mainImageActive}
    />
  ) : (
    <div>Loading...</div>
  );
};

MeetTheOwnerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default MeetTheOwnerPagePreview;
