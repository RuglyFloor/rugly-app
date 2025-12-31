import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Upload, Ruler, CheckCircle2, ArrowRight, ShoppingCart, Instagram, Facebook, ShieldCheck, Sparkles, Truck, Info, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Rugly Logo" width={120} height={40} className="h-8 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#how-it-works" className="transition-colors hover:text-primary">How it Works</a>
            <a href="#order-ways" className="transition-colors hover:text-primary">Order</a>
            <a href="#customize" className="transition-colors hover:text-primary">Customize</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Hybrid Vibe */}
        <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-950 text-white">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
                CUSTOM-PAINTED RUGS.<br />
                <span className="text-primary">NO FLUFF. NO FILTERS.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                You send the image. We cut the stencil and paint it onto a real rug. 
                Not printed. Not woven. <span className="text-white underline decoration-primary decoration-4 underline-offset-4">Painted by hand.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-16 px-10 text-xl font-black tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20" asChild>
                  <a href="#customize">UPLOAD IMAGE · FROM $199</a>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-black tracking-widest border-2 border-white/20 hover:bg-white/10">
                  CUSTOM / SURPRISE ME
                </Button>
              </div>
            </div>
          </div>
          {/* Industrial background elements */}
          <div className="absolute top-0 left-0 -z-10 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-primary/20 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
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
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">UPLOAD & ORDER</h3>
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
                  <a href="#customize">UPLOAD IMAGE</a>
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
                <Button variant="outline" className="w-full h-14 text-lg font-black tracking-widest border-white/20 hover:bg-white/10">
                  REQUEST CUSTOM RUG
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Customization Tool */}
        <section id="customize" className="py-24 bg-slate-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Preview Area */}
              <div className="lg:sticky lg:top-24">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <Card className="relative overflow-hidden border-none shadow-2xl">
                    <CardHeader className="bg-white border-b">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Live Preview</CardTitle>
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-red-400" />
                          <div className="h-2 w-2 rounded-full bg-yellow-400" />
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 aspect-square relative bg-[#F5F5DC] flex items-center justify-center">
                      {/* Rug Base */}
                      <div className="w-[85%] h-[85%] bg-white shadow-inner rounded-sm flex items-center justify-center overflow-hidden border-[12px] border-slate-200/50 relative">
                        {/* Texture Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
                        
                        <div className="text-center p-12 relative z-10">
                          <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Upload className="h-10 w-10 text-primary" />
                          </div>
                          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Upload Design</p>
                        </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black border shadow-xl flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        5' x 7' • WHITE BASE
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
                  <h2 className="text-4xl font-bold mb-4 tracking-tight">CONFIGURE YOUR RUG</h2>
                  <p className="text-lg text-muted-foreground font-medium">Follow the steps below to create your custom piece.</p>
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
                        { id: "s", label: "SMALL", size: "4' x 6'", price: "$199" },
                        { id: "m", label: "MEDIUM", size: "5' x 7'", price: "$249" },
                        { id: "l", label: "LARGE", size: "6' x 9'", price: "$349" },
                        { id: "h", label: "HUGE", size: "9' x 12'", price: "$599" },
                        { id: "r", label: "ROUND", size: "5' Round", price: "$229" },
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
                        We'll use two distinct paint colors for your design, adding depth and detail to your custom piece.
                      </TabsContent>
                    </Tabs>
                  </div>

                  <Button className="w-full h-16 text-xl font-black tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 rounded-2xl">
                    <ShoppingCart className="mr-3 h-6 w-6" /> ADD TO CART
                  </Button>
                </div>
              </div>
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
                    "The preview is accurate — but this is still hand work. Each rug has character. That’s the point."
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
                <Image src="/images/logo.png" alt="Rug Detail" fill className="object-contain p-20 opacity-20 grayscale" />
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
                  FROM S.A.I.C. TO <br />
                  <span className="text-primary">YOUR LIVING ROOM.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-400 font-medium leading-relaxed">
                  <p>
                    Rugly was born from a love for the arts and letters, and a frustration with the lack of truly customized flooring solutions. 
                  </p>
                  <p>
                    With formal training from the School of the Art Institute of Chicago, we bring an artist's eye to every piece we create. Every rug is hand-painted in our studio.
                  </p>
                  <p>
                    We don't just print; we create durable, functional art that transforms your space.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 w-fit">
                  <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center font-black text-2xl shadow-lg shadow-primary/20">RH</div>
                  <div>
                    <p className="font-bold text-xl">RYAN HENSLEY</p>
                    <p className="text-sm text-slate-500 font-black tracking-widest">FOUNDER, RUGLY</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] bg-gradient-to-br from-primary/20 to-teal-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  <Image src="/images/logo.png" alt="Rugly Brand" width={300} height={300} className="opacity-50 grayscale brightness-200" />
                </div>
                {/* Decorative elements */}
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
            </div>
            <div>
              <h4 className="font-black text-xs tracking-[0.2em] mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">HOW IT WORKS</a></li>
                <li><a href="#customize" className="hover:text-primary transition-colors">CUSTOMIZE</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">ABOUT US</a></li>
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
