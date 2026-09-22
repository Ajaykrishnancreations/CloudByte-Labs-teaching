import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  )
}
