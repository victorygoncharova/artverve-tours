import React from "react";
import { img7 } from "../../images/index";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { hero, image, content, headline, subtext } = styles;

  return (
    <section className={hero}>
      <div className={image}>
        <img src={img7} alt="Виртуальные туры по полереям и музеям" />
      </div>
      <div className={content}>
        <h1 className={headline}>
          Как наслаждаться шедеврами художников, находясь на карантине?
        </h1>
        <p className={subtext}>
          В последнее время мы проводим дома гораздо больше времени, чем обычно.
          Но не стоит скучать, ведь даже находясь в четырех стенах, можно
          посетить одни из самых красивых музеев мира. Все больше и больше
          галерей предлагают виртуальные туры или размещают свои коллекции в
          Интернете.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
