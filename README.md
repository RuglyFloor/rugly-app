# Rugly Custom Rugs

This is the custom web application for Rugly, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features
- Custom rug configuration tool (Size, Base Color, Image Upload)
- Hybrid design: Artist Studio meets Industrial Minimalist
- Shopify Storefront API integration (ready for connection)

## Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`
   - Add your `SHOPIFY_STOREFRONT_ACCESS_TOKEN` from your Shopify admin (Settings > Apps and sales channels > Develop apps).
4. **Run the development server**: `npm run dev`

## Deployment

This project is ready to be deployed on **Vercel**.

## GitHub Push Instructions

To push this code to your GitHub account (`ruglyfloor`):

1. Create a new repository on GitHub named `rugly-app`.
2. Run the following commands in your terminal:
   ```bash
   git remote add origin https://github.com/ruglyfloor/rugly-app.git
   git branch -M main
   git push -u origin main
   ```
