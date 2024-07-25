const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground">
            Acme Inc is a leading provider of innovative solutions for businesses of all sizes. 
            With our cutting-edge technology and expert team, we help our clients achieve their goals 
            and stay ahead in today's competitive market.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img src="/placeholder.svg" alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;