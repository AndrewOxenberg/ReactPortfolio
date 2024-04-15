import './App.css'
import React, { useEffect, useState } from 'react';

function App() {

  return (
    <>
      <Navbar />
      <Name />
      <Hub />
    </>
  )
}

function Navbar() {

  const [navbarStyle, setNavbarStyle] = useState({ top: '-16px' });


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY < 400) {
        setNavbarStyle({ top: '-60px' });
      }
      else {
        setNavbarStyle({ top: '-16px' });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  


  return (
    <nav
      className='navbar'
      id='navbar'
    >
      <ul style={navbarStyle}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>

      </ul>
    </nav>
  )
}

function Name() {
  return (
    <section>
      <h1>Andrew Oxenberg</h1>
    </section>
  )
}




function Hub() {

  const [showPanel, setShowPanel] = useState(false);
  const [panelData, setPanelData] = useState({
    title: '',
    content: '',
    src: ''
  });

  function handleClick(inputTitle, inputContent, inputSrc) {

    setPanelData({
      title: inputTitle,
      content: inputContent,
      src: inputSrc
    });

    setShowPanel(true);
  }

  function handleClose() {
    setShowPanel(false);
  }

  function resetClick() {
    setShowPanel(false);
    setPanelData({
      title: '',
      content: '',
      src: ''
    });
  }

  function handleOutsideClick(event) {
    if (!event.target.closest('.panel')) {
      setShowPanel(false);
    }
  }

  function Panel({ title, content, src }) {

    return (

        // <div className='panel' onClick={resetClick}>
          <div className='panel'>

          <div className='panel-image'>
            <img className='image' src={src} alt="" />
          </div>

          <div className='panel-text'>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
    )
  
  }
  

  // useEffect(() => {
  //   window.addEventListener('keydown', handleUserKeyPress);
  
  //   return () => {
  //     window.removeEventListener('keydown', handleUserKeyPress);
  //   };
  // }, []);

  useEffect(() => {


    if (showPanel) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

   
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showPanel]);

  return (

    <section className='section-hub'>

  
      {!showPanel && (
        
        <div className='img-container'>
        <img
          className='image about1'
          src="https://picsum.photos/101"
          alt=""
          title="About Me: Background"
          content="I am a current freshman at the University of Maryland Studying computer Science, born and raised in Laurel, MD.
                  I have always had an interest in programming and building web applications. I enjoy exploring the different fields of computer science and applying my skills to real-world projects.
                  Some of my interests outside of school include, boxing, following sports, playing video games and hanging out with friends."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
        />


        <img 
          className='image about2' 
          src="https://picsum.photos/102" 
          alt=""
          title="About me: Hobbies"
          content="I'm in the bootcamp of the App Development Club at UMD,
                  an exclusive computer science based club dedicated to teaching members real-life skills and apply them in projects with fortune 500 companies.
                  I enjoy building full stack web applications and exploring all the different fields of CS. I am also a member in the UMD boxing club."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image portfolio1' 
          src="https://picsum.photos/100" 
          alt=""
          title="Previous Portfolio Website"
          content="This is a simple portfolio website I built using HTML, CSS, and JavaScript. It was my first major web development project 
                  and helped me learn the basics of front-end web development."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image portfolio2' 
          src="https://picsum.photos/104" 
          alt=""
          title="Blackjack Mastery"
          content="An website I designed to help practice and master perfect blackjack. It teaches you all the basic and advanced blackjack strategies through interactive lessons and quizzes
                  There are achievements and leaderboards to gameify the site and make the experience more enjoyable. Currently a work in progress."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image portfolio3' 
          src="https://picsum.photos/105" 
          alt=""
          title="EZRoomRez"
          content="This is a script that I am developing to automate the process of reserving rooms at the University of Maryland. 
                  It utilizes web scraping to navigate the university's room reservation system and book rooms on behalf of the user. 
                  The goal is to make the room reservation process more efficient and user-friendly. Currently a work in progress."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image experience1' 
          src="https://picsum.photos/106" 
          alt=""
          title="Incoming NIST SURF Intern"
          content="June 2024 - August 2024"
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image experience2' 
          src="https://picsum.photos/107" 
          alt=""
          title="Student Organization President"
          content="I am the current president of the Sigma Phi Epsilon Beta chapter at the University of Maryland. 
                  In this role, I am responsible for leading the executive board, overseeing all chapter operations, and representing the 
                  fraternity to the university administration. I have gained valuable experience in leadership, event planning, and team management through this position."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image experience3' 
          src="https://picsum.photos/108" 
          alt=""
          title="Chipotle Crew Member and Cashier"
          content="August 2021 - August 2022, I worked as a Crew Member and Cashier at Chipotle. 
                  In this role, I was responsible for preparing and serving food to customers, operating the cash register, 
                  and maintaining a clean and organized work environment. I gained valuable customer service and teamwork skills, 
                  as well as experience in a fast-paced work environment."
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          

        <img 
          className='image resume' 
          src="https://picsum.photos/109" 
          alt=""
          title="Resume"
          content="View my resume"
          onClick={(e) => handleClick(e.target.getAttribute('title'), e.target.getAttribute('content'), e.target.src)}
          />
          
      </div>
            
       )} 

      {showPanel && (

        <Panel 
        title={panelData.title} 
        content={panelData.content} 
        src={panelData.src} 
        onClose={handleClose}
        />

      )}

    </section>

  )
}


export default App








// function Experience() {
//   return (
//     <section>
//       <h2>Experience</h2>

//       <div className="experience-item">
//         <h3>Incoming NIST SURF Intern</h3>
//         <h4>National Institute of Standards and Technology (NIST)</h4>
//         <p>June 2024 - August 2024</p>
//       </div>

//       <div className="experience-item">
//         <h3>Student Organization President</h3>
//         <h4>Sigma Phi Epsilon Maryland Beta</h4>
//         <p>March 2024 - Present</p>
//       </div>

//       <div className="experience-item">
//         <h3>Crew Member and Cashier</h3>
//         <h4>Chipotle</h4>
//         <p>August 2022 - August 2023</p>
//       </div>

//     </section>

//   )
// }