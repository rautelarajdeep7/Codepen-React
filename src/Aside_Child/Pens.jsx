import React from 'react'
import { useState } from 'react'
import { Link, Outlet, Routes, Route } from 'react-router-dom'
import "./Pens.css"

const Pens = () => {
  let [pensTab, set_pensTab] = useState(0);
  let btn_style = "bg-gray-700 px-2 py-1.5 rounded-sm text-gray-400 hover:text-white";
  let [line_color, setline_color] = useState("bg-blue-400");
  let [icon_color, seticon_color] = useState(0)

  return (
    <>

      <div className=' bg-gray-900 p-2'>

        <div className={`w-full ${line_color} h-1 mb-2`}></div>

        <div className='flex gap-3'>
          <Link to="/"> <button className={`${btn_style}`}><i class="fa-solid fa-user"></i> Your Work</button> </Link>
          <Link to="mypens">  <button onClick={() => { set_pensTab(0); setline_color("bg-blue-400"); seticon_color(0) }} className={`${btn_style} ${pensTab === 0 ? "pens_tab" : ""}`}> <i className={`${icon_color === 0 ? "text-blue-400" : ""} fa-solid fa-box`}></i> &nbsp; Pens</button>  </Link>
          <Link to="projects">  <button onClick={() => { set_pensTab(1); setline_color("bg-yellow-300"); seticon_color(1) }} className={`${btn_style} ${pensTab === 1 ? "pens_tab" : ""}`}> <i className={`${icon_color === 1 ? "text-yellow-400" : ""} fa-solid fa-box`}></i> &nbsp; Projects</button>  </Link>
          <Link to="collections">  <button onClick={() => { set_pensTab(2); setline_color("bg-purple-400"); seticon_color(2) }} className={`${btn_style} ${pensTab === 2 ? "pens_tab" : ""}`}> <i className={`${icon_color === 2 ? "text-purple-400" : ""} fa-solid fa-box`}></i> &nbsp;Collections</button> </Link>
        </div>

        <Outlet></Outlet>


      </div>

    </>

  )
}

export default Pens
