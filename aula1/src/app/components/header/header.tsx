import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex px-6 py-4 bg-blue-300 text white">
        <div className="flex items-center justify-between w-full mx-auto maxx-w-7x1">
            <div className="text-black font-famyly:'courier-new',courier,monospace font-bold text-lg">
                NextJs
            </div>
            <nav>
                <ul className="flex text-black items-center justify-center gap-2">
                                           
                    <li className="flex items-center">
                       <Link href="/">
                            <Image
                            src="/casa.png"
                            alt="home"
                            width={22}
                            height={22}
                            className="p-1"
                        />
                        </Link>
                    </li>

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
        </div>
   
    </header>
  )}