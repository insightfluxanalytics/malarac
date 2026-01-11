import { Phone, MapPin, Clock, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reach out to us anytime for quick assistance with your appliance needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Owner */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Owner</h3>
            <p className="text-primary font-bold text-lg">B. RAJAKUMAR</p>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:9750106378"
              className="text-primary font-bold text-lg hover:underline"
            >
              9750106378
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
            <p className="text-muted-foreground text-sm">Mon - Sat</p>
            <p className="text-primary font-bold">9:00 AM - 6:00 PM</p>
          </div>

          {/* Service Area */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
            <p className="text-muted-foreground text-sm">All Areas</p>
            <p className="text-primary font-bold">Doorstep Service</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Need Emergency Service?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Call us now for immediate assistance. We provide quick response for all your appliance emergencies.
            </p>
            <a
              href="tel:9750106378"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call 9750106378
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
