import { MdOutlineEmojiEvents } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
export const sidebarItems = [
  { id: "0", title: "Dashboard", icons: <RxDashboard />, links: "/admin/home" },
  {
    id: "1",
    title: "All Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/events",
  },
  {
    id: "2",
    title: "Ongoing Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/ongoing-events",
  },
  {
    id: "3",
    title: "Past Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/past-events",
  },
];
