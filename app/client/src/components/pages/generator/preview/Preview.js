/**
 * @flow
 */

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'
import styled from 'styled-components'
import BlankPDF from '../../../../assets/resume.pdf'

const Resume = styled.div`
  position: fixed;
  width: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
`

const ResumeDoc = styled(Document)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ReactPDF__Page {
    width: 65%;
    height: 100%;
  }

  canvas {
    width: 100% !important;
    height: auto !important;
    box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 auto;
  }
`

class Preview extends Component<*, *> {
  render() {
    return (
      <Resume>
        <ResumeDoc file={BlankPDF}>
          <Page
            pageNumber={1}
          />
        </ResumeDoc>
      </Resume>
    )
  }
}

export default Preview
