import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Contact from "../components/Home/Contact";

function Home({setPage}) {
  return (
    <>
      <Hero setPage={setPage}/>
      <FeaturedProjects setPage={setPage}/>
      <Contact/>
    </>
  );
}

export default Home;