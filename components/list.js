export default function List() {
  return (
    <div className="py-1">
      <div className="text-xxs">28/11/2021</div>
      <div className="pt-2 flex w-full">
        <div className="flex flex-col w-5/12">
          <span className="text-pinks text-xxs">Kiri</span>
          <span className="text-xs font-semibold tracking-tighter">90 ml</span>
        </div>
        <div className="flex flex-col w-5/12">
          <span className="text-pinks  text-xxs">Kanan</span>
          <span className="text-xs font-semibold tracking-tighter">100 ml</span>
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
  );
}
