import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <div className='w-2/3 bg-purple-500'>
        <h3>Content</h3>

        <div className="content__list flex justify-between">
            <div className='w-1/4'>
                <Card />
            </div>
            <div className='w-1/4'>
                <Card />
            </div>
            <div className='w-1/4'>
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Content