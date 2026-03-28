import React from 'react'

const TaskCard = (props) => {
    return (
        <div className='flex items-center gap-4 p-5 rounded-2xl 
            backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>
            {props.icon}
            <div>
                <h2 className='text-sm text-gray-300'>{props.title || "Title"}</h2>
                <p className='text-xl font-bold'>{props.number || 0}</p>
                <span className='text-xs text-green-400'>{props.last || " "} </span>
            </div>
        </div>
    )
}

export default TaskCard
