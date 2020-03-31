import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
// import MeetTheOwnerPagePreview from './preview-templates/MeetTheOwnerPagePreview';
// import PastriesPagePreview from './preview-templates/PastriesPagePreview';
// import SimplePagePreview from './preview-templates/SimplePagePreview';
// import SnapshotsPagePreview from './preview-templates/SnapshotsPagePreview';
// import TimelinePagePreview from './preview-templates/TimelinePagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('meet-the-owner', MeetTheOwnerPagePreview);
// CMS.registerPreviewTemplate('pastries', PastriesPagePreview);
// CMS.registerPreviewTemplate('simple', SimplePagePreview);
// CMS.registerPreviewTemplate('snapshots', SnapshotsPagePreview);
// CMS.registerPreviewTemplate('timeline', TimelinePagePreview);
