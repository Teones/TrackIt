import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HabitsPage from './pages/HabitsPage';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/habits' element={<HabitsPage />} />
      </Routes>
    </Router>
    </>
  )
}
