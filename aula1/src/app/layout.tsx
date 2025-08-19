import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <nav className="naves">
          <ul className="lista">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/personagens">Personagens</Link>
                    </li>
                     
                    <li>
                        <Link href="/historia">História</Link>
                    </li>

                    <li>
                        <Link href="/gameplay">Gameplay</Link>
                    </li> 
          </ul>
        </nav>

        <main>
        {children}
        </main>
        
        <footer className="rodape">
          <ul className="lista2">
            <li>OST</li>
            <li>YouTube</li>
            <li>GameJolt</li>
          </ul> 
        </footer>
      </body>
    </html>
  );
}
