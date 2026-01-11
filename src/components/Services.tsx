import { Snowflake, Refrigerator, WashingMachine, Wrench, ShoppingCart, Settings } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "A/C Service",
    description: "Complete air conditioner servicing, gas refilling, cleaning, and maintenance for all brands and models.",
    features: ["Regular Maintenance", "Gas Refilling", "Filter Cleaning", "Cooling Optimization"],
  },
  {
    icon: Snowflake,
    title: "A/C Sales",
    description: "Wide range of split and window air conditioners from top brands at competitive prices with installation.",
    features: ["Split AC", "Window AC", "Free Installation", "Warranty Support"],
  },
  {
    icon: Refrigerator,
    title: "Fridge Service",
    description: "Expert refrigerator repair and maintenance services. Fix cooling issues, compressor problems, and more.",
    features: ["Cooling Issues", "Compressor Repair", "Thermostat Fix", "Door Seal Replacement"],
  },
  {
    icon: Refrigerator,
    title: "Fridge Sales",
    description: "Quality refrigerators from leading brands. Single door, double door, and side-by-side models available.",
    features: ["Single Door", "Double Door", "Side by Side", "Home Delivery"],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Service",
    description: "Professional washing machine repair for both front-load and top-load machines of all brands.",
    features: ["Drum Issues", "Motor Repair", "Water Leakage", "Spin Problems"],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Sales",
    description: "Top-loading and front-loading washing machines from trusted brands with installation services.",
    features: ["Top Load", "Front Load", "Semi Automatic", "Easy Installation"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive appliance service and sales solutions for your home. Quality work at affordable prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <Wrench className="h-3 w-3 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <ShoppingCart className="h-5 w-5" />
            Book a Service Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
