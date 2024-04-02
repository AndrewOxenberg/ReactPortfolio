import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Name />
      <About />
      <Portfolio />
      <Experience />
    </>
  )
}

function Navbar() {
  return (
    <nav>
      <ul>
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

function About() {
  return (
    <section className="about">

    <div className="pictures"></div>
    <div className="content">
    <h2>About</h2>
      <h4>I am a current freshman and the University of Maryland Studying computer Science.
        I enjoy building full stack web applications and exploring all the different fields of CS.
        Some of my interests outside of school include, boxing, following sports, playing video games and hanging out with friends.
      </h4>

      <h4>I am the current President of the Sigma Phi Epsilon Maryland Beta chapter. I am in the bootcamp of the App Development Club at UMD, 
        an exclusive computer science based club dedicated to teaching members real-life skills and apply them in projects with fortune 500 companies.</h4>
    </div>

     
    </section>
  )
}

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>

      <div className="portfolio-item">
        <h3>Blackjack Mastery</h3>
        <h4>A Blackjack website designed to teach all the components to become a winning Blackjack player.
            Contains information and practice on basic strategy, card counting, and advanced techniques. 
            The process is gamified with achievements and a leaderboard to keep users engaged as they progress through skill levels.
        </h4>
        <h4>Tools used: HTML, CSS, JS</h4>
      </div>

      <div className="portfolio-item">
        <h3>Personal Website</h3>
        <h4>A simple personal website to practice project based Web Development.</h4>
      </div>

      <div className="portfolio-item">
        <h3>EZRoomRez (WIP)</h3>
        <h4>A python script that I am collaborating on with one other person to automatically reserve study rooms for large blocks of time a week in advance.</h4>
      </div>

    </section>
  )
}

function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Incoming NIST SURF Intern</h3>
        <h4>National Institute of Standards and Technology (NIST)</h4>
        <p>June 2024 - August 2024</p>
      </div>

      <div className="experience-item">
        <h3>Student Organization President</h3>
        <h4>Sigma Phi Epsilon Maryland Beta</h4>
        <p>March 2024 - Present</p>
      </div>

      <div className="experience-item">
        <h3>Crew Member and Cashier</h3>
        <h4>Chipotle</h4>
        <p>August 2022 - August 2023</p>
      </div>

      </section>
  )
}

export default App
