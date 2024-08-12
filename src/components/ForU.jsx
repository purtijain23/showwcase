import React from 'react'

const ForU = () => {
  return (
    <>
      <div className="row mx-0 my-4 foru">
        <div className="col-12 px-0">
            <div className='d-flex pt-2'>
                <button type='button' className='bg-primary text-light px-4 py-1'><i className='fa fa-wand-sparkles'/>For you</button>
                <button type='button' className='bg-light text-secondary px-4 py-1 mx-2'><i className='fa-regular fa-newspaper'/>News</button>
                <button type='button' className='bg-light text-secondary px-4 py-1'>Latest</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ForU
