import React from 'react'

const KeyValues = ({title,description}) => {
  return (
    <div className='p-4 bg-white shadow rounded-xl'>
        <h3 className='font-semibold text-lg text-gray-900'>{title}</h3>
        <p className='text-gray-500 text-sm mt-1'>{description}</p>

    </div>
  )
}

export default KeyValues