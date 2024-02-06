import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  image: { src: string; alt: string };
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <>
      <img className="w-48" {...image} />
      {children}
    </>
  );
};

export default Header;
