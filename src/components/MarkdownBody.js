import React from 'react';

function MarkdownBody({ markdownBody, isCms = false }) {
  if (isCms && markdownBody) {
    return <div style={{ marginBottom: '1.5rem' }}>{markdownBody}</div>;
  }

  return (
    markdownBody && (
      <div
        dangerouslySetInnerHTML={{ __html: markdownBody }}
        style={{ marginBottom: '1.5rem' }}
      />
    )
  );
}

export default MarkdownBody;
