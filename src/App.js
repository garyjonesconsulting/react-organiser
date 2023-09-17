import React from "react"
import { Routes, Route } from "react-router-dom"
import { ColourModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
<<<<<<< HEAD
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
// import Bar from "./scenes/bar"
import Form from "./scenes/form"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
import Calendar from "./scenes/calendar"
=======
// import Invoices from "./scenes/invoices"
// import Contacts from "./scenes/contacts"
// import Bar from "./scenes/bar"
// import Form from "./scenes/form"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
// import Calendar from "./scenes/calendar"
>>>>>>> a9d452617de102ee3a7399f4bf2b4f5c40a28adb

function App() {
  const [theme, colourMode] = useMode()
  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
<<<<<<< HEAD
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              <Route path="/form" element={<Form />} />
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<Calendar />} />
=======
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
>>>>>>> a9d452617de102ee3a7399f4bf2b4f5c40a28adb
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  )
}

export default App
