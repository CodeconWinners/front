import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./shared/components/PrivateRoutes"
import { TrainingModeComponent } from "./shared/components/trainingMode/TrainingModeComponent"
import { UnburdenComponent } from "./shared/components/unburden/UnburdenComponent"
import { CalendarComponent } from "./shared/components/calendar/CalendarComponent"
import { LoginComponent } from "./features/login/LoginComponent"
import { ProfileComponent } from "./features/profile/ProfileComponent"
function App() {

  return (
    <BrowserRouter>

        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes
                redirectTo="/login"
              />
            } >
            <Route path="/dashboard/desabafar" element={<UnburdenComponent />} />
            <Route path="/dashboard/modo-treino" element={<TrainingModeComponent />} />
            <Route path="/dashboard/calendario" element={<CalendarComponent/>} />
            <Route path="/dashboard/perfil" element={<ProfileComponent/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App