
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Hero />
      <Credentials />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
