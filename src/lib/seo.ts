import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export function generateSEOMetadata({
  title = "Your Website - Get More Clients, Products & Better Leads",
  description = "Transform your digital presence with stunning designs that convert visitors into loyal customers. Professional web solutions to get more clients, showcase your products, and generate better leads.",
  keywords = ["web design", "digital marketing", "lead generation", "clients", "products", "business website", "conversion optimization"],
  ogImage = "/og-image.jpg",
  canonical
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Your Company" }],
    creator: "Your Company",
    publisher: "Your Company",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      alternateLocale: ["en_US"],
      title,
      description,
      siteName: "Your Website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@yourcompany",
    },
    alternates: {
      canonical: canonical || "/",
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  };
}