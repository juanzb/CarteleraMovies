import React from 'react'
import ImgLoading from '../assets/e26300c0c746d3163a0f48223c897cee.gif'

const Loading: React.FC = () => {
  return (<>
  <div className="grid grid-cols-1 w-full justify-items-center mb-20" >
    <img className="h-96" alt="Loading" src={ImgLoading} />
    <h1 className="text-5xl font-bold text-slate-300" >Loading . . .</h1>
  </div>
  </>)
}

export default Loading