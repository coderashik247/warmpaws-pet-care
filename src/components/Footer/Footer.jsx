
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import playStore from '../../assets/play_store.png'
import appStore from '../../assets/app_store.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className=" text-neutral-content pt-20 pb-10 mt-10 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Warm Paws Logo" className="w-[120px]" />
            <h2 className="text-2xl font-bold fontBricolage">Warm Paws</h2>
            <span className="text-xs bg-orange-500 text-white rounded-md px-2 py-1 ml-1">Pet Care & Shop</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 ">
            Once checked in, your dog joins a group of compatible friends for supervised playtime. We organize activities…
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaLinkedinIn size={20} /></a>
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-bold">HELP FOR CALL</p>
            <p className="text-lg font-semibold">+017-98765-433</p>
          </div>
          <div>
            <p className="font-bold">OUR ADDRESS</p>
            <p className="text-lg font-semibold">Dhaka, Bangladesh</p>
          </div>
          <div>
            <p className="font-bold">WHATSAPP</p>
            <p className="text-lg font-semibold">+017-98765-433</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <p className="font-bold mb-4">Subscribe! New subscribers get 20% off!</p>
          <div className="flex items-center gap-2 mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-orange-500 border-none text-white">Subscribe</button>
          </div>

          <p className="font-bold mb-2">Download App</p>
          <div className="flex gap-2 mb-6">
            <img src={playStore} alt="Google Play" className="h-10" />
            <img src={appStore} alt="App Store" className="h-10" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-5 pt-4 text-center text-sm">
        <p>
          Copyright 2025 <span className="text-orange-500">Warm Paws</span>. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
          <Link to="/support">Get Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
