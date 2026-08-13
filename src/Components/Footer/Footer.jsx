import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaRegClock,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#005eb8] text-[#d5effb]">
      <div className="max-w-330 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href={"/"}>
              <h2 className="text-2xl font-bold text-white">Doctor Tracker</h2>
            </Link>
            <p className="text-[#d5effb] text-sm leading-relaxed max-w-xs mt-2">
              Streamline your healthcare practice with our comprehensive doctor
              and patient tracking system.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-md">
                <FaFacebook className="w-4 h-4 text-white" />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-md">
                <FaTwitter className="w-4 h-4 text-white" />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-md">
                <FaLinkedin className="w-4 h-4 text-white" />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-md">
                <FaInstagram className="w-4 h-4 text-white" />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-md">
                <FaYoutube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link href="/all-doctors">All Doctors</Link>
              </li>

              <li>
                <Link href="/patients">Patients</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/support">Support</Link>
              </li>

              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <IoLocationOutline className="w-4 h-4" />
                <p>123 Healthcare Ave, Medical City</p>
              </li>

              <li className="flex items-center gap-3">
                <MdOutlineEmail className="w-4 h-4" />
                <p>support@doctortracker.com</p>
              </li>

              <li className="flex items-center gap-3">
                <FiPhoneCall className="w-4 h-4" />
                <p>+1 (555) 123-4567</p>
              </li>

              <li className="flex items-center gap-3">
                <FaRegClock className="w-4 h-4" />
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <p className="text-[#d5effb] text-center py-3 text-sm">
          &copy Doctor Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
