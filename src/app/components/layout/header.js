import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between px-24">
        <Link className="text-primary font-semibold text text-2xl" href="">ST PIZZA</Link>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link className="bg-primary rounded-full text-white px-8 py-2" href={''}>Login</Link>
        </nav>
      </header>
    );
}