import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  bg?: string;
};

const Card: FC<CardProps> = ({ children, bg }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
