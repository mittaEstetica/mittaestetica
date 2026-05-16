import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Team from "./components/Team/Team";
import AnalyticsTracker from "./components/AnalyticsTracker";
import MentoriaLogin from "./components/Mentoria/MentoriaLogin";
import MentoriaCourse from "./components/Mentoria/MentoriaCourse";
import MentoriaAdmin from "./components/Mentoria/MentoriaAdmin";

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-brand-background">
            <Header />
            <Hero />
            <Services />
            {/* <Section /> */}
            <Footer />
          </div>
        } />
        <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/mentoria/login" element={<MentoriaLogin />} />
        <Route path="/mentoria/admin" element={<MentoriaAdmin />} />
        <Route path="/mentoria" element={<MentoriaCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
