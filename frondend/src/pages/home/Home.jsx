import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-rose-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-rose-600 shadow-blue-900'>
  <Sidebar/>
  <MessageContainer/>
</div>
  )
}

export default Home