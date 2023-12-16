import "@styles/globals.css";

export const metadata = {
  title: "Home Page",
  description: "Gabriel Dream Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
