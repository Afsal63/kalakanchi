import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  metadataBase: new URL("https://kalakanchi.com"),
  title: {
    default: "KalaKanchi | Premium Kanchipuram Sarees",
    template: "%s | KalaKanchi",
  },
  description:
    "Premium export-quality Kanchipuram sarees with luxury designs for global buyers.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Kanchipuram sarees",
    "premium silk sarees",
    "export sarees",
    "luxury saree collection",
    "bridal sarees",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
