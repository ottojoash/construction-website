import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import orangeCouch from "/public/stock/orange-couch.jpg";
import patio from "/public/stock/patio.jpg";
import hehe from "/public/stock/hehe.jpg";
import bun from "/public/stock/bun.jpg";
import sky from "/public/stock/sky.jpg";
import scrapper from "/public/stock/scrapper.jpg";
import brown from "/public/stock/brown.jpg";
import wall from "/public/stock/wall.jpg";
import barn from "/public/stock/barn.jpg";
import eye from "/public/stock/eye.jpg";
import fin from "/public/stock/fin.jpg";
import Oscar from "/public/stock/Oscar.jpg";
import Plasta from "/public/stock/Plasta.jpg";
import story from "/public/stock/story.jpg";
import tile from "/public/stock/tile.jpg";
import pave from "/public/stock/pave.jpg";


export default function Projects(props) {
  const images = [orangeCouch, patio];
  const projectImages = [
    orangeCouch,
    hehe,
    bun,
    sky,
    scrapper,
    brown,
    wall,
    barn,
    eye,
    fin,
    Oscar,
    Plasta,
    story,
    tile,
    pave,
  ];

  const imageGalleryData = images.map((image) => {
    return { original: image.src, thumbnail: image.src, originalHeight: 650 };
  });

  const projects = projectImages.map((image, i) => {
    return (
      <Image
        className="project-image "
        width={400}
        key={i}
        src={image}
        alt="project"
      />
    );
  });
  return (
    <>
      <Container fluid>
        <ImageGallery autoPlay={true} items={imageGalleryData} />
        <br></br>
        <br></br>
        <Container style={{ padding: 0 }}>{projects}</Container>
      </Container>
    </>
  );
}
