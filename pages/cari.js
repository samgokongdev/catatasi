import Logo from "../components/svg/logo";
import Link from "next/link";
import { useState } from "react";

import nookies from "nookies";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {},
  };
}
export default function Cari() {
  const [tglcari, setTglcari] = useState(new Date());
  let x = new Date(tglcari).toISOString().split("T")[0];
  let a = new Date(tglcari);
  let b = new Date(a.setDate(a.getDate() + 1));
  let c = b.toISOString().split("T")[0];
  // const b = new Date(a.setDate(a.getDate() + 1));
  // const c = b.toISOString();
  // const d = a.toISOString();
  // const tglcari3 = new Date(tglcari2.setDate(tglcari2.getDate() + 1));
  // console.log(a.toISOString().split("T")[0]);
  // console.log(c);
  // console.log(x);
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
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <div>
                <label className="tracking-normal text-xs text-pinkt font-medium antialiased">
                  Tanggal Pumping :
                </label>
                <div className="">
                  <input
                    id="kanan"
                    name="kanan"
                    type="date"
                    required
                    onChange={(e) => setTglcari(e.target.value)}
                    className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href={"/result/tglPumping_gte=" + x + "&tglPumping_lt=" + c}>
              <a>
                <button className="w-full bg-pinkt rounded-lg py-1.5 text-sm font-semibold text-putih tracking-widest">
                  Lihat
                </button>
              </a>
            </Link>
          </div>
        </div>
        <Link href="/menu">
          <a className="flex items-center justify-center mt-3 w-full bg-pinks rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
            Cancel
          </a>
        </Link>
      </div>
    </div>
  );
}
