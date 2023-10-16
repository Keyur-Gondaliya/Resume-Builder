import InvalidIcon from "../Icons/Invalid";
interface Props {
  message: any;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minWidth: "15px",
          marginInline: "3px",
        }}
      >
        <InvalidIcon fill="red" />
      </div>
      {message}
    </div>
  );
}
