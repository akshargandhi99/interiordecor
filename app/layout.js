import Footer from "@/components/footer/footer";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import StoreProvider from "@/store/store-context";

const title =
  "Moulding the design around the end user's needs, lifestyle, and daily activities";
const description =
  "Welcome to AVSDS! Specialising in Spatial Interior Design, we cater to the evolving needs of our clients and believe in an informal way of working, where we understand your desires and needs and not limit design to requirements.";
export const metadata = {
  title,
  description,

  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: "/static/opengraph-image.png",
        width: 187,
        height: 187,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
