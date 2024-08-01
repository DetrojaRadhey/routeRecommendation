import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Footer } from './Components/Footer'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { Info } from './Pages/Info'
import { Services } from './Pages/Services'
import { MyProfile } from './Pages/MyProfile'
import { Career } from './Pages/Career'

function App() {

  return (
    <>
      <div style={{ height: '28rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/info' element={<Info />} />
        <Route path='/services' element={<Services />} />
        <Route path='/career' element={<Career />} />
        <Route path='/profile' element={<MyProfile />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
