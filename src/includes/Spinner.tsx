import React from "react";

type Props = {};

export default function Spinner({}: Props) {
  return (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only"></span>
    </div>
  );
}
