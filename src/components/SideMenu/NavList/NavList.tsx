import {FaRegCheckSquare, FaRegClock, FaTasks} from "react-icons/fa";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FaTasks className='size-5' />,
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare className='size-5' />,
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaRegClock className='size-5' />,
    },
  ];
  return (
    <div className='mt-24'>
      <div>NavList</div>
      <div>NavList1</div>
      <div>NavList2</div>
    </div>
  );
};

export default NavList;
