import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CitizenDashboard from './pages/CitizenDashboard';
import AdminDashboard from './pages/AdminDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import SettingsPage from './pages/SettingsPage';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import InstallBanner from './components/InstallBanner';
import './i18n';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <InstallBanner />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<ProtectedRoute allowed={['citizen']}><CitizenDashboard /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute allowed={['admin']}><AdminDashboard /></ProtectedRoute>} />
              <Route path="/worker" element={<ProtectedRoute allowed={['worker']}><WorkerDashboard /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}