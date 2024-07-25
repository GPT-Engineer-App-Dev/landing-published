import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="/placeholder.svg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Acme Inc</h1>
        <p className="text-xl mb-8">We provide innovative solutions for your business needs</p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
      </div>
    </section>
  );
};

export default HeroSection;