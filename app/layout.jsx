import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Guildry — Run Services Smarter",
  description: "AI-powered tools for freelancers and agencies to scope, staff, and deliver client work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
