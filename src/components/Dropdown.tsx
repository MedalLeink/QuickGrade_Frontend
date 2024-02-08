import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export interface Option {
  name: string;
  
  
}
const DropdownMenu = ({
  onTicketSelect,
}: {
  onTicketSelect: (ticket: Option) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const options: Option[] = [
    {name:"2021/2022"},
    {name:"2022/2023"},
    {name:"2023/2024"}
  ];

  const handleOptionSelection = (e: DropdownChangeEvent) => {
    const selectedOption = e.value as Option;
    setSelectedOption(selectedOption);
    onTicketSelect(selectedOption);
  };

  return (
    <div className="w-full h-[78px] items-start gap-[15px] self-stretch px-4 py-2 mb-4">
      <label className="self-stretch text-black font-normal font-Inter mb-2.5 leading-none tracking-tight">
        Select Ticket Types
      </label>
      <DropdownMenu
        value={selectedOption}
        required
        onChange={handleOptionSelection}
        options={options}
        optionLabel="name"
        placeholder="Choose Ticket"
        className="self-stretch h-[46px] focus:outline-none p-2.5 bg-gray-50 font-Inter rounded-[5px] border-b-2 border-green-500 items-center gap-2.5 w-full"
      />
    </div>
  );
};

export default DropdownMenu;