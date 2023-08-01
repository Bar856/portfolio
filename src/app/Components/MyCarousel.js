
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
                "name":"Switcher App For Djs",
                "tools":"CustomTkinter, pymongo",
                "desc":"Switcher is a tool for Israeli DJs that allows them to play songs with Hebrew file names on Pioneer all-in-one controllers, which do not support Hebrew. The tool converts file names to English and is built with customTkinter GUI and MongoDB. Users can access the tool by paying a monthly subscription.",
                "screenshots":["/screenshots/Switcher/1.png", "/screenshots/Switcher/2.png", "/screenshots/Switcher/3.png"]
            },
            {
                "name":"Yelp Nearby jobs responder",
                "tools":"Selenium Webdriver, Impalib, BeautifulSoup, customTkinter",
                "desc":"The Selenium Chrome Webdriver script automates the process of replying to nearby jobs leads that expires after short time. Specifically, it opens Chrome, logs in to the Yelp account, and listens for new emails. If a new nearby job email is detected, the script automatically presses buttons and sends a custom message to the customer.",
                "screenshots":["/screenshots/Yelp/1.png"]
            },
            {
                "name":"Jobs SMS Bot",
                "tools":"Twilio, CSV, Flask",
                "desc":"SMS Leads Bot is a server that retrieves job leads from a lead supply company and assigns them to employees within our company. It uses advanced algorithms to match leads with the most suitable employee based on skills and availability. The bot also provides real-time tracking of employee progress and sends reminders to ensure leads are responded to in a timely manner. This tool is specifically designed for Service industry in USA and has been used for Locksmith industry.",
                "screenshots":["/screenshots/nothingPy.png"]
            }
        ],
        "WebApps":[
            {
                "name":"Minerva XR LMS",
                "tools":"React, Node.js, FireBase Firestore, Docker, AWS.",
                "desc":"I was part of the full-stack team that developed the LMS system for MinervaXR, a company that specializes in VR learning for the medical industry. Our LMS system offers a unique and immersive learning experience, with features such as virtual patient simulations and real-time data analytics. As a team, we worked on various aspects of the system, including front-end development, back-end programming, and database management, to ensure the smooth functioning and scalability of the system. We are proud to have played a role in equipping healthcare professionals with the necessary skills to handle complex cases and improve retention of medical knowledge.",
                "screenshots":["/screenshots/Minerva/1.png", "/screenshots/Minerva/2.png"],
                "url":"http://3.215.12.125"
            },
            {
                "name":"Battle Cards Game",
                "tools":"React",
                "desc":"As part of Full-Stack course i created Battle cards game.",
                "screenshots":["/screenshots/Battle/1.png"],
                "url":"https://bar856.github.io/BattleGame/"
            },
            {
                "name":"Switcher Site",
                "tools":"React",
                "desc":"Site for selling my Python program for Djs.",
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
        <main className='flex center flex-col'>
          <div className='rounded-lg center w-1/2 px-8 flex flex-col mt-10'>
            <h2 className='center'>Web</h2>
            <Carousel className='carousel' showThumbs={false} dynamicHeight={false}  showStatus={false} infiniteLoop={true} transitionTime={4000} autoPlay={true} interval={5000}>
              {
                projects.WebApps.map((v,i)=>{
                  return (
                    <div key={i} className='flex flex-col border neutral-200 rounded-lg p-4 ml-10 mr-10 item'>
                        <h3 className="mt-5 underline hover hover:bg-neutral-500">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        <img className='rounded-lg' src={v.screenshots[0]} alt={v.name}/>
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
                    <div key={i} className='flex flex-col border neutral-200 rounded-lg p-4 ml-10 mr-10 item'>
                        <h3 className="mt-5 underline hover hover:bg-neutral-500">{v.name}</h3>
                        <h4>{v.desc}</h4>
                        <img className='rounded-lg' src={v.screenshots[0]} alt={v.name}/>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </main>
    );
  }
};