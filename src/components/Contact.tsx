
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Mail } from "lucide-react";

const Contact = () => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact & Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Thomas James for expert gastroenterology care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Clinic Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                HITECH Polyclinic<br />
                KP Vallon Road<br />
                Kadavanthra, Kochi<br />
                Kerala, India
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Consulting Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Time:</strong> 10:00 AM - 1:00 PM</p>
                <p><strong>Days:</strong> All days except Sunday</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                Call for Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <Button 
                  onClick={() => handlePhoneCall('9400339999')}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  9400339999
                </Button>
                <Button 
                  onClick={() => handlePhoneCall('9400339998')}
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 text-lg py-6"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  9400339998
                </Button>
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                Click on any number to call directly from your device
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
