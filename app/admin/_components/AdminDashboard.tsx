import React from 'react'
import AdminUsersTable from './AdminUsersTable'
import AdminCards from './AdminCards'
import AdminGraph from './AdminGraph'

function AdminDashboard() {
  return (
    <div className='ml-[80px] px-[15px]'>
        <div className='px-[5px] py-[15px] border-b-[1px]'>
        <h1 className='text-2xl font-semibold'>DashBoard</h1>
        </div>
        <AdminCards/>
        <AdminGraph/>
        <AdminUsersTable/>
    </div>
  )
}

export default AdminDashboard