import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Guildry — Run Services Smarter",
  description: "Project intelligence platform for services firms — scope, staff, deliver, and learn from every project",
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
