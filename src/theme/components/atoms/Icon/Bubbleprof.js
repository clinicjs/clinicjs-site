import React from 'react'
import Icon from './'
import generateHash from '../../../../utils/generate-hash'

const Bubbleprof = props => {
  const id = generateHash()

  return (
    <Icon
      {...{
        fill: '#39bad6',
        ...props
      }}
    >
      <defs>
        <clipPath id={id}>
          <rect x="3.42" y="1" width="57.16" height="62" />
        </clipPath>
      </defs>
      <g
        style={{
          clipPath: `url(#${id})`
        }}
      >
        <circle cx="28.12" cy="25.7" r="9.69" />
        <circle cx="41.2" cy="43.62" r="2.42" />
        <path d="M60.23,21.21A8.58,8.58,0,0,0,56,14.75C48.93,10.42,42,6,35.45,2a6.38,6.38,0,0,0-6.9,0C22,6,15.07,10.45,8,14.75a8.63,8.63,0,0,0-4.21,6.46,165.32,165.32,0,0,0,0,21.58A8.58,8.58,0,0,0,8,49.25C15.07,53.55,22,58,28.55,62a6.38,6.38,0,0,0,6.9,0C42,58,48.93,53.55,56,49.25a8.5,8.5,0,0,0,4.21-6.46A165.32,165.32,0,0,0,60.23,21.21ZM28.12,38.3a12.6,12.6,0,1,1,12.6-12.6A12.61,12.61,0,0,1,28.12,38.3ZM41.2,49a5.33,5.33,0,1,1,5.33-5.33A5.34,5.34,0,0,1,41.2,49Z" />
      </g>
    </Icon>
  )
}

export default Bubbleprof
