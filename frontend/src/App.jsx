import { Box } from '@mui/material'
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from "../theme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {

  const mode = useSelector((state)=> state.theme.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
    </Router> 
  )
}

export default App
