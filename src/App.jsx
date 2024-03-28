import Header from "./components/Header";
import Home from "./components/Home";
import WelcomeSection from "./components/WelcomeSection";
import ServiceSection from "./components/ServiceSection";
import Status from "./components/Status";
import TrustSection from "./components/TrustSection";
import Clients from "./components/Clients";
import News from "./components/News";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <WelcomeSection />
      <ServiceSection />
      <Status />
      <TrustSection/>
      <Clients/>
      <News/>
      <Footer/>
    </>
  );
}

export default App;
