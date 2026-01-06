import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logos/primary-logo.png"
              alt="RUGLY - Art to the floor"
              width={200}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/products" className="text-lg hover:text-blue-600 transition">
              Products
            </Link>
            <Link href="/custom" className="text-lg hover:text-blue-600 transition">
              Custom Design
            </Link>
            <Link href="/about" className="text-lg hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-lg hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-blue-500 via-blue-600 to-red-500 flex items-center justify-center text-white">
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            RUGLY
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
            Art to the floor
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ugly Rugs. Beautiful Mistakes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
            <Link href="/custom">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Create Custom Rug
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Designs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pan Am Rug */}
          <Link href="/products/panam" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/products/panam.jpg"
                alt="Pan Am Rug"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">Pan Am</h3>
                <p className="text-white/90">Vintage airline nostalgia</p>
              </div>
            </div>
          </Link>

          {/* Madonna Rug */}
          <Link href="/products/madonna" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/products/madonna.jpg"
                alt="Madonna Rug"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">Madonna</h3>
                <p className="text-white/90">Pop art icon</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Create Your Own Masterpiece</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your image and we'll transform it into a custom rug. 
            Turn your photos, artwork, or designs into beautiful floor art.
          </p>
          <Link href="/custom">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Start Designing
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RUGLY</h3>
              <p className="text-gray-400">Art to the floor</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                <li><Link href="/custom" className="text-gray-400 hover:text-white">Custom Design</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">info@ruglyfloors.com</p>
              <p className="text-gray-400">517.777.8474</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 RUGLY Floors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
