
import { Component, useState } from 'react';




export default function Nav() {
  const [hover1, setHover1]=useState (false)
  const [hover2, setHover2]=useState (false)
  const [hover3, setHover3]=useState (false)
  const [hover4, setHover4]=useState (false)
  const [hover5, setHover5]=useState (false)
  const [hover6, setHover6]=useState (false)
  const [hover7, setHover7]=useState (false)
  const [hover8, setHover8]=useState (false)
  const [hover9, setHover9]=useState (false)
  const [hover10, setHover10]=useState (false)
  const [hover11, setHover11]=useState (false)
  const [hover12, setHover12]=useState (false)
  const [hover13, setHover13]=useState (false)
  const [hover14, setHover14]=useState (false)
  const [hover15, setHover15]=useState (false)
  const [hover16, setHover16]=useState (false)
  const [hover17, setHover17]=useState (false)
  const [hover18, setHover18]=useState (false)



  const handleMouseOver1=()=>{
    setHover1(true);
  }
  const handleMouseOut1 = ()=>{
    setHover1(false)
  }
  const handleMouseOver2=()=>{
    setHover2(true);
  }
  const handleMouseOut2 = ()=>{
    setHover2(false)
  }
  const handleMouseOver3=()=>{
    setHover3(true);
  }
  const handleMouseOut3 = ()=>{
    setHover3(false)
  }
  const handleMouseOver4=()=>{
    setHover4(true);
  }
  const handleMouseOut4 = ()=>{
    setHover4(false)
  }
  const handleMouseOver5=()=>{
    setHover5(true);
  }
  const handleMouseOut5 = ()=>{
    setHover5(false)
  }
  const handleMouseOver6=()=>{
    setHover6(true);
  }
  const handleMouseOut6 = ()=>{
    setHover6(false)
  }
  const handleMouseOver7=()=>{
    setHover7(true);
  }
  const handleMouseOut7 = ()=>{
    setHover7(false)
  }
  const handleMouseOver8=()=>{
    setHover8(true);
  }
  const handleMouseOut8 = ()=>{
    setHover8(false)
  }
  const handleMouseOver9=()=>{
      setHover9(true);
    }
  const handleMouseOut9 = ()=>{
      setHover9(false)}
  const handleMouseOver10=()=>{
        setHover10(true);
      }
  const handleMouseOut10 = ()=>{
  setHover10(false)}
  const handleMouseOver11=()=>{
    setHover11(true);
  }
  const handleMouseOut11 = ()=>{
    setHover11(false)}
    const handleMouseOver12=()=>{
      setHover12(true);
    }
    const handleMouseOut12 = ()=>{
      setHover12(false)}
  const handleMouseOver13=()=>{
    setHover13(true);
  }
  const handleMouseOut13 = ()=>{
    setHover13(false)}
  const handleMouseOver14=()=>{
    setHover14(true);
  }
  const handleMouseOut14 = ()=>{
    setHover14(false)}
  const handleMouseOver15=()=>{
    setHover15(true);
  }
  const handleMouseOut15 = ()=>{
  setHover15(false)}
  const handleMouseOver16=()=>{
    setHover16(true);
  }
  const handleMouseOut16 = ()=>{
    setHover16(false)}
  const handleMouseOver17=()=>{
      setHover17(true);
    }
  const handleMouseOut17= ()=>{
      setHover17(false)}
      const handleMouseOver18=()=>{
        setHover18(true);
      }
    const handleMouseOut18= ()=>{
        setHover18(false)}
  return (
    <>
<div id='page-container'>
<div id="content-wrapper">
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <div id="about">
           <div className="container4">
            <ul className="nav nav-pills mx-auto mb-5">
              <li className="nav-item">
                <a className="nav-link" href="/#portfolio">Portfolio</a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="/#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#resume">Resume</a>
              </li>
          </ul>
         
          <div className="about-img">
          <img className='about-img-tag' src={require('../imgs/DSC_0319[2753].JPG')} alt='...'/>
          </div>
          <div className="about-info">
          <h5 className='display-5 mt-3  name-header'>Sydney Doemel</h5>
          <ul className='contact-info-section'>
            <li><p className='subhead me-4'>Software Engineer</p></li>
            <li className='me-4'><a href='https://www.linkedin.com/in/sydney-doemel-1a4841227/'><h5><i className="fa-brands fa-linkedin"></i></h5></a></li>
            <li><a href='https://www.instagram/syd.doemel'><h5><i className="fa-brands fa-instagram"></i></h5></a></li>
            
          </ul>
          <ul className='contact' id='contact'>
            <li><b><i className="fa-solid fa-phone"></i></b> (770)-905-5910</li><br></br>
            <li><b><i className="fa-solid fa-envelope"></i></b> doemelsydney@gmail.com</li><br></br>
            <li><b><i className="fa-solid fa-location-pin"></i></b> Atlanta, GA</li>
          </ul>
          
         
          </div>
          </div>
          <div className='text-center'>
          <a className="btn portfolio-btn" href="#portfolio">Portfolio<i className="ms-2 fa-solid fa-angle-down"></i></a>
          </div>
      </div>

      <div id="portfolio">
      <div className="container5 mx-5">
      <div className="portfolio-header my-5">
      <h6 className='display-5 mt-3 '>Portfolio</h6>
      </div>
      <div className="pianobox-description">
      <div className='d-flex flex-row align-items-baseline flex-wrap'><h4 className='me-4'>PianoBox</h4> <p className='me-2 github' >Github: </p><a href='https://github.com/SydneyDoemel/pianobox-flask.git' className='me-3 fl-re' >Flask</a><a className='fl-re' href='https://github.com/SydneyDoemel/pianobox-react.git'>React</a></div>
        <p>Create interactive music in the browser with PianoBox, a polyphonic synthesizer keyboard with 8 different customizable audio effects. Record musical ideas and save them to song folders in your profile without the need for a digital audio workspace (DAW). </p>
        <p>Stack (hover for more info):</p>
        <div className='stacks d-flex flex-row flex-wrap'>
        <div onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} className='stack-item me-3 mb-3'>JSX</div>
        <div  onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} className='stack-item me-3 mb-3'>css3</div>
        <div onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} className='stack-item me-3 mb-3'>Flask</div>
          <div onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} className='stack-item me-3 mb-3'>React JS</div>
          <div onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5} className='stack-item me-3 mb-3'>PostgreSQL</div>
          <div onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6} className='stack-item me-3 mb-3'>Firebase</div>
          <div onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut7} className='stack-item me-3 mb-3'>Tone.js</div>
        </div>
        {hover1 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Structure component rendering</p></div>)}
        {hover2 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Styling</p></div>)}
        {hover3 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Routing, Routing to PostgreSQL, Recieve and Send JSON data</p></div>)}
        {hover4 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, User interface <br></br>Back-End, Send and recieve data from Firebase Storage</p></div>)}
        {hover5 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Used in Flask to store user data and audio folder filing system, ORM used: SQLAlchemy</p></div>)}
        {hover6 && ( <div className='stack-description'><p className='sd sd-1'>Back-End?, Used for storage of audio blobs</p></div>)}
        {hover7 && ( <div className='stack-description'><p className='sd sd-1'>Back-End?, Used for creation of synthesizer and audio effects</p></div>)}
       
      </div>
      <div className="pianobox-video ">
      <iframe src="https://www.youtube.com/embed/DeEwQOr1zkQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="dispatched-description">
      <div className='d-flex flex-row align-items-baseline flex-wrap'><h4 className='me-4'>Dispatched</h4> <p className='me-2 github' >Github:</p><a href='https://github.com/SydneyDoemel/news-flask.git' className='me-3 fl-re' >Flask</a><a className='fl-re' href='https://github.com/SydneyDoemel/news-react.git'>React</a></div>
        <p>With Dispatched, you will stay up to date on top headlines, business news, world news, and more. Filter the news you see by category: Business, Entertainment, Health, Science, and Technology, or customize your experience by adding categories specific to your needs. </p>
        <p>Stack (hover for more info):</p>
        <div className='stacks d-flex flex-row flex-wrap'>
        <div  onMouseOver={handleMouseOver8} onMouseOut={handleMouseOut8} className='stack-item si-1 me-3 mb-3'>JSX</div>
        <div onMouseOver={handleMouseOver9} onMouseOut={handleMouseOut9} className='stack-item si-2 me-3 mb-3'>css3</div>
          <div onMouseOver={handleMouseOver10} onMouseOut={handleMouseOut10} className='stack-item si-3 me-3 mb-3'>Flask</div>
          <div onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11} className='stack-item si-4 me-3 mb-3'>React JS</div>
          <div onMouseOver={handleMouseOver12} onMouseOut={handleMouseOut12} className='stack-item si-5 me-3 mb-3'>PostgreSQL</div>
          <div onMouseOver={handleMouseOver13} onMouseOut={handleMouseOut13} className='stack-item si-6  me-3 mb-3'>News API</div>
        </div>
        {hover8 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Structure component rendering</p></div>)}
        {hover9 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Styling</p></div>)}
        {hover10 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Routing, Routing to PostgreSQL, Recieve and Send JSON data</p></div>)}
        {hover11 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, User interface </p></div>)}
        {hover12 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Used in Flask to store user data and user's news preferences, ORM used: SQLAlchemy</p></div>)}
        {hover13 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Retrieve news data</p></div>)}
       
      </div>
      <div className="dispatched-video ">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M_O1wxnhDDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    
      <div className="socialapp-description ">
        <div className='d-flex flex-row align-items-baseline flex-wrap'><h4 className='me-4'>SoundOff</h4> <p className='me-2 github' >Github:</p><a href='https://github.com/SydneyDoemel/social-media-flask.git' className='me-3 fl-re' >Flask</a><a className='fl-re' href='https://github.com/SydneyDoemel/social-media-react.git'>React</a></div>
        
        <p>SoundOff is a social microblogging app where users can create photo or message posts, follow other users, and discover new content. </p>
        <p>Stack (hover for more info):</p>
        <div className='stacks d-flex flex-row flex-wrap'>
        <div onMouseOver={handleMouseOver14} onMouseOut={handleMouseOut14} className='stack-item me-3 mb-3'>JSX</div>
        <div onMouseOver={handleMouseOver15} onMouseOut={handleMouseOut15} className='stack-item me-3 mb-3'>css3</div>
          <div onMouseOver={handleMouseOver16} onMouseOut={handleMouseOut16} className='stack-item me-3 mb-3'>Flask</div>
          <div onMouseOver={handleMouseOver17} onMouseOut={handleMouseOut17} className='stack-item me-3 mb-3'>React JS</div>
          <div onMouseOver={handleMouseOver18} onMouseOut={handleMouseOut18} className='stack-item me-3 mb-3'>PostgreSQL</div>
        </div>
        {hover14 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Structure component rendering</p></div>)}
        {hover15 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, Styling</p></div>)}
        {hover16 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Routing, Routing to PostgreSQL, Recieve and Send JSON data</p></div>)}
        {hover17 && ( <div className='stack-description'><p className='sd sd-1'>Front-End, User interface </p></div>)}
        {hover18 && ( <div className='stack-description'><p className='sd sd-1'>Back-End, Used in Flask to store user data, ORM used: SQLAlchemy</p></div>)}
        
       
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/W5aWunF0gkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='resume' id='resume'><h3 className='mt-5 '><a href='https://docs.google.com/document/d/1EaLQLKXT1sIyZYJKNwLOTLVlsX2vFOSo/edit?usp=sharing&ouid=116124271828497492486&rtpof=true&sd=true'>Go to resume</a></h3></div>
      </div>
     
      <div className='footer d-flex flex-row align-items-center justify-content-center'>
        <p className='footer-text'>© 2022 Sydney Doemel</p>
      
      </div>
      </div>
      </div>
     
    </div>
    
  </>
  )
}
