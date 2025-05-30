import { Instagram, Mail, MapPin } from "lucide-react";

interface FooterProps {
  logoText?: string;
}

const Footer = ({ logoText = "prithvi_graphix" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  // Ticker text items
  const tickerItems = [
    "GRAPHIC DESIGN",
    "NOISE",
    "TYPE",
    "FORM",
    "CHAOS",
    "BRUTALISM",
    "REBUILDING FORM",
    "RAWNESS",
    "SIGNALS",
  ];

  // Create duplicated ticker content for seamless looping
  const tickerContent = [...tickerItems, ...tickerItems];

  return (
    <footer className="bg-gray-950 text-white" id="contact">
      {/* Noise Machine Ticker */}
      <div className="ticker-container border-t border-b border-gray-800">
        <div className="ticker-wrapper">
          {tickerContent.map((item, index) => (
            <div key={index} className="ticker-item">
              {item} <span className="ticker-separator">//</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-[#39FF14]">{logoText}</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Creating bold, innovative graphic design solutions with a focus on
              surrealism, brutalism, and experimental typography.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/prithvi_graphix?igsh=MThhYnoyazM2Zm1mZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-2 rounded-full hover:bg-[#39FF14] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#39FF14] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-[#39FF14] transition-colors"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#39FF14] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#39FF14] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#39FF14] mt-1 flex-shrink-0" />
                <span className="text-gray-400">prithvithebilla@gmail.com</span>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-[#39FF14] mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  Mahasamund, Chhattisgarh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} {logoText}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
