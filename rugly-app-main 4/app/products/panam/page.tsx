"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function PanAmProduct() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("5x7");

  const sizes = [
    { id: "3x5", label: "3' x 5'", price: 199.99 },
    { id: "5x7", label: "5' x 7'", price: 299.99 },
    { id: "6x9", label: "6' x 9'", price: 399.99 },
    { id: "8x10", label: "8' x 10'", price: 599.99 },
  ];

  const currentPrice = sizes.find(s => s.id === selectedSize)?.price || 299.99;

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

      {/* Product Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/panam.jpg"
                alt="Pan Am Rug"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Pan Am Rug</h1>
              <p className="text-2xl text-blue-600 font-bold">${currentPrice.toFixed(2)}</p>
            </div>

            <p className="text-lg text-gray-600">
              Bring vintage aviation nostalgia to your space with this iconic Pan Am design. 
              Featuring the classic Pan Am globe logo and typography, this rug is perfect for 
              aviation enthusiasts and lovers of mid-century modern design.
            </p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Size</label>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 border-2 rounded-lg transition ${
                      selectedSize === size.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{size.label}</div>
                    <div className="text-sm text-gray-600">${size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - ${(currentPrice * quantity).toFixed(2)}
            </Button>

            {/* Product Info */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Premium polyester material</li>
                  <li>• Non-slip backing</li>
                  <li>• Machine washable</li>
                  <li>• Vibrant, fade-resistant colors</li>
                  <li>• Ships within 3-5 business days</li>
                  <li>• Free shipping on orders over $200</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

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
