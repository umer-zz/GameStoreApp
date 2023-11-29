import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { Outlet } from 'react-router-dom'
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  }
)
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='dflex w100'>
        <SideNav></SideNav>
        <div style={{ flex: '1 1 auto' }}>
          <Header></Header>
          <div style={{ padding: '1rem 4rem' }}>
            <Outlet></Outlet>
          </div>
        </div>
      </div >
    </QueryClientProvider>
  )
}

export default App
