import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="shadow-md">
      <div id="wrapper" className="flex justify-between">
        <Link href="/">
          <a className="font-8bit">PLAINROCK124</a>
        </Link>
        <nav className="flex gap-x-4">
          <Link href="/bored-smashing">Bored Smashing</Link>
          <Link href="/moving-on">Moving On...</Link>
          <Link href="/vlogs">Vlogs</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}