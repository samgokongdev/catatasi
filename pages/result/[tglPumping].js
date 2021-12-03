import List from "../../components/list";
import Menubtn from "../../components/svg/menubtn";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { tglPumping } = context.query;
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/?${tglPumping}`);
  const dataPumping = await req.json();
  return {
    props: {
      dataPumping,
    },
  };
}

export default function Historis(props) {
  const { dataPumping } = props;
  return (
    <div className="mx-auto flex flex-col min-h-screen px-6 bg-pinkm">
      <div className="pt-6 text-pinkt">
        <div className="pt-6 font-extrabold text-base tracking-wider">
          Produksi ASI
        </div>
        <div className="text-xs"></div>
      </div>
      <div className="bg-putih text-pinkt w-full flex flex-col justify-center items-center h-auto rounded py-5 mt-3">
        <div className=" font-medium text-xs">Total Produksi</div>
        <div className=" from-pinkt tracking-tighter text-xl font-bold mt-1">
          1100 ml
        </div>
      </div>
      <div className="mb-auto">
        <div className="bg-putih text-pinkt text-white w-full flex flex-col rounded-lg p-5 mt-4">
          <div className="flex w-full items-center">
            <span className="text-xs font-light tracking-wide w-8/12">
              Produksi Hari Ini :
            </span>
          </div>
          <div className="pt-2 divide-y divide-opacity-50 divide-pinks">
            {dataPumping.map((sss) => {
              return (
                <div key={sss.id}>
                  <List {...sss} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 text-center bg-pinkt rounded py-2 text-putih font-medium text-xs">
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </div>
      </div>
      <div className="text-xxs text-center py-5 text-pinkt">CatatanASI</div>
    </div>
  );
}
