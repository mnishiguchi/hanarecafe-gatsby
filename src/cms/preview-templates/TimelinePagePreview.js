import React from 'react';
import PropTypes from 'prop-types';
import { TimelinePageTemplate } from '../../templates/simple-page';

const TimelinePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return <TimelinePageTemplate isCms markdownBody={data.markdownBody} />;
};

TimelinePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default TimelinePagePreview;
