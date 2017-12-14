/**
 * @flow
 */

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'
import styled from 'styled-components'
import { Button } from '../../../shared'
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

const ResumePage = styled(Page)`
  width: 100%;
  height: 100%;

  canvas {
    width: auto !important;
    height: auto !important;
    max-width: 55% !important;
    box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 auto;
  }
`

const MakeButton = Button.extend`
  width: 150px;
  padding: 0;
`

class Preview extends Component<*, *> {
  render() {
    return (
      <Resume>
        <Document loading={<div>lul</div>} file={BlankPDF}>
          <ResumePage
            renderAnnotations={false}
            renderTextLayer={false}
            pageNumber={1}
          />
        </Document>
        <MakeButton primary>make</MakeButton>
      </Resume>
    )
  }
}

export default Preview
