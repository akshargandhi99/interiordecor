import Footer from "@/components/footer/footer";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import StoreProvider from "@/store/store-context";

export const metadata = {
  title: "Avani Vaidya",
  description:
    "Welcome to AVSDS! I’m Avani Vaidya, I create modern, personalized interiors that balance style and function, reflecting each client’s unique vision. Explore my design portfolio for inspiration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <StoreProvider>{children}</StoreProvider>
        <Footer />
        {/* <Image
          src="/static/Glass effect 1.webp"
          alt="Glass Effect Background"
          fill={true}
          className={styles.backgroundImage}
        /> */}
      </body>
    </html>
  );
}
