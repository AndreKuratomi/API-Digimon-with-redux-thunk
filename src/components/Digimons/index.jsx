import { useSelector } from "react-redux";

export const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <>
      <ul>
        {digimons.map((elt, index) => (
          <li key={index}>{elt}</li>
        ))}
      </ul>
    </>
  );
};
