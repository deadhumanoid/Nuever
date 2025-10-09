import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-neuver-bg-dark text-neuver-text-light p-4 shadow-lg border-b border-neuver-silver-dark">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 interactive-element">
            {/* Replace with your actual Neuver logo.svg later */}
            <Image src="/neuver-logo.svg" alt="Neuver Logo" width={40} height={40} className="filter drop-shadow-lg shadow-neuver-accent-blue" />
            <span className="text-3xl font-display font-bold text-neuver-accent-blue hover:text-neuver-accent-green transition-colors duration-300">Neuver</span>
        </Link>
        <div className="space-x-8">
          <Link href="/collections" className="text-lg font-sans hover:text-neuver-accent-purple transition-colors duration-200 interactive-element">
            Collections
          </Link>
          <Link href="/about" className="text-lg font-sans hover:text-neuver-accent-purple transition-colors duration-200 interactive-element">
            About
          </Link>
          <Link href="/contact" className="text-lg font-sans hover:text-neuver-accent-purple transition-colors duration-200 interactive-element">
            Contact
          </Link>
        </div>
        <div className="space-x-4">
          <button className="text-lg font-sans hover:text-neuver-accent-blue transition-colors duration-200 interactive-element">
            Login
          </button>
          <button className="bg-neuver-accent-blue hover:bg-neuver-accent-purple text-neuver-bg-dark font-semibold py-2 px-4 rounded-md transition-colors duration-300 interactive-element shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
