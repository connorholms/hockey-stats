import '../global.css'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/header/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="app-container">
        <div className="app-content">
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