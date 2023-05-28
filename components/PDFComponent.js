import { Document, Page } from '@react-pdf/renderer'
import React from 'react'
import Field from './Fields'

const PDFComponent = () => {
  return (
    <Document>
        <Page>
            <Field />
        </Page>
    </Document>
  )
}

export default PDFComponent
