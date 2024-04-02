import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <h1>Andrew Oxenberg</h1>
      
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
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>

      </ul>
    </nav>
  )
}

export default App
