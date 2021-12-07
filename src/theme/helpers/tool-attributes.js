import React from 'react'
import IconDoctor from '../components/atoms/Icon/Doctor'
import IconBubbleprof from '../components/atoms/Icon/Bubbleprof'
import IconFlame from '../components/atoms/Icon/Flame'
import IconHeap from '../components/atoms/Icon/Heap'
import variables from '../variables'

// Map of colours and icons to tool type passed as props to component
const toolAtributes = [
  {
    type: 'doctor',
    Icon: <IconDoctor xl />,
    colour: variables.colour.brand.doctor
  },
  {
    type: 'bubbleprof',
    Icon: <IconBubbleprof xl />,
    colour: variables.colour.brand.bubbleprof
  },
  {
    type: 'flame',
    Icon: <IconFlame xl />,
    colour: variables.colour.brand.flame
  },
  {
    type: 'heap',
    Icon: <IconHeap xl />,
    colour: variables.colour.brand.heap
  }
]

export const getAttributes = type =>
  toolAtributes.filter(item => item.type === type).shift() || {}

export default toolAtributes
