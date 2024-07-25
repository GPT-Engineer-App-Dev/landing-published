import { Lightbulb, Zap, BarChart } from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovative Solutions",
    description: "We provide cutting-edge solutions tailored to your business needs."
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Fast Implementation",
    description: "Our team ensures quick and efficient implementation of our services."
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Data Analytics",
    description: "Gain valuable insights with our advanced data analytics tools."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;