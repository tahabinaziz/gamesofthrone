import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(props.url);
        }}
        className={`bg-primary text-white px-4 py-2 rounded-md ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
}
