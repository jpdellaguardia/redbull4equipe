export const SubmitButton = ({ label }) => { 
  return (
    <button
      type="submit"
      className={`text-white bg-black font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5`}
    >
      {label}
    </button>
  );
};