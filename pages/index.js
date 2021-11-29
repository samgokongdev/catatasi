import Head from "next/head";
import List from "../components/list";
import Menubtn from "../components/svg/menubtn";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col min-h-screen px-6 bg-pinkm">
      <Head>
        <title>CatatanASI</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="pt-6 text-pinkt">
        <div className="flex">
          <Menubtn />
        </div>
        <div className="pt-6 font-extrabold text-base tracking-wider">
          Halo Mega
        </div>
        <div className="text-xs">Selamat Datang di Aplikasi CatatanASI</div>
      </div>

      <div className="pt-5 h-2/3 mb-auto">
        <section>
          <div className="bg-putih text-white w-full h-28 text-center justify-center flex flex-col rounded-lg text-pinkt">
            <div className="text-xs font-semibold tracking-wider">
              Total Produksi ASI Hari ini
            </div>
            <div className="text-lg font-bold tracking-tighter">1500 ml</div>
          </div>
        </section>

        <section className="pt-5 text-pinkt">
          <div className="text-xs">Detail</div>
          <div className="bg-putih text-white w-full flex flex-col rounded-lg p-5">
            <div className="flex w-full items-center">
              <span className="text-xs font-light tracking-wide w-8/12">
                Produksi Hari Ini :
              </span>
              <button className="text-xxs bg-pinkt text-putih py-1 px-2 items-end w-4/12 text-center rounded-xl">
                Tambah
              </button>
            </div>
            <div className="pt-5 divide-y divide-opacity-50 divide-pinks">
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </section>
      </div>
      <div className="text-xxs text-center py-5 text-pinkt">CatatanASI</div>
    </div>
  );
}
