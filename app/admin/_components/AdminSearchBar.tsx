import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function AdminSearchBar() {
  return (
    <div className='ml-[80px] border-b-2 h-[80px] py-[10px] px-[20px]'>
        
        <div className='ml-[20px] flex '><FontAwesomeIcon className='my-auto' icon={faMagnifyingGlass} /> <input type="text" name="text" className="admin-page-search-navbar" placeholder="Search...."></input>
        
        <div className='ml-[70%] my-auto'>
        <button className="setting-btn">
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar1"></span>
        </button>
        </div>
        <div className=' w-[40px] my-auto ml-auto rounded-full'><img src="/images/user-image.png" alt="user_Image" /></div>
        </div>
        

    </div>
  )
}

export default AdminSearchBar;