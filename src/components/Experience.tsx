
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const hospitals = [
    "PVS Hospital",
    "Lakeshore Hospital", 
    "Lourdes Hospital",
    "Lisie Hospital",
    "Al Zaura Hospital",
    "Aster Hospital Sharjah"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Thomas James has served at prestigious hospitals across India and internationally, 
            providing exceptional gastroenterology care to thousands of patients.
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-8">
            <CardTitle className="text-3xl font-bold">Hospital Affiliations</CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {hospitals.map((hospital, index) => (
                <div 
                  key={index}
                  className="group flex items-center p-6 bg-gradient-to-r from-white to-blue-50/50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-blue-50 hover:to-blue-100/50"
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                  <span className="text-gray-800 font-semibold text-xl group-hover:text-blue-800 transition-colors">
                    {hospital}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
