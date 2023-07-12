import './App.scss'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Store from './pages/Store'

function App() {

  return (
    <>
      <div className='dflex' style={{ width: '100%' }}>
        <SideNav></SideNav>
        <div style={{ flex: '1 1 auto' }}>
          <Header></Header>
          <Store></Store>
        </div>
      </div >
    </>
  )
}

export default App
