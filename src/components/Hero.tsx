import { Phone, Snowflake, Wrench, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Snowflake className="h-20 w-20 text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20">
          <Snowflake className="h-16 w-16 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Snowflake className="h-12 w-12 text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Wrench className="h-4 w-4 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">
                Expert Service Since Years
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Professional A/C, Fridge & Washing Machine Services
            </h1>

            <p className="text-primary-foreground/90 text-lg mb-6 max-w-xl">
              Your trusted partner for all home appliance repairs and sales. Fast, reliable, and affordable service by experienced technicians.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <button
                onClick={scrollToBooking}
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors shadow-lg"
              >
                Book a Service
              </button>
              <a
                href="tel:9750106378"
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Experienced Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Affordable Pricing</span>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-2xl transform scale-110"></div>
              <img
                src={logo}
                alt="Malar A/C Mechanic & Service"
                className="relative h-48 w-48 md:h-72 md:w-72 rounded-full object-cover shadow-2xl border-4 border-primary-foreground/30"
              />
            </div>
          </div>
        </div>

        {/* Owner Info */}
        <div className="mt-12 text-center">
          <p className="text-primary-foreground/80 text-sm">
            Owner: <span className="font-semibold text-primary-foreground">B. RAJAKUMAR</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
