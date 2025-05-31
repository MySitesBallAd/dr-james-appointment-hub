
import { Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Dr. Thomas James
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">
            Consultant Gastroenterologist
          </p>
          <div className="flex items-center justify-center text-blue-100 mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>HITECH Polyclinic KP Vallon Rd, Kadavanthra, Kochi, Kerala</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-200" />
            <h3 className="text-lg font-semibold mb-2">Consulting Hours</h3>
            <p className="text-blue-100">10:00 AM - 1:00 PM</p>
            <p className="text-blue-100">All days except Sunday</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Phone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-blue-100">9400339999</p>
            <p className="text-blue-100">9400339998</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
        >
          Book Appointment
        </Button>
      </div>
    </section>
  );
};

export default Hero;
