/**
 * @flow
 */

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'
import styled from 'styled-components'
import { Button } from '../../../shared'
import { colors } from '../../../../theme'
import BlankPDF from '../../../../assets/resume.pdf'

const Resume = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
`

const preview = Math.min(800, (document.body: any).clientWidth - 52)

const ResumePage = styled(Page)`
  height: 100% !important;

  canvas {
    box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 auto;
    max-width: 60%;
    width: ${preview}px !important;
    height: auto !important;
  }
`

const MakeButton = Button.extend`
  min-width: 25%;
  padding-top: 15px;
  padding-bottom: 15px;
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
