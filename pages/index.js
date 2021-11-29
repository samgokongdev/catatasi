import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col min-h-screen px-6 bg-pinkm">
      <Head>
        <title>CatatanASI</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="pt-6 text-pinkt">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3.5H10.5V10.5H3.5V3.5Z"
              stroke="#641E42"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 13.5H10.5V20.5H3.5V13.5Z"
              stroke="#641E42"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 3.5H20.5V10.5H13.5V3.5Z"
              stroke="#641E42"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 13.5H20.5V20.5H13.5V13.5Z"
              stroke="#641E42"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
              <div className="py-1">
                <div className="text-xxs">28/11/2021</div>
                <div className="pt-2 flex w-full">
                  <div className="flex flex-col w-5/12">
                    <span className="text-pinks text-xxs">Kiri</span>
                    <span className="text-xs font-semibold tracking-tighter">
                      90 ml
                    </span>
                  </div>
                  <div className="flex flex-col w-5/12">
                    <span className="text-pinks  text-xxs">Kanan</span>
                    <span className="text-xs font-semibold tracking-tighter">
                      100 ml
                    </span>
                  </div>
                  <div className=" items-center w-2/12">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 8V24C24 25.4728 22.8061 26.6667 21.3333 26.6667H10.6667C9.1939 26.6667 7.99999 25.4728 7.99999 24V8M20 8V6.66667C20 5.19391 18.8061 4 17.3333 4H14.6667C13.1939 4 12 5.19391 12 6.66667V8M5.33333 8H26.6667M13.3333 13.3333V21.3333M18.6667 13.3333V21.3333"
                        stroke="#641E42"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-xxs text-center py-5 text-pinkt">CatatanASI</div>
    </div>
  );
}
