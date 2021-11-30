import About from "../components/svg/about";
import Artikel from "../components/svg/artikel";
import Contact from "../components/svg/contact";
import Histori from "../components/svg/histori";
import Logo from "../components/svg/logo";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="mx-auto flex flex-col min-h-screen px-6 bg-pinkm">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="pb-10">
          <Logo />
        </div>
        <div className="grid grid-cols-2 gap-3 text-pinkt">
          <Link href="/cari">
            <a>
              <div className="bg-putih text-white flex flex-col rounded-lg px-10 py-8">
                <span>
                  <Histori />
                </span>
                <div className="text-sm font-medium">Histori</div>
              </div>
            </a>
          </Link>

          <Link href="/about">
            <a>
              <div className="bg-putih text-white flex flex-col rounded-lg px-10 py-8">
                <span>
                  <About />
                </span>
                <div className="text-sm font-medium">Tentang</div>
              </div>
            </a>
          </Link>

          <Link href="/kontak">
            <a>
              <div className="bg-putih text-white flex flex-col rounded-lg px-10 py-8">
                <span>
                  <Contact />
                </span>
                <div className="text-sm font-medium">Kontak</div>
              </div>
            </a>
          </Link>

          <Link href="/petunjuk">
            <a>
              <div className="bg-putih text-white flex flex-col rounded-lg px-10 py-8">
                <span>
                  <Artikel />
                </span>
                <div className="text-sm font-medium">Petunjuk</div>
              </div>
            </a>
          </Link>

          <button className="col-span-2 bg-pinkt text-putih h-7 px-2 w-full text-center text-sm font-medium rounded-lg">
            Logout
          </button>
          <Link href="/">
            <a className="flex items-center justify-center col-span-2 bg-putih text-pinkt h-7 px-2 w-full text-center text-sm font-medium rounded-lg">
              Homepage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
