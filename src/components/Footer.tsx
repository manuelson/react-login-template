import { Footer } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
  }
};

const FooterComponent = () => {
  return (
    <Footer theme={customTheme} container className="px-2 py-2.5 sm:px-4 container mx-auto">
      <Footer.Copyright by="manugonzalez.com" year={2024} />
    </Footer>
  );
};

export default FooterComponent;
