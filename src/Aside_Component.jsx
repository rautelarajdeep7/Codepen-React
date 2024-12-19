import logo from "./codepen/logo.png"       //importing a image
import { Link, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'

import Home from './Aside_Child/Home'
import Editor from './Aside_Child/Editor'
import Coding from './Aside_Child/Coding'
import Pens from './Aside_Child/Pens'
import Challenges from './Aside_Child/Challenges'
import Spark from './Aside_Child/Spark'
import CodepenPro from './Aside_Child/CodepenPro'

const Aside_Component = ({ ref_control }) => {



    let slide_btn_style = "bg-blue-400 text-white px-1 py-1 top-0 z-10 absolute left-[95%] text-xs"

    let [aside, setAside] = useState(true);
    let aside_style = "inline-block w-[15%] h-screen bg-black relative top-0 text-white gap-24 duration-300"
    // h-full was getting reduced because of usage of postion property. SO, we used h-screen so thet aside component fits to 100vh

    let aside_show = "left-[0%]"
    let aside_hide = "left-[-14%]"

    function slide_aside() {
        setAside(!aside);
        if (aside) {
            ref_control.current.classList.add("w-[99%]", "left-[1%]");
            ref_control.current.classList.remove("w-[85%]", "left-[15%]");
        }
        else {
            ref_control.current.classList.remove("w-[99%]", "left-[1%]");
            ref_control.current.classList.add("w-[85%]", "left-[15%]");
        }

        console.log("ref is ", ref_control)
    }


    return (
        <div className={`${aside_style} ${aside ? aside_show : aside_hide}`}>

            <button className={slide_btn_style} onClick={slide_aside}>Slide</button>


            <Link to="/">
                <div className="py-4 px-5">
                    <img src={logo} alt="logo" />
                </div>
            </Link>

            <Link to="/editor">
                <div className="ps-5 py-2 text-xs font-sans">
                    TRY OUR ONLINE EDITOR
                </div>
            </Link>

            <Link to="/coding">
                <div className="ps-5 py-2 font-sans hover:bg-slate-600">
                    Start Coding
                </div>
            </Link>

            <Link to="/pens">
                <div className="ps-5 py-2 hover:bg-slate-600" onClick={() => { }}>
                    Search Pens
                </div></Link>

            <Link to="/challenges">
                <div className="ps-5 py-2 hover:bg-slate-600">
                    Challenges
                </div>
            </Link>

            <Link to="/spark">
                <div className="ps-5 py-2 hover:bg-slate-600">
                    Spark
                </div>
            </Link>

            <Link to="/codepen_pro">
                <div className="ps-5 py-2 hover:bg-slate-600 my-3">
                    CodePen &nbsp;
                    <span className="bg-yellow-400 text-black rounded-sm text-xs px-1">PRO</span>
                </div>
            </Link>


        </div>
    )
}

export default Aside_Component



