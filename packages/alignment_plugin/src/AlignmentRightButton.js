import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome' 
import { Button } from '@hoco-editor/ui' 

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'

const AlignmentLeftButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'right'))}
    className={classnames( 
      { active: hasMark(value) && getMark(value).data.get('align') === 'right' },
      className,
    )}
  >
    <FontAwesome name="align-right" />
  </Button>
)

export default AlignmentLeftButton
