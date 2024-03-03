import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function AdminSidebar() {
  return (
    <>
    <div className='flex h-full w-[80px] fixed px-[20px] top-0 left-0 border-r-2 fixed'>
        <ul className='px-2 list-none pt-[20px]'>
            <li className='py-[10px] text-xl'><FontAwesomeIcon icon={faHome} /></li>
            <li className='py-[10px] text-xl'> </li>
            <li className='py-[10px] text-xl'> </li>
        </ul>
    </div>
    </>
  )
}

export default AdminSidebar