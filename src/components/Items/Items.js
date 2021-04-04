import React from "react";
import { img1, img2, img3, img4, img5 } from "../../images/index";
import HeroSection from "../HeroSection/HeroSection";
import Button from "../UI/Button/Button";
import styles from "./Items.module.scss";

const Item = () => {
  const { image, content, main, itemSection, headline, text } = styles;

  const items = [
    {
      cls: "section-1",
      img: img1,
      title: "Лувр, Париж",
      descr:
        "Несомненно, один из самых известных музеев мира. Изначально он служил крепостью и дворцом французских королей. Коллекция Лувра - это полная палитра всех эпох - от античности до современности. Ежегодно музей посещают почти два миллиона туристов. Воспользуйтесь шансом насладиться шедеврами Лувра в виртуальном режиме.",
      link: "https://www.louvre.fr/en/visites-en-ligne",
    },
    {
      cls: "section-2",
      img: img2,
      title: "Музей Орсе, Париж",
      descr:
        "Коллекция этого парижского музея включает работы художников, работавших с середины 19 века до 1914 года. Большая популярность импрессионистов и масштабность коллекции, а также место, где расположен музей, то есть преобразованный зал бывшего железнодорожного вокзала, ежегодно привлекают огромные толпы туристов. Во время онлайн-тура вы сможете узнать об истории заведения, а затем погрузиться в творчество мастеров.",
      link:
        "https://artsandculture.google.com/partner/musee-dorsay-paris?hl=en",
    },
    {
      cls: "section-3",
      img: img3,
      title: "Британский музей, Лондон",
      descr:
        "Этот музей расположен в самом центре Лондона и был основан в 1753 году. Из его огромных коллекций, состоящих из 7 миллионов экспонатов, 4 миллиона выставлены на обозрение. Благодаря кураторам, которые создали виртуальные выставки, можно насладиться шедеврами не выходя из дома.",
      link: "https://britishmuseum.withgoogle.com/",
    },
    {
      cls: "section-4",
      img: img4,
      title: "Галерея Уффици, Флоренция",
      descr:
        "Галерея Уффици - один из старейших музеев Европы, который был основан в 1581 году. В нем хранятся коллекции великой семьи Медичи - мекка для любителей истории искусства. Среди прочего, в галерее представлены известные работы Боттичелли и Тициана",
      link: "https://artsandculture.google.com/partner/uffizi-gallery?hl=en",
    },
    {
      cls: "section-5",
      img: img5,
      title: "Национальная художественная галерея, Вашингтон",
      descr:
        "Коллекция этой галереи, основанной в 1937 году, базируется на произведениях, подаренных частными коллекционерами. Самые известные художники, чьи картины можно найти там: Альбрехт Дюрер, Эль Греко, Эдуард Мане и Ян Вермеер. ",
      link:
        "https://artsandculture.google.com/partner/national-gallery-of-art-washington-dc?hl=en",
    },
  ];

  return (
    <main className={main}>
      <HeroSection />
      {items.map(({ cls, img, title, descr, link }, i) => {
        return (
          <section key={i} className={[cls, itemSection].join(" ")}>
            <div className={image}>
              <img src={img} alt={title} />
            </div>
            <div className={content}>
              <h2 className={headline}>{title}</h2>
              <p className={text}>{descr}</p>
              <Button src={link}>Перейти на сайт</Button>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Item;
