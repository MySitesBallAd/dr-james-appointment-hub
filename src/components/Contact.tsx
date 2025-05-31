
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Clock } from "lucide-react";

const Contact = () => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Contact & Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule your consultation with Dr. Thomas James for expert gastroenterology care.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6">
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="w-7 h-7 mr-3" />
                Clinic Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-2">
                <a
                  href="https://g.co/kgs/LoZ8EmS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-xl font-semibold hover:text-blue-300"
                >
                <p className="text-gray-800 text-xl font-semibold">HITECH Polyclinic</p>
                </a>
                <p className="text-gray-700 text-lg">KP Vallon Road</p>
                <p className="text-gray-700 text-lg">Kadavanthra, Kochi</p>
                <p className="text-gray-700 text-lg">Kerala, India</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6">
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="w-7 h-7 mr-3" />
                Consulting Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-green-600" />
                  <div>
                    <p className="text-xl font-semibold text-gray-800">10:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">All days except Sunday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-8">
              <CardTitle className="flex items-center justify-center text-3xl">
                <Phone className="w-8 h-8 mr-3" />
                Call for Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="space-y-6">
                <Button 
                  onClick={() => handlePhoneCall('+91 9400339999')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  +91 9400339999
                </Button>
                <Button 
                  onClick={() => handlePhoneCall('+91 9400339998')}
                  variant="outline"
                  className="w-full border-2 border-green-600 text-green-700 hover:bg-green-50 text-xl py-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  +91 9400339998
                </Button>
              </div>
              <div className="mt-8 p-4 bg-green-50 rounded-xl">
                <p className="text-green-800 font-medium">
                  📞 Click on any number to call directly from your device
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
