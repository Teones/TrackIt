import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  )
}
