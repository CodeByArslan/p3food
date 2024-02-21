import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between px-16">
        <Link className="text-primary font-semibold text text-2xl" href="/">ST PIZZA</Link>
        <nav className="flex gap-6 items-center text-gray-500 font-semibold">
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>
        <nav className=" flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={'/Login'}>Login</Link>
          <Link href={'/Register'} className="bg-primary rounded-full text-white px-8 py-2">Register</Link>
        </nav>
      </header>
    );
}