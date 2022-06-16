import React from 'react'

const Navbarbelow = () => {
  return (
    <div className="bg-dark p-2 text-white d-flex" >
      <div className="d-flex " >
          <h6 className="px-3">MATCHES</h6>
          <p className="px-3">NZ vs ENG-Stump</p>
          <p className="px-3">PAK vs WI-PAK Won</p>
          <p className="px-3">DERBY vs WORCS-D...</p>
          <p className="px-3">HAM vs GLAM-Live</p>
          <p className="px-3">WARKS vs YORKS-C...</p>
      </div>
      <div className="ml-auto ">
          <select className="bg-dark border-0 text-white px-2">
              <option value="">All</option>
          </select>
      </div>
    </div>
  )
}

export default Navbarbelow
