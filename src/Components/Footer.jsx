import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Matrix AI</h2>
          <p className="text-sm leading-relaxed">
            Empowering businesses with ethical, scalable, and human‑centric AI
            solutions to thrive in the digital era.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-indigo-400">
                Services
              </a>
            </li>
            <li>
              <a href="#vision" className="hover:text-indigo-400">
                Vision
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-indigo-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-indigo-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-indigo-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com" className="hover:text-indigo-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Matrix AI. All rights reserved.
      </div>
    </footer>
  );
}
