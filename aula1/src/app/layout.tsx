import "./globals.css";

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
            <li><a href="http://localhost:3000">Início</a></li>
            <li><a href="http://localhost:3000/personagens">Personagens</a></li>
            <li><a href="http://localhost:3000/historia">História</a></li>
            <li><a href="http://localhost:3000/gameplay">Gameplay</a></li>
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
