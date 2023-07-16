import BASlogo from "./BAS-Logo-1.2.png"

export default function Navbartst() {
    return (
<div>
            
  <nav className="bg-teal-700 dark:bg-gray-900 fixed w-full h-16">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex">
        <img src={BASlogo} className="h-10 mr-3" alt="BAS Logo"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Barangay Appointment System</span>
      </a>
      <div className="flex self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      <img 
          alt="notification bell"
          src="https://cdn.icon-icons.com/icons2/2807/PNG/512/notification_bell_icon_178938.png"
          className=" flex h-6 w-6 mr-3"
        />
        <p>Welcome, John</p>
      </div>
    </div>
  </nav>
</div>
    )
}