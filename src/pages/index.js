import React,{useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import Achievements from '../components/achievements';
import Experience from '../components/Experience';

const Home = () => {
    
    const [isOpen,setIsOpen] =useState(false)

    const toggle =() =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <InfoSection {...homeObjTwo}/>
        <Footer/>
        </>
    )
}  
export default Home;
