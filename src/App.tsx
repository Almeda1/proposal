import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { 
  LandingPage, 
  ProposalPage 
} from './pages';

function AppRoutes() {
  return (
    <Routes>
      {/* 1. Landing Page (The Start) */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. Proposal Page (The Question) */}
      <Route path="/proposal" element={<ProposalPage />} />

      {/* 3. Safety Net: If any other URL is typed, go back to Landing Page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;