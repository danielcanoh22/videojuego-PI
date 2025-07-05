export const PhoneMessage = ({ phoneMessage }: { phoneMessage: string }) => {
  return (
    <div className="bg-gray-500 text-white w-[90%] p-2 ml-2 rounded-lg border-2 border-gray-700 h-max self-end mb-6">
      {phoneMessage}
    </div>
  );
};
