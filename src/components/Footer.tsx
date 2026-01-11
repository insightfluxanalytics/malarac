import { Snowflake, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Malar A/C Mechanic & Service"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Snowflake className="h-5 w-5" />
                Malar A/C
              </h3>
              <p className="text-background/70 text-sm">Mechanic & Service</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-background/70" />
              <a href="tel:9750106378" className="hover:underline">
                9750106378
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-background/70" />
              <span>Owner: B. RAJAKUMAR</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-background/70 text-sm">
          <p>© {currentYear} Malar A/C Mechanic & Service. All rights reserved.</p>
          <p className="mt-1">A/C | Fridge | Washing Machine - Service & Sales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
