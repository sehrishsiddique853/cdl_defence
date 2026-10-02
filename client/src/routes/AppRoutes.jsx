import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout.jsx'

function HomePage() {
  return <main className="app-content"><h1>CDL Defense</h1><p>Application home</p></main>
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
