import { useSelector } from "react-redux";

export const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  console.log({ digimons });
  return (
    <>
      <ul>
        {digimons.map((digimon, index) => (
          <li key={index}>{digimon}</li>
        ))}
      </ul>
    </>
  );
};
