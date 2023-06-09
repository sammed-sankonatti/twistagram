import { Box } from '@mui/material'
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from "../theme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import TopBar from './widgets/TopBar';
import Footer from './widgets/Footer';


function App() {

  const mode = useSelector((state)=> state.theme.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router> 
    </div>
  )
}

export default App
