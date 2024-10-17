import React from 'react'
import Right from './Right'

export default function Content({p1}) {
  return (
    <div className='m-3 border border-1 p-5'>
        <div className='row'>
            <div className="col-3 border border-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Architecto pariatur omnis eum!
            </div>
            <div className="col-9 border border-1">
                <Right p2={p1} />
            </div>
        </div>
    </div>
  )
}
