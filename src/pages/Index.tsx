import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GeometricBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
