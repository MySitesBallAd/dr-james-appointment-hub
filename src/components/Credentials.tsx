
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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With extensive medical education and specialized training in gastroenterology, 
            Dr. Thomas James brings decades of expertise to patient care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-800">
                  {qual.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {qual.institution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-blue-100 px-6 py-3 rounded-full">
            <span className="text-blue-800 font-semibold text-lg">
              25+ Years of Medical Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
