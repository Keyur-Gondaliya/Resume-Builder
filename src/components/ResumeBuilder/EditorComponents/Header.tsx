import React, { ReactNode } from "react";
import { Data, HeaderArea } from "../general";
interface Props {
  title: string;
  score: number;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Header({ title, score, setData }: Props) {
  return (
    <div className="r-form-heading">
      <input
        type="text"
        className="form-control w-25"
        placeholder="Add your Label"
        style={{ fontSize: "28px", backgroundColor: "white", fontWeight: 500 }}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData((prev) => ({
            ...prev,
            header: { ...prev.header, title: e.target.value },
          }));
        }}
      />
      {/* <h2 className="r-form-heading-title">{title}</h2> */}
      <div className="progress">
        <span
          className="title timer"
          data-from="0"
          data-to="85"
          data-speed="1800"
        >
          {score}%
        </span>
        <div className="overlay"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}
