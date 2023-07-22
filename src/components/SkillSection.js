import React from 'react'
import SectionHead from './utility/SectionHead'
import SkilBlock from './utility/SkilBlock'
import img1 from "../assets/html5.svg"
import img2 from "../assets/css3.svg"
import img3 from "../assets/jslogo.svg"
import img4 from "../assets/bootstrap.svg"
import img5 from "../assets/tailwindcss.svg"
import img6 from "../assets/mui.svg"
import img7 from "../assets/react.svg"
import img8 from "../assets/nextjsfil.svg"
import './style/skilblock.css'

const SkillSection = () => {
  return (
    <div className='skilsection py-5'>
        <div className='container'>
        <SectionHead title='Technical Skills' text=''/>
        <div className='row '>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img1} title="HTML5"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img2} title="CSS3"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img3} title="javaScript"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img4} title="Bootstrap"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img5} title="Tailwind CSS"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img6} title="Material UI"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img7} title="React JS"/></div>
            <div className='col-xl-3 col-md-3 col-6 mb-4'><SkilBlock imagename={img8} title="Next JS"/></div>
        </div>
        </div>
    </div>
  )
}

export default SkillSection

