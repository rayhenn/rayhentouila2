export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Cicadas Gaming",
    description:
      "Cicadas Gaming, leader de l'esport en région PACA, se distingue par sa convivialité et son ambition. Cette organisation s'engage à propulser la scène esportive locale vers le niveau mondial.",
    technologies: ["Photoshop"],
    github: "https://www.behance.net/gallery/186376451/Cicadas-Gaming-2023-Assets-Visuals?",
    image: require(".//../../Public/projects/cicadasgaming.png"),
    available: true,
  },
  {
    id: 1,
    name: "Motion Design For Brands",
    description:
      "Retrouvez un condensé de la plupart de mes projets réalisés sur After Effects : des projets personnels, scolaires, commerciaux, tout y est. N'hésitez pas à me donner votre avis, j'espère que cela vous plaira !",
    technologies: ["After Effect"],
    github: "https://www.behance.net/gallery/188012625/Motion-Desgin-For-Brands",
    image: require(".//../../Public/projects/mdfb.png"),
    available: true,
  },
  {
    id: 2,
    name: "Overlay Twitch",
    description:
      "Les overlays Twitch personnalisent chaque diffusion en direct, agissant comme une signature visuelle distinctive. En superposant des éléments graphiques, ils vont au-delà de l'esthétique pour offrir une expérience immersive, affichant des données essentielles telles que les abonnés, les donateurs et des animations pour captiver les spectateurs.",
    technologies: ["Photoshop", "After Effect",],
    github: "https://www.behance.net/gallery/185989117/Twitch-Overlay",
    image: require(".//../../Public/projects/flixify.png"),
    available: true,
  },
  {
    id: 3,
    name: "Ti'dej",
    description:
      "J'ai conçu un site web pour un restaurant de petit déjeuner, orienté exclusivement vers le Click & Collect et la livraison. Sans contraintes particulières, j'ai laissé libre cours à ma créativité pour offrir une expérience utilisateur optimale.",
    technologies: ["Photoshop", "Figma"],
    github: "https://www.behance.net/gallery/158366939/Webdesign-Ptit-dej",
    image: require(".//../../Public/projects/Tidej.png"),
    available: true,
  },
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../Public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../Public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    image: "/_next/image?url=%2F..%2FPublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    image: "/_next/image?url=%2F..%2FPublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    image:
      "/_next/image?url=%2F..%2FPublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    image: "/_next/image?url=%2F..%2FPublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
