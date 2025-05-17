import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./shared/components/PrivateRoutes"


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
            <Route path="/dashboard/desabafar" element={<h1>Desabafar</h1>} />
            <Route path="/dashboard/analisar-reuniao" element={<h1>Analisar Reunião</h1>} />
            <Route path="/dashboard/modo-treino" element={<h1>Modo Treino</h1>} />
            <Route path="/dashboard/calendario" element={<h1>Calendário</h1>} />
            <Route path="/dashboard/perfil" element={<h1>Meu Perfil</h1>} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App