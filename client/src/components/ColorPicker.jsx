import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          "#19A7CE",
          "#8294C4",
          "#8B1874",
          "#A4D0A4",
          "#F7E1AE",
          "#F97B22",
          "#088395",
          "#9384D1",
          "#3C486B",
          "#D21312",
          "#C7E9B0",
          "#8F43EE"
        ]}
      />
    </div>
  )
}

export default ColorPicker