import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './components/discover';
import Login from './components/Login';
import Signup from './components/signup';
import Dashboard from "./components/dashboard";
import News from './components/news';
import PrivateRoute from "./PrivateRoute";
import Planner from './components/features/planner';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/userprofile';
import PlanHistory from './assets/plan_history';
import Documentation from './components/documentation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SIPCalculator from './components/features/calculators/SIPcalculator';
import LumpsumCalculator from './components/features/calculators/lumpsum';
import StepUpCalculator from './components/features/calculators/stepup';
import RetirementPlanning from './components/features/calculators/retirement';
import CalculatorDash from './components/features/calcidash';
import ScrollToTop from './assets/scrolltotop';
import Elibrary from './components/features/elib';
import AboutUs from './assets/aboutus';
import Features from './assets/features';
import PrivacyPolicy from './assets/privacypolicy';
import ContactUs from './assets/contact';
import Moreinfo from './assets/getmoreinfo';




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />        
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/news" element={<News />} />
        <Route path="/planner" element={<Planner />} /> 
        <Route path="/user" element={<UserProfile />} /> 
        <Route path="/planhistory" element={<PlanHistory />} /> 
        <Route path="/documentation" element={<Documentation />} /> 
        <Route path="/calcidash" element={<CalculatorDash />} /> 
        <Route path="/SIPcalc" element={<SIPCalculator />} /> 
        <Route path="/lumpsum" element={<LumpsumCalculator />} /> 
        <Route path="/stepup" element={<StepUpCalculator />} /> 
        <Route path="/retirement" element={<RetirementPlanning />} /> 
        <Route path="/elib" element={<Elibrary />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/features" element={<Features />} /> 
        <Route path="/privacy" element={<PrivacyPolicy />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/moreinfo" element={<Moreinfo />} /> 

      </Routes>
    </Router>
  );
}

export default App;
