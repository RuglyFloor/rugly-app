"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Palette, Scissors, Ruler } from "lucide-react";

export default function CustomDesign() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [secondColorImage, setSecondColorImage] = useState<string | null>(null);
  const [shavingImage, setShavingImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [secondColorFileName, setSecondColorFileName] = useState<string>("");
  const [shavingFileName, setShavingFileName] = useState<string>("");
  const [rugColor, setRugColor] = useState("#FFFFFF");
  const [paintColor, setPaintColor] = useState("#FF1493");
  const [secondPaintColor, setSecondPaintColor] = useState("#4A90E2");
  const [selectedSize, setSelectedSize] = useState("3x5");
  const [useSecondColor, setUseSecondColor] = useState(false);
  const [secondColorType, setSecondColorType] = useState<"shading" | "image">("shading");
  const [useShaving, setUseShaving] = useState(false);

  const sizes = [
    { id: "3x5", label: "3' x 5'", basePrice: 199.99, secondColorPrice: 75, shavingPrice: 200, sizeIndex: 0 },
    { id: "5x7", label: "5' x 7'", basePrice: 299.99, secondColorPrice: 125, shavingPrice: 300, sizeIndex: 1 },
    { id: "6x9", label: "6' x 9'", basePrice: 399.99, secondColorPrice: 175, shavingPrice: 400, sizeIndex: 2 },
    { id: "8x10", label: "8' x 10'", basePrice: 599.99, secondColorPrice: 225, shavingPrice: 500, sizeIndex: 3 },
    { id: "9x12", label: "9' x 12'", basePrice: 799.99, secondColorPrice: 275, shavingPrice: 600, sizeIndex: 4 },
  ];

  const rugColorOptions = [
    { name: "White", value: "#FFFFFF" },
    { name: "Cream", value: "#F5F5DC" },
    { name: "Light Gray", value: "#D3D3D3" },
    { name: "Charcoal", value: "#36454F" },
    { name: "Black", value: "#000000" },
    { name: "Navy", value: "#000080" },
    { name: "Royal Blue", value: "#4169E1" },
    { name: "Red", value: "#DC143C" },
    { name: "Pink", value: "#FFB6C1" },
    { name: "Beige", value: "#F5F5DC" },
  ];

  const paintColorOptions = [
    { name: "Hot Pink", value: "#FF1493" },
    { name: "Electric Blue", value: "#4A90E2" },
    { name: "Neon Green", value: "#39FF14" },
    { name: "Orange", value: "#FF6347" },
    { name: "Purple", value: "#9370DB" },
    { name: "Yellow", value: "#FFD700" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#FF0000" },
    { name: "Turquoise", value: "#40E0D0" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondColorImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSecondColorFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSecondColorImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShavingImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setShavingFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setShavingImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentSize = sizes.find(s => s.id === selectedSize) || sizes[0];
  const basePrice = currentSize.basePrice;
  const secondColorPrice = useSecondColor ? currentSize.secondColorPrice : 0;
  const shavingPrice = useShaving ? currentSize.shavingPrice : 0;
  const totalPrice = basePrice + secondColorPrice + shavingPrice;

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
            <Link href="/custom" className="text-lg hover:text-blue-600 transition font-bold text-blue-600">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">Create Your CRUGLY</h1>
            <p className="text-3xl text-gray-800 font-bold mb-2">
              Ugly Rugs. Beautiful Mistakes.
            </p>
            <p className="text-lg text-gray-500">
              Design your custom floor art masterpiece
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Design Controls */}
            <div className="space-y-6">
              {/* Upload Image */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Upload className="h-6 w-6" />
                    Upload Your Design
                  </CardTitle>
                  <CardDescription className="text-base">
                    Choose an image to turn into a custom rug
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer bg-gray-50">
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-lg font-medium mb-2">
                        {fileName || "Click to upload your image"}
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Size Selection */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Ruler className="h-6 w-6" />
                    Select Rug Size
                  </CardTitle>
                  <CardDescription className="text-base">
                    Choose the size of your custom rug
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`p-4 border-2 rounded-lg transition ${
                          selectedSize === size.id
                            ? "border-blue-600 bg-blue-50 shadow-lg"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-bold text-lg">{size.label}</div>
                        <div className="text-sm text-gray-600 mt-1">${size.basePrice.toFixed(2)}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rug Background Color */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Palette className="h-6 w-6" />
                    Rug Background Color
                  </CardTitle>
                  <CardDescription className="text-base">
                    Choose the base color of your rug
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-3">
                    {rugColorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setRugColor(color.value)}
                        className={`h-16 rounded-lg border-4 transition shadow-md ${
                          rugColor === color.value
                            ? "border-blue-600 scale-110 shadow-lg"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="text-base text-gray-700 mt-4 text-center font-medium">
                    Selected: {rugColorOptions.find(c => c.value === rugColor)?.name}
                  </p>
                </CardContent>
              </Card>

              {/* Paint Color */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Primary Paint Color</CardTitle>
                  <CardDescription className="text-base">
                    Choose the color your image will be painted with
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-5 gap-3">
                    {paintColorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setPaintColor(color.value)}
                        className={`h-16 rounded-lg border-4 transition shadow-md ${
                          paintColor === color.value
                            ? "border-blue-600 scale-110 shadow-lg"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="text-base text-gray-700 text-center font-medium">
                    Selected: {paintColorOptions.find(c => c.value === paintColor)?.name}
                  </p>
                </CardContent>
              </Card>

              {/* Second Color Option */}
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Add Second Color</CardTitle>
                      <p className="text-sm text-blue-600 font-medium mt-1">
                        +${currentSize.secondColorPrice.toFixed(2)} for {currentSize.label}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={useSecondColor}
                      onChange={(e) => setUseSecondColor(e.target.checked)}
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                  <CardDescription className="text-base">
                    Add dimension with shading or a separate image
                  </CardDescription>
                </CardHeader>
                {useSecondColor && (
                  <CardContent className="space-y-4">
                    {/* Second Color Type Selection */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => setSecondColorType("shading")}
                        className={`flex-1 p-4 rounded-lg border-2 transition ${
                          secondColorType === "shading"
                            ? "border-blue-600 bg-blue-100"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <p className="font-medium">Shading/Dimension</p>
                        <p className="text-sm text-gray-600">Add depth to original image</p>
                      </button>
                      <button
                        onClick={() => setSecondColorType("image")}
                        className={`flex-1 p-4 rounded-lg border-2 transition ${
                          secondColorType === "image"
                            ? "border-blue-600 bg-blue-100"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <p className="font-medium">Separate Image</p>
                        <p className="text-sm text-gray-600">Upload second design</p>
                      </button>
                    </div>

                    {secondColorType === "shading" ? (
                      <div>
                        <Label className="mb-2 block text-base">Second Color for Shading</Label>
                        <div className="grid grid-cols-5 gap-3">
                          {paintColorOptions.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => setSecondPaintColor(color.value)}
                              className={`h-16 rounded-lg border-4 transition shadow-md ${
                                secondPaintColor === color.value
                                  ? "border-blue-600 scale-110 shadow-lg"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer bg-white">
                        <Label htmlFor="second-color-upload" className="cursor-pointer">
                          <Upload className="mx-auto h-10 w-10 text-blue-400 mb-3" />
                          <p className="text-base font-medium mb-1">
                            {secondColorFileName || "Upload second image"}
                          </p>
                          <p className="text-sm text-gray-500">
                            This will be painted in the second color
                          </p>
                        </Label>
                        <Input
                          id="second-color-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleSecondColorImageUpload}
                        />
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>

              {/* Shaving Option */}
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Scissors className="h-6 w-6" />
                        Shaving Option
                      </CardTitle>
                      <p className="text-sm text-purple-600 font-medium mt-1">
                        +${currentSize.shavingPrice.toFixed(2)} for {currentSize.label}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={useShaving}
                      onChange={(e) => setUseShaving(e.target.checked)}
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                  <CardDescription className="text-base">
                    Add a second pattern that will be shaved into the rug texture
                  </CardDescription>
                </CardHeader>
                {useShaving && (
                  <CardContent>
                    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center hover:border-purple-500 transition cursor-pointer bg-white">
                      <Label htmlFor="shaving-upload" className="cursor-pointer">
                        <Scissors className="mx-auto h-10 w-10 text-purple-400 mb-3" />
                        <p className="text-base font-medium mb-1">
                          {shavingFileName || "Upload shaving pattern"}
                        </p>
                        <p className="text-sm text-gray-500">
                          This pattern will be shaved into the rug pile
                        </p>
                      </Label>
                      <Input
                        id="shaving-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleShavingImageUpload}
                      />
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Live Preview */}
            <div className="space-y-6">
              <Card className="sticky top-4 border-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">🎨 Live Preview</CardTitle>
                  <CardDescription className="text-base">
                    See your design on the rug before you order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div 
                    className="aspect-square rounded-lg flex items-center justify-center overflow-hidden relative shadow-2xl border-4 border-gray-200"
                    style={{ backgroundColor: rugColor }}
                  >
                    {uploadedImage ? (
                      <div className="relative w-full h-full">
                        {/* Primary Image */}
                        <div 
                          className="absolute inset-0 p-8"
                          style={{
                            backgroundColor: paintColor,
                            maskImage: `url(${uploadedImage})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: `url(${uploadedImage})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                          }}
                        />
                        
                        {/* Second Color Layer */}
                        {useSecondColor && secondColorType === "shading" && (
                          <div 
                            className="absolute inset-0 p-8"
                            style={{
                              backgroundColor: secondPaintColor,
                              maskImage: `url(${uploadedImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: `url(${uploadedImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              opacity: 0.4,
                              filter: 'blur(2px)',
                            }}
                          />
                        )}
                        
                        {/* Second Image */}
                        {useSecondColor && secondColorType === "image" && secondColorImage && (
                          <div 
                            className="absolute inset-0 p-8"
                            style={{
                              backgroundColor: secondPaintColor,
                              maskImage: `url(${secondColorImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: `url(${secondColorImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                            }}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 p-8">
                        <Upload className="mx-auto h-20 w-20 mb-4" />
                        <p className="text-lg font-medium">Your design will appear here</p>
                        <p className="text-sm mt-2">Upload an image to see the live preview</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-base">Size: {currentSize.label}</span>
                      <span className="font-medium">${basePrice.toFixed(2)}</span>
                    </div>
                    {useSecondColor && (
                      <div className="flex justify-between items-center text-blue-600">
                        <span className="text-base">Second Color:</span>
                        <span className="font-medium">+${secondColorPrice.toFixed(2)}</span>
                      </div>
                    )}
                    {useShaving && (
                      <div className="flex justify-between items-center text-purple-600">
                        <span className="text-base">Shaving:</span>
                        <span className="font-medium">+${shavingPrice.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t-2 pt-3 flex justify-between text-xl font-bold">
                      <span>Total Price:</span>
                      <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                    </div>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 mt-4"
                      disabled={!uploadedImage || (useShaving && !shavingImage) || (useSecondColor && secondColorType === "image" && !secondColorImage)}
                    >
                      Add to Cart - ${totalPrice.toFixed(2)}
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                      ⏱️ Production time: 3-4 weeks for custom designs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
