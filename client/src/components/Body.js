import React, {useState} from 'react'

const Body = () => {
  return (
    <div className='flex'>
        <div className='px-24 flex flex-col rounded-md bg-color1 text-white '>
            <p className='px-96 mt-4 font-bold text-3xl'>List Misi</p>
            <div className='flex flex-row justify-between mt-3 items-center'>
                <div className='flex'>
                    <p className='mr-4'>1.</p>
                    <p>Nama Misi</p>
                </div>
                <div>
                    <button type="button" className="btn btn-success mx-4">Save</button>
                    <button type="button" className="btn btn-warning mx-4">Edit</button>
                    <button type="button" className="btn btn-danger ml-4">Delete</button>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-3 items-center'>
                <div className='flex'>
                    <p className='mr-4'>2.</p>
                    <p>Nama Misi</p>
                </div>
                <div>
                    <button type="button" className="btn btn-success mx-4">Save</button>
                    <button type="button" className="btn btn-warning mx-4">Edit</button>
                    <button type="button" className="btn btn-danger ml-4">Delete</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Body