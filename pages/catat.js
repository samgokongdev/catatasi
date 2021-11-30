import Link from "next/link";

export default function Catat() {
  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <p className="text-2xl text-pinkt font-bold break-words w-2/3 leading-6">
          Catat
        </p>
        <div className="text-2xl text-pinkt font-bold leading-6">
          Produksi ASI
        </div>
        <div className="mt-5 text-pinkt font-light tracking-wider text-xs">
          Catat produksi ASI ibu melalui form di bawah
        </div>
        <form className="mt-5">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div>
                <label
                  for="kiri"
                  className="tracking-normal text-xs text-pinkt font-medium antialiased"
                >
                  Kiri
                </label>
                <div className="">
                  <input
                    id="kiri"
                    name="kiri"
                    type="text"
                    placeholder="Contoh : 80"
                    required
                    className="w-full inline-block placeholder-pinks border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  for="kanan"
                  className="tracking-normal text-xs text-pinkt font-medium antialiased"
                >
                  Kanan
                </label>
                <div className="">
                  <input
                    id="kanan"
                    name="kanan"
                    type="text"
                    placeholder="Contoh : 80"
                    required
                    className="w-full inline-block placeholder-pinks border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-3">
            <div>
              <div>
                <label
                  for="kiri"
                  className="tracking-normal text-xs text-pinkt font-medium antialiased"
                >
                  Waktu Pumping
                </label>
                <div className="">
                  <input
                    id="kiri"
                    name="kiri"
                    type="datetime-local"
                    required
                    className="placeholder-pinks  w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
                    placeholder="Format : 00:00, Contoh 07:00"
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
              Catat
            </button>
          </div>
        </form>
        <Link href="/">
          <a className=" mt-2 flex justify-center items-center w-full bg-pinks rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
            Cancel
          </a>
        </Link>
      </div>
    </div>
  );
}
