import Hero from "./components/Hero/Hero";
import School from "./components/School/School";
import Reference from "./components/reference/Reference";
import Skillset from "./components/skillset/Skillset";
import Welcome from "./components/welcome/Welcome";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <main className="w-full h-full min-h-screen relative">
      <Hero />
      <Welcome />
      <div className="w-full h-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="-mb-[1px]"
        >
          <path
            fill="#000"
            fill-opacity="0.6"
            d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,202.7C672,181,768,171,864,192C960,213,1056,267,1152,245.3C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Reference />
      <div className="w-full h-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-[1px]">
          <path
            fill="#000"
            fill-opacity="0.6"
            d="M0,0L48,10.7C96,21,192,43,288,80C384,117,480,171,576,165.3C672,160,768,96,864,101.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Skillset />
      <School />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
