import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black p-20">
      <div className="md:flex justify-between space-x-30 p-20">
        <div className="w-50 space-y-3">
          <h3 className="text-white mb-6">Visit Us</h3>
          <p className="text-sm text-white/60">
            123 Culinary Avenue, Suite 100 Gourmet District, City 56789
          </p>
          <p className="text-sm text-white/60">+234 807 0603-137</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white mb-6">Opening Hour</h3>
          <p className="text-sm text-white/60">Mon-Thur: 5:00 PM - 10:00 PM</p>
          <p className="text-sm text-white/60">Fri-Sat: 5:00 PM - 11:30 PM</p>
          <p className="text-sm text-white/60">Sun: 4:00 PM - 9:30 PM</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white mb-6">Quick Link</h3>
          <ul className="text-sm">
            <li>
              <Link href={"/menu"} className="text-white/60">
                Menu
              </Link>
            </li>
            <li>
              <Link href={"/reservation"} className="text-white/60">
                Reservations
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-white/60">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="text-white/60">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/privacy"} className="text-white/60">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-white mb-6">Follow Us</h3>
          <div className="flex space-x-3">
            <Link href={""} className="text-white/60">
              <FaInstagram />
            </Link>
            <Link href={""} className="text-white/60">
              <FaFacebook />
            </Link>
            <Link href={""} className="text-white/60">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 text-gray-500 shadow-md" />
      <div className="md:flex items-center justify-between space-y-3 text-white/60">
        <p>© 2026 Savora Fine Dinning. All rights reserved</p>
        <div className="flex">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
