import { CircleUserRound, User } from 'lucide-react'
import React from 'react'


const Card = () => {
  return (
    <div className='flex flex-col gap-y-1 w-80 bg-white p-2 rounded-2xl'>
      <div className="flex justify-center p-2 border-black">
        <CircleUserRound size={200} strokeWidth={1} />
      </div>
      <div className='flex justify-center text-2xl font-bold'>
        <h1>Tanish Kumar</h1>
      </div>
      <div className='flex gap-x-3 flex-wrap gap-y-2 my-2'>
        <span className='border-2 rounded-2xl px-2 cursor-pointer'>Nodejs</span>
        <span className='border-2 rounded-2xl px-2 cursor-pointer'>ReactJs</span>
        <span className='border-2 rounded-2xl px-2 cursor-pointer'>Mongodb</span>
        <span className='border-2 rounded-2xl px-2 cursor-pointer'>ExpressJ</span>
      </div>
      <div className='bg-amber-100'>
        <p>lorem epsum dumy text generate herar empty area text needen hearw</p>
      </div>
      <div className='flex justify-center py-3'>
        <button className='bg-blue-800 p-2 rounded-3xl cursor-pointer'>Visit Website</button>
      </div>
    </div>
  )
}

export default Card
