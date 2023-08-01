
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
                "desc":"Automate quick respond to Yelp Nearby Leads (By default the lead is gone if it doesn't get reply in few minutes).",
                "screenshots":["/screenshots/Yelp/1.png"]
            },
            {
                "name":"Jobs SMS Bot",
                "tools":"Twilio, CSV, Flask",
                "desc":"SMS Leads Bot is a Flask server that retrieves job leads from a lead supply company and assigns them to employees within our company. It uses advanced algorithms to match leads with the most suitable employee based on skills and availability. The bot also provides real-time tracking of employee progress and sends reminders to ensure leads are responded to in a timely manner.",
            }
        ],
        "WebApps":[
            {
                "name":"Minerva XR LMS",
                "tools":"React, Node.js, FireBase Firestore, Docker, AWS.",
                "desc":"I was part of the full-stack team that developed the LMS system for MinervaXR, a company that specializes in VR learning for the medical industry. Our LMS system offers a unique and immersive learning experience, with features such as virtual patient simulations and real-time data analytics. As a team, we worked on various aspects of the system, including front-end development, back-end programming, and database management, to ensure the smooth functioning and scalability of the system.",
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
                    <div key={i} className='flex flex-col border neutral-200 rounded-lg item'>
                        <h3 onClick={()=>{openInNewTab(v?.url)}} className="mt-5 underline hover hover:bg-neutral-500">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        <Image className='rounded-lg' src={v.screenshots[0]} alt={v.name}/>
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
                    <div key={i} className='flex flex-col border neutral-200 rounded-lg  item'>
                        <h3 className="mt-5 underline">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        {v.screenshots && <Image className='rounded-lg' src={v.screenshots[0]} alt={v.name}/>}
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