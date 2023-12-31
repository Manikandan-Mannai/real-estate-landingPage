
import AboutUs from './components/AboutUs'
import Amenities from './components/Amenities'
import FAQ from './components/FAQ'
import Floor from './components/Floor'
import KeyFeatures from './components/KeyFeatures'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import StreetView from './components/StreetView'
import Location from './components/Location'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Amenities />
      <StreetView />
      <KeyFeatures />
      <Floor />
      <Location />
      <CardGrid />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
