import Link from "next/link";

export default function List(sss) {
  const tanggal = sss.tglPumping;
  const event = new Date(tanggal).toISOString();
  const x = new Date(tanggal).toISOString().substr(11, 5);
  const dd = new Date(tanggal).toISOString().substr(8, 2);
  const mm = new Date(tanggal).toISOString().substr(5, 2);
  const yy = new Date(tanggal).toISOString().substr(0, 4);
  return (
    <div className="py-1">
      <div className="text-xxs">
        Tanggal {dd}/{mm}/{yy} (Pukul : {x})
      </div>
      <div className="pt-2 flex w-full">
        <div className="flex flex-col w-5/12">
          <span className="text-pinks text-xxs">Kiri</span>
          <span className="text-xs font-semibold tracking-tighter">
            {sss.kiri} ml
          </span>
        </div>
        <div className="flex flex-col w-6/12">
          <span className="text-pinks  text-xxs">Kanan</span>
          <span className="text-xs font-semibold tracking-tighter">
            {sss.kanan} ml
          </span>
        </div>
        <div className=" items-center w-1/12">
          <Link href={"/delete/" + sss.id}>
            <a>
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
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
