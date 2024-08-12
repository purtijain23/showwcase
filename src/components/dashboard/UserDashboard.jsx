import React from 'react'
import Nav from '../Nav'
import Header from '../Header'
import NewThread from '../NewThread'
import Trending from '../Trending'
import Remotejobs from '../Remotejobs'
import Footer from '../Footer'
import ForU from '../ForU'
import Thread from '../Thread'

const UserDashboard = () => {
  return (
    <>
      <div className="row mx-0">
        <div className="col-12 px-0 border border-gray">
            <Nav/>
            <Header/>
            <div className="row mx-0 justify-content-center mt-5">
              <div className='col-10 px-4'>
                <div className="row mx-0 ">
                  <div className="col-8">
                    <NewThread/>
                    <ForU/>
                    <Thread/>
                  </div>
                  <div className="col-4">
                    <Trending/>
                    <Remotejobs/>
                    <Footer/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
