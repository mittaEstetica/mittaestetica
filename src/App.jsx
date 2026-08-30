import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FoundersSection from "./components/FoundersSection/FoundersSection";
import Services from "./components/Services/Services";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Team from "./components/Team/Team";
import AnalyticsTracker from "./components/AnalyticsTracker";

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
              <Header />
              <main>
                <Hero />
                <FoundersSection />
                <Services />
                <ContactSection />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
        <Route path="/equipe" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
