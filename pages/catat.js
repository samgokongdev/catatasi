import Logo from "../components/svg/logo";

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
          Tanggal 27 Oct 2021
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
                    required
                    className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
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
                    required
                    className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
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
                    type="text"
                    required
                    className="placeholder w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
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
      </div>
    </div>
  );
}
