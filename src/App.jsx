import { useState } from 'react'
import ValLogo from './assets/ValLogo.jpg'
import Maps from './assets/Maps.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "main-container">
      <h1> href = "https://www.linkedin.com/in/jay-olivas-cox-031b66209/" className = 'outlinedTitle'>Jay Olivas Cox</h1>
      <div className = 'row'>

        <a href="https://github.com/JayOlivasCox/ValorantCharactersCatalog.github.io" target="_blank">
          <img src={ValLogo} className="logo" alt="Valorant logo" />
            <p className='picDesc'>Valorant Catalog</p>
        </a>

        <a href="https://github.com/JayOlivasCox/Map-Implementation" target="_blank">
          <img src={Maps} className="logo" alt="Maps image" />
          <p className='picDesc'>Map Implementation</p>
        </a>

      </div>
      <p className="bottomMsg">
        Click on the Images to see each project
      </p>
    </div>
  )
}

export default App
