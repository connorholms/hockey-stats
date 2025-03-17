import '../global.css'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
    <div>
      <Header />
      <div className="app-container">
        <Outlet />
      </div>
    </div>
    <TanStackRouterDevtools />
    </>
), 
notFoundComponent: () => { 
  <div>404 not found</div>
}
})