const Buttons = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  boarderColor,
  fullWidth,
}) => {
  return (
    <button className="flex justify-center items-centet gap-2 px-7 py-4 border font-montserrattext-lg leading-none bg-coral-red rounded-full">
      {label}
      <img
        src={iconURL}
        alt="arow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Buttons;
