import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: "panam",
    name: "Pan Am",
    description: "Vintage airline nostalgia meets modern floor art",
    price: "$299.99",
    image: "/images/products/panam.jpg",
  },
  {
    id: "madonna",
    name: "Madonna",
    description: "Pop art icon in vibrant pink",
    price: "$299.99",
    image: "/images/products/madonna.jpg",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logos/primary-logo.png"
              alt="RUGLY"
              width={200}
              height={80}
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl">Ugly Rugs. Beautiful Mistakes.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition">
              <Link href={`/products/${product.id}`}>
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}

          {/* Custom Design Card */}
          <Card className="overflow-hidden hover:shadow-xl transition bg-gradient-to-br from-gray-100 to-gray-200">
            <Link href="/custom">
              <div className="relative h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold">Create Your Own</h3>
                </div>
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="text-2xl">Custom Design</CardTitle>
              <CardDescription>Upload your own image</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">Starting at $299.99</p>
            </CardContent>
            <CardFooter>
              <Link href="/custom" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Designing
                </Button>
              </Link>
            </CardFooter>
          </Card>
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
