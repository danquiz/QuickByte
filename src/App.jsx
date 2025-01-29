import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
// import Services from './components/Services'
import Industries from './components/Industries'
// import WebinarBanner from './components/WebinarBanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import PersonalisedSection from './components/PersonalisedSection'
import AnimatedCards from './components/AnimatedCards'
import ContactPage from './components/ContactPage'
import PlatformServicesCarousel from './components/Services'
// import Cards from './components/Cards'
import Cards2 from './components/Cards2'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CareersPage from './components/CareersPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0062ff',
    },
    secondary: {
      main: '#da00ff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
                <Navbar />
                <Hero />
                <Welcome />
                <PlatformServicesCarousel />
                {/* <Services /> */}
                <Industries />
                <AnimatedCards />
                <Cards2 />
                <ContactPage />
                {/* <WebinarBanner /> */}
                <Footer />
            </>
          } />
          <Route path='/careers' element={
            <>
            <Navbar />
            <CareersPage />
            <Footer />
            </>
            } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

