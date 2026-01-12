import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Index;
