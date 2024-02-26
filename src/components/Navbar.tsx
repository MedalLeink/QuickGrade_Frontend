import notice from "../assets/notifications.svg";

interface Props {
  name: string;
//   image: string;
}

function Navbar(props: Props) {
  return (
    <div className="w-full h-[72px] pl-[60px] fixed top-0 z-0 pr-[120px] py-3.5 bg-white shadow-lg flex justify-end items-center">
      <div className="justify-start items-center gap-2 flex ">
        <button>
          <img src={`${notice}`} />
        </button>
        <div className="text-gray-900 text-base font-normal font-Inter leading-snug tracking-tight">
          Welcome, {props.name}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
