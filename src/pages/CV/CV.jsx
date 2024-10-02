import React from 'react';
import './CV.scss';  // Assurez-vous d'avoir un fichier de style

import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function CV() {
  return (
    <div className='CVWrapper'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl='https://www.dropbox.com/scl/fi/q4witkg2202vf6vwvzemv/CV.pdf?rlkey=yk0fz9m21rlw2ke0mysbb318l&st=w0m3bru8&dl=1' defaultScale={SpecialZoomLevel.PageFit} className='pdf-viewer' />
      </Worker>
    </div>
  );
}

export default CV;


