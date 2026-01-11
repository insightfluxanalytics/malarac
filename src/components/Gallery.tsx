import { Camera } from "lucide-react";
import galleryFridgeService from "@/assets/gallery-fridge-service.jpg";
import galleryAcParts from "@/assets/gallery-ac-parts.jpg";
import galleryAcInstall from "@/assets/gallery-ac-install.jpg";
import galleryAcService from "@/assets/gallery-ac-service.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";

const galleryImages = [
  {
    src: galleryFridgeService,
    alt: "Smart Fridge Service",
    title: "Smart Fridge Setup",
  },
  {
    src: galleryAcParts,
    alt: "A/C Parts",
    title: "A/C Coil Repair",
  },
  {
    src: galleryAcInstall,
    alt: "A/C Installation",
    title: "Samsung A/C Installation",
  },
  {
    src: galleryAcService,
    alt: "A/C Service",
    title: "A/C Maintenance",
  },
  {
    src: galleryTeam,
    alt: "Our Team & Shop",
    title: "Our Team & Shop",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at our professional work and service quality. We take pride in every job we do.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
