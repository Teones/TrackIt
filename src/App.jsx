import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from './pages/SignInPage';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
      </Routes>
    </Router>
    </>
  )
}
