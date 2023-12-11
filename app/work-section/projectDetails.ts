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
    name: "Overlay Twitch",
    description:
      "Les overlays Twitch personnalisent chaque diffusion en direct, agissant comme une signature visuelle distinctive. En superposant des éléments graphiques, ils vont au-delà de l'esthétique pour offrir une expérience immersive, affichant des données essentielles telles que les abonnés, les donateurs et des animations pour captiver les spectateurs.",
    technologies: ["Photoshop", "After Effect",],
    github: "https://www.behance.net/gallery/185989117/Twitch-Overlay?",
    image: require(".//../../Public/projects/flixify.png"),
    available: true,
  },
  {
    id: 1,
    name: "SkyWatch",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["React", "CSS", "Chart.js"],
    github: "https://github.com/victorcodess/weather-forecast-website",
    image: require(".//../../Public/projects/skywatch-new.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Alpaca Image Generator",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/victorcodess/alpaca-image-generator",
    image: require(".//../../Public/projects/alpaca-new.webp"),
    available: true,
  },
  {
    id: 3,
    name: "Link Shortener",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/victorcodess/url-shortener",
    image: require(".//../../Public/projects/shortener-new.webp"),
    available: true,
  },
  // {
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
