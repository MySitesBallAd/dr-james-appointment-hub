
import { Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Doctor info */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Dr. Thomas James
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">
                Consultant Gastroenterologist
              </p>
              <div className="flex items-center justify-center lg:justify-start text-blue-100 mb-8">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <a
                  href="https://g.co/kgs/LoZ8EmS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline hover:text-blue-300"
                >
                  HITECH Polyclinic, KP Vallon Rd, Kadavanthra, Kochi
                </a>
              </div>
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-2 rounded-full">
                <span className="text-white font-semibold text-lg">25+ Years Experience</span>
              </div>
            </div>
            
            <a href="tel:+919400339999">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Book Appointment
              </Button>
            </a>
          </div>
          
          {/* Right side - Doctor photo and info cards */}
          <div className="flex flex-col items-center space-y-8">
            {/* Doctor Photo */}
            <div className="relative">
              <div className="w-100 h-100 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/lovable-uploads/ff73bdd9-4e0a-4253-b879-580cfd11066b.png" 
                  alt="Dr. Thomas James - Consultant Gastroenterologist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-white/10"></div>
              <div className="absolute -inset-8 rounded-full border border-white/5"></div>
            </div>
            
            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2 text-center">Hours</h3>
                <p className="text-blue-100 text-center text-sm">10:00 AM - 1:00 PM</p>
                <p className="text-blue-100 text-center text-sm">Except Sunday</p>
              </div>
              
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                <Phone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2 text-center">Contact</h3>
                <p className="text-blue-100 text-center text-sm">
                  <a href="tel:+919400339999" className="hover:underline hover:text-blue-300">
                    +91 9400339999
                  </a>
                </p>
                <p className="text-blue-100 text-center text-sm">
                  <a href="tel:+919400339998" className="hover:underline hover:text-blue-300">
                    +91 9400339998
                  </a>                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
