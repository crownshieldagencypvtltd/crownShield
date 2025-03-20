import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg"
                alt="Crown Shield Agency Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">Crown Shield Agency</span>
            </Link>
            <p className="text-white/70 mb-6">
              Your trusted partner for premium manpower solutions, providing exceptional security guards, electricians,
              mechanics, and domestic help services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-navy-800 hover:bg-navy-700 text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 hover:bg-navy-700 text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 hover:bg-navy-700 text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 hover:bg-navy-700 text-white p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {["Security Guards", "Electricians", "Mechanics", "Domestic Help"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/services#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Crown Shield Agency Pvt. Ltd., 123 Taratala Road, Kolkata, West Bengal 700088
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@crownshieldagency.com"
                  className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                >
                  info@crownshieldagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Crown Shield Agency Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

