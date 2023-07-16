<<<<<<< Updated upstream
import "./sideBar.css"

export default function Sidebartst() {
    return (
<div>
<aside id="default-sidebar" 
className="fixed left-0 z-40 w-64 mt-16 h-screen transition-transform -translate-x-full sm:translate-x-0" 
aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
   <img 
     alt="user photo"
     src="https://static.thenounproject.com/png/4035887-200.png"
     className="w-40 h-40 items-center flex  ml-6 shadow-md"
        />
        <br/>
        <br/>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" 
            className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
                <span className="flex-1 whitespace-nowrap">
                    Dashboard
                </span>
            </a>
         </li>
         <li>
            <a href="#" 
            className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
               <span className="flex-1 whitespace-nowrap">
                Appointment
                </span>
              </a>
         </li>
         <li>
            <a href="#" 
            className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
               <span className="flex-1 whitespace-nowrap">History</span>
              </a>
         </li>
         <li>
            <a href="#" 
            className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
               <span className="flex-1 whitespace-nowrap">Account Setting</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
</div>
    )
}
=======
import "./sideBar.css";
// import Footer from "../../../footer/footer";
// import sidebarMenu from "./sidebarMenu";

export default function Sidebartst() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed left-0 z-40 w-64 mt-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
          <img
            alt="user photo"
            src="https://static.thenounproject.com/png/4035887-200.png"
            className="w-40 h-40 items-center flex  ml-6 shadow-md my-6"
          />

          <ul className="space-y-2 font-medium">  
          <li>
              <a
                href="#"
                className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 whitespace-nowrap">Dashboard</span>
              </a>
            </li>   
            <li>
              <a
                href="#"
                className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 whitespace-nowrap">Appointment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 whitespace-nowrap">History</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex shadow-lg items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 whitespace-nowrap">
                  Account Setting
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
>>>>>>> Stashed changes
