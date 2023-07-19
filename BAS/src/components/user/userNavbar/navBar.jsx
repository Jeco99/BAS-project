import BASlogo from "./BAS-Logo-1.2.png";

export default function Navbartst() {
  return (
    <nav className="bg-beetleGreen fixed w-full h-16 flex items-center justify-between p-2 text-sm sm:text-xl">
  <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <a href="#" className="flex">
        <img src={BASlogo} className="h-10 mr-3" alt="BAS Logo" />
        <span className="self-center font-semibold whitespace-nowrap hidden sm:block">
          Barangay Appointment System
        </span>
      </a>
      <div className="flex items-center font-semibold whitespace-nowrap">
        <img
          alt="notification bell"
          src="https://cdn.icon-icons.com/icons2/2807/PNG/512/notification_bell_icon_178938.png"
          className=" flex h-6 w-6"
        />
        <div className="flex flex-col sm:flex-row">
        <p>Welcome, {' '} </p><span>John</span>
        </div>
       
      </div>
    </nav>
  );
}
