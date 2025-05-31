
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Credentials = () => {
  const qualifications = [
    {
      degree: "MBBS",
      institution: "Government Medical College Thrissur, Kerala",
    },
    {
      degree: "MD (General Medicine)",
      institution: "Government Medical College Calicut",
    },
    {
      degree: "DM (Gastroenterology)",
      institution: "IMS/BHU Varanasi (TCMC Reg 18790)",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Professional Qualifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With extensive medical education and specialized training in gastroenterology, 
            Dr. Thomas James brings decades of expertise to patient care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {qualifications.map((qual, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 group-hover:from-blue-500/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
              <CardHeader className="relative pb-2 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-transparent">
                <CardTitle className="text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors">
                  {qual.degree}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-4">
                <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                  {qual.institution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-4 rounded-full shadow-xl">
            <span className="text-white font-bold text-2xl">
              25+ Years of Medical Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
