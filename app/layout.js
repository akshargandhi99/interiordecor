import Footer from "@/components/footer/footer";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "@/components/navbar/navbar";

export const metadata = {
  title: "Avani Vaidya",
  description:
    "Welcome to AVsds! I’m Avani Vaidya, founder and principal designer of the studio. With a Bachelor's in Architecture from Mumbai and a Master's in Interior Design from Italy, I've dedicated myself to specialising in Spatial Interior Design, focusing deeply on understanding how people live, move, and thrive in their environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <Image
          src="/static/Glass effect 1.webp"
          alt="Glass Effect Background"
          fill={true}
          className={styles.backgroundImage}
        ></Image>
      </body>
    </html>
  );
}
