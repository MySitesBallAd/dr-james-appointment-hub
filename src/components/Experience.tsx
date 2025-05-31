
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. Thomas James has served at prestigious hospitals across India and internationally, 
            providing exceptional gastroenterology care to thousands of patients.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center bg-blue-600 text-white">
            <CardTitle className="text-2xl">Hospital Affiliations</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {hospitals.map((hospital, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-800 font-medium text-lg">
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
