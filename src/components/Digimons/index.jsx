import { useSelector } from "react-redux";
import { Div } from "./styles";

export const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  console.log({ digimons });
  return (
    <>
      <Div>
        {digimons.map((digimon, index) => (
          <div key={index}>
            <div>{digimon}</div>
            {/* <img src={digimon} />
            <div>{digimon}</div> */}
          </div>
        ))}
      </Div>
    </>
  );
};
