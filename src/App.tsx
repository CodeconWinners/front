import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./shared/components/PrivateRoutes"
import { TrainingModeComponent } from "./shared/components/trainingMode/TrainingModeComponent"
import { AnalyzeMeetingComponent } from "./shared/components/analyzeMeeting/analyzeMeetingComponent"
import { UnburdenComponent } from "./shared/components/unburden/UnburdenComponent"
import { CalendarComponent } from "./shared/components/calendar/CalendarComponent"
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<input />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes
                redirectTo="/login"
              />
            } >
            <Route path="/dashboard/desabafar" element={<UnburdenComponent />} />
            <Route path="/dashboard/analisar-reuniao" element={<AnalyzeMeetingComponent />} />
            <Route path="/dashboard/modo-treino" element={<TrainingModeComponent />} />
            <Route path="/dashboard/calendario" element={<CalendarComponent/>} />
            <Route path="/dashboard/perfil" element={<h1>Meu Perfil</h1>} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App