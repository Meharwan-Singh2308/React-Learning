import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {

  return (
    <UserContextProvider>    
    <div className='bg-gray-800 text-white w-screen h-screen flex flex-col align-center justify-center p-10'>
    <h2 className='text-3xl font-semibold font-sans text-center  rounded-full p-3 border-black  ' >React JS by Chai Aur Code </h2>
    <div className='flex justify-center flex-col center text-black '>
    <Login />
    <Profile />

    </div>
    </div>
    </UserContextProvider>
  )
}

export default App
