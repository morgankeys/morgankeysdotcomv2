import React from 'react'
import Zoom from 'react-medium-image-zoom'
import './override-outline.css'
import 'react-medium-image-zoom/dist/styles.css'


const ZoomableImage = (props) => (
  <Zoom>
    {props.children}
  </Zoom>
)

export default ZoomableImage