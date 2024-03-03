import React from 'react'

function AdminUsersTable() {
  return (
    <div className='p-[20px] '>
        <h2 className='text-xl'>Users</h2>
        <div className='md:shadow rounded-xl mt-[20px]'>
        <table className="min-w-full overflow-x-scroll divide-y divide-gray-200 ">
                    <thead className="bg-gray-50 rounded-t-xl">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase rounded-t-xl"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative px-6 py-3 rounded-t-xl">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                      <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                      <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                      <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                      <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                      <tr className='p-[20px]'>
                        <td className='p-6 rounded-b-xl'>profile picture and name of user</td>
                        
                        <td className='p-6'>title of the user</td>
                        <td className='p-6'><span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>Active</span></td>
                        <td className='p-6'>Role of user</td>
                        <td className='p-6 rounded-b-xl'>edit button</td>
                      </tr>
                    </tbody>
                  </table>
        </div>
    </div>
  )
}

export default AdminUsersTable