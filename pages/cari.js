import Logo from "../components/svg/logo";
import Link from "next/link";

export default function Cari() {
  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <p className="text-2xl text-pinkt font-bold break-words w-2/3 leading-6">
          Lihat Riwayat
        </p>
        <div className="text-2xl text-pinkt font-bold leading-6">
          Produksi ASI
        </div>
        <div className="mt-5 text-pinkt font-light tracking-wider text-xs">
          Masukkan Tanggal Produksi ASI
        </div>
        <form className="mt-5">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <div>
                <label
                  for="kanan"
                  className="tracking-normal text-xs text-pinkt font-medium antialiased"
                >
                  Tanggal Pumping :
                </label>
                <div className="">
                  <input
                    id="kanan"
                    name="kanan"
                    type="date"
                    required
                    className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-pinkt rounded-lg py-1.5 text-sm font-semibold text-putih tracking-widest"
            >
              Lihat
            </button>
          </div>
        </form>
        <Link href="/menu">
          <a className="flex items-center justify-center mt-3 w-full bg-pinks rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
            Cancel
          </a>
        </Link>
      </div>
    </div>
  );
}
