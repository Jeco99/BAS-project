import { useState, useEffect } from "react";
import Notifications from "react-notifications-menu";
import { useParams } from "react-router-dom";

const notification_Loader = async (id) => {
    const response = await fetch(`http://localhost:3001/notification/fetch/${id}`);
    const notification_data = await response.json();
    return notification_data;
  };


const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago"
};
export default function Notification() {
    const [notifData, setNotifData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function init() {
          const data = await notification_Loader(id);
          setNotifData(data);
        }
        init();
      }, []);
    return (
    <Notifications
      className="hover:text-morningGlory mr-2 h-6 w-6"
          data={notifData}
          header={{
            title: "Notifications",
            option: { text: "View All", onClick: () => console.log("Clicked") }
          }}
          markAsRead={(notifData) => {
            console.log(notifData);
          }}
        />
  )
  
}

