import { useDrag } from "react-dnd";
import { ReactNode } from "react";
import { PhoneBottombar } from "./PhoneBottombar";

export const PhoneLayout = ({ children }: { children: ReactNode }) => {
  const [_, drag] = useDrag(() => ({
    type: "PHONE_LAYOUT",
    item: { id: "phone-layout" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] cursor-pointer"
      ref={drag}
    >
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="grid grid-rows-[auto_1fr_auto] bg-gray-600 w-full h-full">
          {children}
          <PhoneBottombar />
        </div>
      </div>
    </div>
  );
};
