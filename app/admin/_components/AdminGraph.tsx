import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaArrowUp } from 'react-icons/fa'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function AdminGraph() {
  return (<>
    <div className='mt-[20px] ml-[20px] flex'> <h1 className='text-xl'>Graph </h1> 
    <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl mt-[30px] border-0 border-solid bg-white bg-clip-border">
    <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0 mt-[10px]">
    <h6 className='capitalize dark:text-white'>Sales Overview</h6>
    <p className="mb-0 leading-normal dark:text-white dark:opacity-60 text-sm"><FontAwesomeIcon icon={faArrowUp} style={{color: "#63E6BE",}} />
    <span className='font-semibold'> 5% more</span> " in 2024 "
    </p>
    </div>
    <div className='flex-auto p-4'>
        <canvas id='chart-line' height="375" width="661" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '529.2px'}} />
        <div>
        </div></div>
    </div>
    </div>
    </>
  )
}

export default AdminGraph