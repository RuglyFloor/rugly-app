import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2, ArrowRight, ShoppingCart, Instagram, Facebook, ShieldCheck, Sparkles, Info, AlertTriangle, Star, Zap, Mail, MessageSquare } from "lucide-react";
import { createCartAndRedirect } from "./actions/cart";

export default function Home() {
  // Placeholder variant IDs
  const CUSTOM_RUG_VARIANT_ID = "gid://shopify/ProductVariant/15638708912209"; 
  const READY_TO_SHIP_VARIANT_ID = "gid://shopify/ProductVariant/15631681880145";

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Rugly Logo" width={120} height={40} className="h-8 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#rugly-premium" className="transition-colors hover:text-primary">Rugly Premium</a>
            <a href="#ready-to-ship" className="transition-colors hover:text-primary">Ready to Ship</a>
            <a href="#crugly" className="transition-colors hover:text-primary">Crugly (Custom)</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Shop Now</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-950 text-white">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
                RUGLY.<br />
                <span className="text-primary">ART FOR YOUR FLOOR.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Hand-painted rugs from the studio of Ryan Hensley. 
                Choose a <span className="text-white font-bold">Rugly Premium</span> original or create your own <span className="text-primary font-bold">Crugly</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-16 px-10 text-xl font-black tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20" asChild>
                  <a href="#rugly-premium">SHOP PREMIUM ORIGINALS</a>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-black tracking-widest border-2 border-white/20 hover:bg-white/10" asChild>
                  <a href="#crugly">CREATE A CRUGLY (CUSTOM)</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 -z-10 w-full h-full opacity-20 bg-[url(&apos;https://www.transparenttextures.com/patterns/carbon-fibre.png&apos;)]" />
          <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-primary/20 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
        </section>

        {/* Rugly Premium Section */}
        <section id="rugly-premium" className="py-24 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-primary fill-primary" />
                  <span className="font-black tracking-[0.3em] text-sm uppercase text-primary">The Original Line</span>
                </div>
                <h2 className="text-5xl font-black tracking-tight uppercase">RUGLY PREMIUM</h2>
                <p className="text-xl text-muted-foreground mt-4 max-w-xl">
                  One-of-a-kind pieces hand-painted by Ryan Hensley. These are the studio originals.
                </p>
              </div>
              <Button variant="outline" className="font-black tracking-widest border-2">VIEW ALL ORIGINALS</Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Studio Original #042", size: "6x9", price: "$899", tag: "1 of 1" },
                { title: "Abstract Series: Detroit", size: "5x8", price: "$749", tag: "Limited" },
                { title: "The Studio Collection #01", size: "9x12", price: "$1,299", tag: "Artist Proof" }
              ].map((rug, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-xl group cursor-pointer">
                  <div className="aspect-[4/5] bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 grayscale">
                      <Image src="/images/logo.png" alt="Rugly" width={200} height={200} className="object-contain" />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
                      {rug.tag}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-1">{rug.title}</h3>
                    <p className="text-muted-foreground font-bold text-sm mb-4">{rug.size} · Hand-Painted Canvas</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-primary">{rug.price}</span>
                      <form action={async () => {
                        'use server';
                        await createCartAndRedirect(READY_TO_SHIP_VARIANT_ID);
                      }}>
                        <Button size="sm" className="font-black tracking-widest">BUY NOW</Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Ship Section */}
        <section id="ready-to-ship" className="py-24 bg-slate-50">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <Zap className="h-8 w-8 text-primary fill-primary" />
              <h2 className="text-4xl font-black tracking-tight uppercase">READY TO SHIP NOW</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Pan Am Vintage Logo", desc: "A classic aviation icon, hand-painted with precision on a low-pile base.", price: "$299", image: "/images/ready-to-ship-1.jpg" },
                { title: "Madonna Portrait", desc: "Bold, high-contrast pop art portrait. A statement piece for any room.", price: "$349", image: "/images/ready-to-ship-2.jpg" }
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-4 border-white shadow-lg flex flex-col md:flex-row gap-0 items-stretch">
                  <div className="w-full md:w-1/2 aspect-square relative bg-slate-200">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-medium mb-6">{item.desc}</p>
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-black text-primary">{item.price}</span>
                      <form action={async () => {
                        'use server';
                        await createCartAndRedirect(READY_TO_SHIP_VARIANT_ID);
                      }}>
                        <Button className="font-black tracking-widest">GRAB IT</Button>
                      </form>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Two Ways to Order */}
        <section id="order-ways" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">TWO WAYS TO ORDER</h2>
              <div className="h-2 w-24 bg-primary mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-10 border-4 border-slate-100 hover:border-primary/20 transition-all group">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">UPLOAD & ORDER (CRUGLY)</h3>
                <p className="text-lg text-muted-foreground mb-8 font-medium">For bold, graphic designs where you know exactly what you want.</p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Upload your image",
                    "Select size & base color",
                    "1-color stencil included",
                    "Optional 2-color overlay",
                    "Preview before paying"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-14 text-lg font-black tracking-widest" asChild>
                  <a href="#crugly">UPLOAD IMAGE</a>
                </Button>
              </Card>

              <Card className="p-10 border-4 border-slate-950 bg-slate-950 text-white group">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">CUSTOM / SURPRISE ME</h3>
                <p className="text-lg text-slate-400 mb-8 font-medium">You want taste, interpretation, and creative decisions made for you.</p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Upload inspiration or nothing at all",
                    "Room photo recommended",
                    "We design it",
                    "You approve the quote",
                    "We build it"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-slate-200">
                      <Sparkles className="h-5 w-5 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-14 text-lg font-black tracking-widest border-white/20 hover:bg-white/10" asChild>
                  <a href="#custom-quote">REQUEST CUSTOM QUOTE</a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Crugly (Custom) Section */}
        <section id="crugly" className="py-24 bg-slate-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Preview Area */}
              <div className="lg:sticky lg:top-24">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <Card className="relative overflow-hidden border-none shadow-2xl">
                    <CardHeader className="bg-white border-b">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Crugly Live Preview</CardTitle>
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-red-400" />
                          <div className="h-2 w-2 rounded-full bg-yellow-400" />
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 aspect-square relative bg-[#F5F5DC] flex items-center justify-center">
                      <div className="w-[85%] h-[85%] bg-white shadow-inner rounded-sm flex items-center justify-center overflow-hidden border-[12px] border-slate-200/50 relative">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url(&apos;https://www.transparenttextures.com/patterns/felt.png&apos;)]" />
                        <div className="text-center p-12 relative z-10">
                          <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Upload className="h-10 w-10 text-primary" />
                          </div>
                          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Upload Your Art</p>
                        </div>
                      </div>
                      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black border shadow-xl flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        5&apos; x 7&apos; • WHITE BASE
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border bg-white shadow-sm text-center">
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2">Base Price</p>
                    <p className="text-2xl font-bold">$249</p>
                  </div>
                  <div className="p-5 rounded-2xl border bg-white shadow-sm text-center">
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2">Colors</p>
                    <p className="text-2xl font-bold">1 Incl.</p>
                  </div>
                  <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 shadow-sm text-center">
                    <p className="text-[10px] text-primary uppercase font-black tracking-widest mb-2">Total</p>
                    <p className="text-2xl font-bold text-primary">$249</p>
                  </div>
                </div>
              </div>

              {/* Configuration Form */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-black tracking-[0.3em] text-sm uppercase text-primary">Custom Creation</span>
                  </div>
                  <h2 className="text-5xl font-black tracking-tight uppercase">CREATE A CRUGLY</h2>
                  <p className="text-lg text-muted-foreground font-medium mt-4">Your design, hand-painted on our premium base rugs.</p>
                </div>

                <div className="space-y-10">
                  {/* Step 1: Size */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-black">01</div>
                      <Label className="text-xl font-bold tracking-tight">SELECT SIZE</Label>
                    </div>
                    <RadioGroup defaultValue="m" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { id: "s", label: "SMALL", size: "4&apos; x 6&apos;", price: "$199" },
                        { id: "m", label: "MEDIUM", size: "5&apos; x 7&apos;", price: "$249" },
                        { id: "l", label: "LARGE", size: "6&apos; x 9&apos;", price: "$349" },
                        { id: "h", label: "HUGE", size: "9&apos; x 12&apos;", price: "$599" },
                        { id: "r", label: "ROUND", size: "5&apos; Round", price: "$229" },
                      ].map((size) => (
                        <div key={size.id}>
                          <RadioGroupItem value={size.id} id={size.id} className="peer sr-only" />
                          <Label
                            htmlFor={size.id}
                            className="flex flex-col items-center justify-center rounded-2xl border-2 border-muted bg-white p-6 hover:bg-slate-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all duration-200"
                          >
                            <span className="text-xs font-black tracking-widest mb-1">{size.label}</span>
                            <span className="text-sm text-muted-foreground font-medium mb-3">{size.size}</span>
                            <span className="text-lg font-bold text-primary">{size.price}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Step 2: Base Color */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-black">02</div>
                      <Label className="text-xl font-bold tracking-tight">BASE COLOR</Label>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                      {[
                        { name: "White", hex: "bg-white" },
                        { name: "Cream", hex: "bg-[#F5F5DC]" },
                        { name: "Grey", hex: "bg-gray-400" },
                        { name: "Black", hex: "bg-black" },
                        { name: "Navy", hex: "bg-blue-900" },
                        { name: "Sage", hex: "bg-emerald-800" }
                      ].map((color) => (
                        <button
                          key={color.name}
                          className="group flex flex-col items-center gap-3"
                        >
                          <div className={`h-14 w-14 rounded-2xl border-2 border-muted group-hover:border-primary group-hover:scale-110 transition-all duration-200 shadow-sm ${color.hex}`} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Upload Image */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-black">03</div>
                      <Label className="text-xl font-bold tracking-tight">UPLOAD DESIGN</Label>
                    </div>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                      <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:border-primary hover:bg-white transition-all cursor-pointer bg-white/50">
                        <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                          <Upload className="h-8 w-8 text-slate-400 group-hover:text-primary" />
                        </div>
                        <p className="text-lg font-bold mb-1">CLICK TO UPLOAD</p>
                        <p className="text-sm text-muted-foreground font-medium">OR DRAG AND DROP YOUR ARTWORK</p>
                        <Input type="file" className="hidden" />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Color Simplification */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-black">04</div>
                      <Label className="text-xl font-bold tracking-tight">DESIGN COLORS</Label>
                    </div>
                    <Tabs defaultValue="1" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-slate-100 rounded-xl">
                        <TabsTrigger value="1" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">1 COLOR (INCL.)</TabsTrigger>
                        <TabsTrigger value="2" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">2 COLORS (+$35)</TabsTrigger>
                      </TabsList>
                      <TabsContent value="1" className="p-6 border-2 border-slate-100 rounded-2xl mt-4 text-sm text-muted-foreground font-medium leading-relaxed bg-white">
                        Your image will be simplified to a single paint color on top of the rug base. Perfect for bold logos and lettering.
                      </TabsContent>
                      <TabsContent value="2" className="p-6 border-2 border-slate-100 rounded-2xl mt-4 text-sm text-muted-foreground font-medium leading-relaxed bg-white">
                        We&apos;ll use two distinct paint colors for your design, adding depth and detail to your custom piece.
                      </TabsContent>
                    </Tabs>
                  </div>

                  <form action={async () => {
                    'use server';
                    await createCartAndRedirect(CUSTOM_RUG_VARIANT_ID);
                  }}>
                    <Button className="w-full h-16 text-xl font-black tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 rounded-2xl">
                      <ShoppingCart className="mr-3 h-6 w-6" /> ADD TO CART
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Quote Form Section */}
        <section id="custom-quote" className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary fill-primary" />
                  <span className="font-black tracking-[0.3em] text-sm uppercase text-primary">Surprise Me / Custom</span>
                </div>
                <h2 className="text-5xl font-black tracking-tight uppercase">REQUEST A CUSTOM QUOTE</h2>
                <p className="text-xl text-muted-foreground mt-4">
                  For when you want taste, interpretation, and creative decisions made for you.
                </p>
              </div>

              <Card className="p-8 md:p-12 border-4 border-slate-100 shadow-2xl">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-black text-xs tracking-widest uppercase">Full Name</Label>
                      <Input id="name" placeholder="Ryan Hensley" className="h-12 border-2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-black text-xs tracking-widest uppercase">Email Address</Label>
                      <Input id="email" type="email" placeholder="ryan@example.com" className="h-12 border-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vision" className="font-black text-xs tracking-widest uppercase">Your Vision / Inspiration</Label>
                    <Textarea id="vision" placeholder="Tell us about your space, the vibe you&apos;re going for, or any specific elements you want included..." className="min-h-[150px] border-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="font-black text-xs tracking-widest uppercase">Preferred Size</Label>
                      <Select>
                        <SelectTrigger className="h-12 border-2">
                          <SelectValue placeholder="Select a size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4x6">4&apos; x 6&apos;</SelectItem>
                          <SelectItem value="5x8">5&apos; x 8&apos;</SelectItem>
                          <SelectItem value="6x9">6&apos; x 9&apos;</SelectItem>
                          <SelectItem value="9x12">9&apos; x 12&apos;</SelectItem>
                          <SelectItem value="5round">5&apos; Round</SelectItem>
                          <SelectItem value="other">Other (Specify in vision)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-black text-xs tracking-widest uppercase">Upload Inspiration / Room Photo</Label>
                      <div className="border-2 border-dashed rounded-lg p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                        <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Click to upload</span>
                        <Input type="file" className="hidden" />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full h-16 text-xl font-black tracking-widest bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                    SEND REQUEST <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Read This Before Ordering */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <AlertTriangle className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-black tracking-tight uppercase">READ THIS BEFORE ORDERING</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-lg text-slate-300 font-medium">Rugs are <span className="text-white font-bold">painted, not printed</span>. This is hand work.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-lg text-slate-300 font-medium"><span className="text-white font-bold">Bold designs</span> work best. High contrast = clean edges.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-lg text-slate-300 font-medium">Thin lines & gradients may be <span className="text-white font-bold">simplified</span> for the stencil.</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-xl text-slate-200 font-medium leading-relaxed italic">
                    &quot;The preview is accurate — but this is still hand work. Each rug has character. That’s the point.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Base Rug Details */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl font-black tracking-tight uppercase">BASE RUG DETAILS</h2>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: ShieldCheck, title: "LOW-PILE", desc: "Flat weave for clean paint lines" },
                    { icon: Sparkles, title: "MATTE FINISH", desc: "No glare, just pure color" },
                    { icon: Info, title: "WASHABLE", desc: "Easy to clean and maintain" },
                    { icon: CheckCircle2, title: "NON-SLIP", desc: "Stays exactly where you put it" }
                  ].map((detail, i) => (
                    <div key={i} className="space-y-2">
                      <detail.icon className="h-8 w-8 text-primary mb-2" />
                      <h4 className="font-black text-sm tracking-widest uppercase">{detail.title}</h4>
                      <p className="text-muted-foreground font-medium text-sm">{detail.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t">
                  <p className="font-black text-xs tracking-[0.2em] mb-4 uppercase text-muted-foreground">Available Sizes</p>
                  <div className="flex flex-wrap gap-3">
                    {["4×6", "5×8", "6×9", "5′ ROUND"].map((size) => (
                      <span key={size} className="px-4 py-2 rounded-full bg-slate-100 font-black text-sm">{size}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-[40px] bg-slate-100 overflow-hidden relative">
                <Image src="/images/logo.png" alt="Rugly Detail" fill className="object-contain p-20 opacity-20 grayscale" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-slate-950 text-white overflow-hidden relative">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-10 leading-tight tracking-tighter">
                  FROM THE STUDIO TO <br />
                  <span className="text-primary">YOUR LIVING ROOM.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-400 font-medium leading-relaxed">
                  <p>
                    Rugly was born at the intersection of fine art and functional design. Founder Ryan Hensley brings years of experience in commercial space design, building unique Airbnbs, and creating brand identities to the most overlooked canvas in your home: the floor.
                  </p>
                  <p>
                    As a canvas artist with a background in interior design, he realized that flooring was either mass-produced and soulless, or custom-tufted and prohibitively expensive. Rugly is the middle ground. We use high-quality base rugs as our canvas and hand-paint every design in our studio.
                  </p>
                  <p>
                    Whether it&apos;s a **Rugly Premium** original or a custom **Crugly** of your own design, you&apos;re getting a piece of hand-painted art that is built to be lived on.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 w-fit">
                  <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center font-black text-2xl shadow-lg shadow-primary/20">RH</div>
                  <div>
                    <p className="font-bold text-xl">RYAN HENSLEY</p>
                    <p className="text-sm text-slate-500 font-black tracking-widest">FOUNDER & ARTIST</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] bg-gradient-to-br from-primary/20 to-teal-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  <Image src="/images/logo.png" alt="Rugly Brand" width={300} height={300} className="opacity-50 grayscale brightness-200" />
                </div>
                <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/20 blur-[80px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-teal-500/20 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Image src="/images/logo.png" alt="Rugly Logo" width={140} height={40} className="mb-8" />
              <p className="text-muted-foreground font-medium max-w-sm leading-relaxed">
                Hand-painted custom rugs for unique spaces. Durable, functional art for your floor.
              </p>
              <div className="mt-8 space-y-4">
                <a href="mailto:info@ruglyfloor.com" className="flex items-center gap-3 text-lg font-black tracking-widest hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary" /> info@ruglyfloor.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-xs tracking-[0.2em] mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                <li><a href="#rugly-premium" className="hover:text-primary transition-colors">RUGLY PREMIUM</a></li>
                <li><a href="#ready-to-ship" className="hover:text-primary transition-colors">READY TO SHIP</a></li>
                <li><a href="#crugly" className="hover:text-primary transition-colors">CRUGLY (CUSTOM)</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">ABOUT US</a></li>
                <li><a href="/studio" className="hover:text-primary transition-colors opacity-20">STUDIO LOGIN</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs tracking-[0.2em] mb-6 uppercase">Connect</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/ruglyfloor" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/ruglyfloor" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-muted-foreground tracking-widest">
              © 2025 RUGLY. A HOMESTEADS, LLC (PA) COMPANY.
            </p>
            <div className="flex gap-8 text-[10px] font-black tracking-widest text-muted-foreground uppercase">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
