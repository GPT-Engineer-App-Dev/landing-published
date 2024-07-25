import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Welcome to Acme Inc</h1>
          <p className="text-xl mb-8 text-muted-foreground">We provide innovative solutions for your business needs</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
        </div>
        <div className="lg:w-1/2">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="/hero-image.jpg"
              alt="Acme Inc Workspace"
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;