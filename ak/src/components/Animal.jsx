import randColor from "../Functions/randColor";

function Animal({ name, photo }) {
  return (
    <>
      <figcaption style={{ backgroundColor: randColor() }}>{name}</figcaption>
      <img src={photo} alt={name + '-animal'} style={{width: '1000px'}}/>
    </>
  );
}

export default Animal;
