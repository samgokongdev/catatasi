import Logo from "../components/svg/logo";
import { useState } from "react";
import nookies from "nookies";
import Router from "next/router";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (cookies.token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login() {
  const [isian, setIsian] = useState({});
  // const [berjalan, setBerjalan] = useState(false);
  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setIsian({
      ...isian,
      [name]: value,
    });
  }

  async function doLogin(e) {
    e.preventDefault();
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL_AWAL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isian),
    });
    const res = await req.json();
    if (res.jwt) {
      nookies.set(null, "token", res.jwt);
      nookies.set(null, "user", res.user._id);
      Router.replace("/");
    }
  }

  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <div className="flex justify-center pb-8">
          <Logo />
        </div>
        <form onSubmit={doLogin} className="">
          <div>
            <label className=" tracking-widest text-xs text-pinkt font-light antialiased">
              Email or Username
            </label>
            <div className="mt-1">
              <input
                id="identifier"
                name="identifier"
                type="email"
                required
                onChange={setValue}
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <label className="tracking-widest text-xs text-pinkt font-light antialiased">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={setValue}
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-pinkt rounded-lg py-1.5 text-sm font-semibold text-putih tracking-widest"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-10 text-xxs text-pinkt font-light tracking-wider">
          Need Account?
        </div>
        <div className="my-2">
          <Link href="/register">
            <a className="w-full flex justify-center bg-pinkss rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
              Register
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
