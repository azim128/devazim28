import React from 'react'
import SectionHead from './utility/SectionHead'
import SkilBlock from './utility/SkilBlock'
import img from "../assets/img-1.jpg"
import './style/skilblock.css'

const SkillSection = () => {
  return (
    <div className='skilsection py-5'>
        <div className='container'>
        <SectionHead title='Professional Skills' text='Welcome and open yourself to your truest love'/>
        <div className='row '>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="HTML5"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="CSS3"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="javaScript"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="Bootstrap"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="Tailwind CSS"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="Material UI"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="React JS"/></div>
            <div className='col-xl-3 col-3 col-4 col-6 mb-4'><SkilBlock imagename={img} title="Next JS"/></div>
        </div>
        </div>
    </div>
  )
}

export default SkillSection

