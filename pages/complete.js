import Logo from "../components/svg/logo";
import Link from "next/link";

export default function Complete() {
  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <div className="flex justify-center pb-8">
          <Logo />
        </div>
        <div className="text-pinkt font-bold flex justify-center">
          <div>Registrasi Berhasil !!</div>
        </div>
        <div className="text-pinkt font-bold flex justify-center">
          <Link href="/login">
            <a className="w-1/2 mt-3 py-1 items-center text-center rounded-lg bg-pinkt text-putih">
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
