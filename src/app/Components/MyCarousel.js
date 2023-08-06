
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import './Carousel.css'
export default class NextJsCarousel extends Component {
  
    render() {
      const projects = {
        "Python":[
          {
            "name":"GPT Bot",
            "desc":"Generate blog for wordpress sites by titles.",
            "screenshots":["/screenshots/GPT/1.png"]
            
          },
            {
                "name":"Switcher App",
                "tools":"CustomTkinter, pymongo",
                "desc":"Switcher is a tool for Israeli DJs that converts Tracks names from English to Hebrew.",
                "screenshots":["/screenshots/Switcher/1.png", "/screenshots/Switcher/2.png", "/screenshots/Switcher/3.png"]
            },
            {
                "name":"Yelp Nearby jobs responder",
                "tools":"Selenium Webdriver, Impalib, BeautifulSoup, customTkinter",
                "desc":"Automate prompt responses to Yelp Nearby Leads (By default, a lead is lost if it doesn't receive a response within a short period of time).",
                "screenshots":["/screenshots/Yelp/1.png"]
            },
            {
                "name":"Jobs SMS Bot",
                "tools":"Twilio, CSV, Flask",
                "desc":"A Flask server called SMS Leads Bot gathers job leads from a lead supplier and distributes them to staff members at our business. It perfectly matches leads with the best employee based on their special abilities and present availability by utilising sophisticated algorithms. The bot also offers real-time employee progress tracking, making sure that all duties are openly tracked and taken care of. It delivers frequent notifications to staff members to ensure that leads are promptly replied to, maintaining workflow efficiency.It is very important to understand that a Flask server hosts and manages the bot. It is linked with services like Twilio and Google Voice to enable real-time monitoring and easy communication. The bot, however, lacks a graphical user interface (GUI), making it a backend tool that is streamlined and optimized for speed and performance.",
            }
        ],
        "WebApps":[
            {
                "name":"Minerva XR LMS",
                "tools":"React, Node.js, FireBase Firestore, Docker, AWS.",
                "desc":"I was part of the full-stack team that developed the LMS system for MinervaXR, a company that specializes in VR learning for the medical industry.With features like virtual patient simulations and real-time data analytics, our LMS system provides a distinctive and immersive learning environment. To ensure the system's efficient operation and scalability, our team worked on a variety of system-related tasks, including front-end development, back-end programming, and database maintenance.",
                "screenshots":["/screenshots/Minerva/1.png", "/screenshots/Minerva/2.png"],
                "url":"http://3.215.12.125"
            },
            {
                "name":"Battle Cards Game",
                "tools":"React",
                "screenshots":["/screenshots/Battle/1.png"],
                "url":"https://bar856.github.io/BattleGame/"
            },
            {
                "name":"Switcher Site",
                "tools":"React",
                "desc":"Site for selling my Python App.",
                "screenshots":["/screenshots/SwticherSite/1.png"],
                "url":"https://bar856.github.io/SwitcherForDjs/"
            },
            {
                "name":"Naor-Team",
                "tools":"React",
                "desc":"Landing page for professional trainer.",
                "screenshots":["/screenshots/Naor/1.png"],
                "url":"https://naor-team.co.il"
            },
            {
                "name":"Sudoku Project",
                "tools":"HTML, CSS",
                "desc":"Sudoku game project as part of Full-Stack course",
                "screenshots":["/screenshots/Sudoku/1.png"]
            }
        ]
    }  
    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
      return (
        <div className='flex center flex-col'>
          <div className='rounded-lg center w-1/2 px-8 flex flex-col mt-10'>
            <h2 className='center'>Web</h2>
            <Carousel className='carousel' showThumbs={false} dynamicHeight={false}  showStatus={false} infiniteLoop={true} transitionTime={4000} autoPlay={true} interval={5000}>
              {
                projects.WebApps.map((v,i)=>{
                  return (
                    <div key={i} className='flex flex-col item center'>
                        <h3 onClick={()=>{openInNewTab(v?.url)}} className="cursor-pointer mt-5 underline hover hover:bg-neutral-500">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        <Image width={1000} height={500} className='projectsImg rounded-lg' src={v.screenshots[0]} alt={v.name}/>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className='rounded-lg center w-1/2 flex flex-col mt-10'>
            <h2 className=''>Python</h2>
            <Carousel className='carousel' showThumbs={false} dynamicHeight={false}  showStatus={false} infiniteLoop={true} transitionTime={4000} autoPlay={true} interval={5000}>
              {
                projects.Python.map((v,i)=>{
                  return (
                    <div key={i} className='flex flex-col item center'>
                        <h3 className="mt-5 underline">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        {v.screenshots &&<Image width={1000} height={1000} className='projectsImg rounded-lg' src={v.screenshots[0]} alt={v.name}/> }
                    </div>
                  )
                })
              }
            </Carousel>
          </div> 
        </div>
    );
  }
};