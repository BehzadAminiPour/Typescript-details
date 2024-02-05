import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  image: { src: string; alt: string };
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <>
      <img {...image} />
      {children}
    </>
  );
};

export default Header;
