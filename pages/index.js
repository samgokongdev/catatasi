import Head from "next/head";
import List from "../components/list";
import Menubtn from "../components/svg/menubtn";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps() {
  const tgl = new Date();
  const a = tgl.setHours(tgl.getHours() + 7);
  const b = new Date(a).toISOString().split("T")[0];
  console.log(b);
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/?tglPumping_gte=${b}`
  );
  const dataPumping = await req.json();

  return {
    props: {
      dataPumping,
    },
  };
}

export default function Home(props) {
  const { dataPumping } = props;
  return (
    <div className="mx-auto flex flex-col min-h-screen px-6 bg-pinkm">
      <Head>
        <title>CatatanASI</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="pt-6 text-pinkt">
        <div className="flex">
          <Link href="/menu">
            <a>
              <Menubtn />
            </a>
          </Link>
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
              <Link href="/catat">
                <a className="text-xxs bg-pinkt text-putih py-1 px-2 items-end w-4/12 text-center rounded-xl">
                  Tambah
                </a>
              </Link>
            </div>
            <div className="pt-5 divide-y divide-opacity-50 divide-pinks">
              {dataPumping.map((sss) => {
                return (
                  <div key={sss.id}>
                    <List {...sss} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="text-xxs text-center py-5 text-pinkt">CatatanASI</div>
    </div>
  );
}
