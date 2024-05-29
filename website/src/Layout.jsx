import { Outlet } from 'react-router-dom'
import logo from "./assets/logo.svg"
import { useLocation } from 'react-router-dom'
import circle from "./assets/circle.svg"
import { Link } from 'react-router-dom'
function App() {
  const sections = ["about","designs","blog","guides","contact"]
  const location = useLocation();

  return (
    <div className="w-screen h-screen items-center justify-center">
      <nav className='w-full h-[10%] justify-center items-center flex'>
        <div className='items-center justify-center flex w-[10%]'>
        <Link className='color-black' to={"/"}>
          <img src={logo}/>
          </Link>
        </div>
        <div className=' items-center justify-center flex w-[80%]'>
          {sections.map((label, i) => 
          <Link className='color-black' key={i}  to={"/"+label}>
            <button className='bg-transparent relative py-2 px-4'>{label}{location.pathname.slice(1) == label && <img className='absolute top-2 right-0' src={circle}/>}</button>
          </Link>
          )}
        </div>
        <div className=' items-center justify-center flex w-[10%]'>
          menu
        </div>
      </nav>
      <div className="w-screen h-[90%] items-center justify-center">
      <Outlet/>
      </div>
    </div>
  )
}

export default App
