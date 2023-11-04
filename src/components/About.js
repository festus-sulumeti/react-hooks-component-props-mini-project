export default function About(props) {
  const imgSrc = props.img || "https://via.placeholder.com/215"; 

  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

