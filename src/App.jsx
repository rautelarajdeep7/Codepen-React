import Header from "./Header"
import Aside_Component from "./Aside_Component"

import { useRef, useState } from 'react'

import { BrowserRouter } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom'

import Home from './Aside_Child/Home'
import Editor from './Aside_Child/Editor'
import Coding from './Aside_Child/Coding'
import Pens from './Aside_Child/Pens'
import Challenges from './Aside_Child/Challenges'
import Spark from './Aside_Child/Spark'
import CodepenPro from './Aside_Child/CodepenPro'

import YourWork from './Aside_Child/Pens_child/YourWork'
import Projects from './Aside_Child/Pens_child/Projects'
import MyPens from './Aside_Child/Pens_child/MyPens'
import Colections from './Aside_Child/Pens_child/Collections'
import Collections from "./Aside_Child/Pens_child/Collections";

export function App() {

  let main_box_ref = useRef();


  return (
    <BrowserRouter>
      <>

        <Aside_Component ref_control={main_box_ref} />

        <div ref={main_box_ref} className="w-[85%] h-full bg-gray-950 absolute top-0 left-[15%] duration-300">

          <Header />

          <div className="text-white px-6 pt-14">   {/* Main content of body*/}
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/editor' element={<Editor></Editor>}></Route>
              <Route path='/coding' element={<Coding></Coding>}></Route>

              <Route path='/pens' element={<Pens></Pens>}> {/* Nesting for Pens aside component */}
                <Route path='your_work' element={<YourWork></YourWork>}></Route>
                <Route path='mypens' element={<MyPens></MyPens>}></Route>
                <Route path='projects' element={<Projects></Projects>}></Route>
                <Route path='collections' element={<Collections></Collections>}></Route>
              </Route>

              <Route path='/challenges' element={<Challenges></Challenges>}></Route>
              <Route path='/spark' element={<Spark></Spark>}></Route>
              <Route path='/codepen_pro' element={<CodepenPro></CodepenPro>}></Route>
            </Routes>
          </div>

        </div>

      </>
    </BrowserRouter>



  )
}
