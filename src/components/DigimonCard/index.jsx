import { Article, Image, Div } from "./styles";

const DigimonCard = ({ elt }) => {
  return (
    <Article>
      <Image src={elt.img} elt={elt.name} />
      <Div>
        <p>{elt.name}</p>
        <p>{elt.level}</p>
      </Div>
    </Article>
  );
};

export default DigimonCard;
