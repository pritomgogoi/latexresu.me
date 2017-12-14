/**
 * @flow
 */

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'
import styled from 'styled-components'
import BlankPDF from '../../../../assets/blank.pdf'

const Resume = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;

  canvas,
  .ReactPDF__Page,
  .ReactPDF__Page__textContent {
    max-width: 100% !important;
    max-height: 80vh !important;
    width: auto !important;
    height: auto !important;
  }

  canvas {
    box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
`

class Preview extends Component<*, *> {
  render() {
    return (
      <Resume>
        <Document loading={<div>lul</div>} file={BlankPDF}>
          <Page pageNumber={1} />
        </Document>
      </Resume>
    )
  }
}

export default Preview
