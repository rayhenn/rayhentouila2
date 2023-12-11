export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: "Jujutsu Kaisne",
    artist: "Gege Akutami",
    image: require("../../Public/songs/jujutsu-kaisen.jpeg"),
    link: "https://www.crunchyroll.com/fr/series/GRDV0019R/jujutsu-kaisen",
  },
  {
    title: "Snowfall",
    artist: "John Singletone",
    image: require("../../Public/songs/snowfall.webp"),
    link: "https://www.canalplus.com/series/snowfall/h/9155494_50001",
  },
  {
    title: "Prime",
    artist: "Prime",
    image: require("../../Public/songs/prime.webp"),
    link: "https://www.youtube.com/channel/UC_zDtZY3IxchiJjTu4Vq_Zg",
  },
  {
    title: "The Climber",
    artist: "The Climber",
    image: require("../../Public/songs/Theclimber.webp"),
    link: "https://en.wikipedia.org/wiki/Kokou_no_Hito",
  },
  {
    title: "Volley Ball Nations League",
    artist: "VNL",
    image: require("../../Public/songs/VNL.webp"),
    link: "https://en.volleyballworld.com/volleyball/competitions/vnl-2023/",
  },
  {
    title: "Inoxtag",
    artist: "Inox",
    image: require("../../Public/songs/inoxtag.webp"),
    link: "https://www.youtube.com/@inoxtag",
  },
  {
    title: "Haikyuu",
    artist: "Haikyuu",
    image: require("../../Public/songs/haikyuu.webp"),
    link: "https://www.crunchyroll.com/fr/series/GY8VM8MWY/haikyu",
  },
  {
    title: "Genshin Impact",
    artist: "Genshin impact",
    image: require("../../Public/songs/genshin.jpg"),
    link: "https://genshin.hoyoverse.com/fr/",
  },
  {
    title: "Vinland Saga",
    artist: "Sonder",
    image: require("../../Public/songs/vinland.jpeg"),
    link: "https://www.netflix.com/fr/title/81249833",
  },
  {
    title: "Randonnée",
    artist: "Rando",
    image: require("../../Public/songs/rando.jpeg"),
    link: "",
  },
];
