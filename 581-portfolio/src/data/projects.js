// Splitting projects list from original ProjectsSection.jsx aided using ChatGPT.

export const projects = [
    {
      id: 1,
      title: "A Family of Buttons",
      description: "A pixel art web application that illustrates my team's individual personalities and group dynamic through button interactions.",
      image: "/projects/project1.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://jasonvery.github.io/CPSC581Project1/",
      githubUrl: "https://github.com/Aljaysa/Button-Personality-Project",
      content: [
        {
          type: "text",
          value:
            "This project asked us to build a single-button interface per teammate—then use those buttons to reveal our group dynamic. I started by sketching a camera button, because I’m the kind of person who observes first and nudges the scene quietly instead of taking over.",
        },
        {
          type: "image",
          value: "/projects/project1.png", // <-- replace with your actual path
          alt: "Early camera button sketch",
        },
        {
          type: "text",
          value:
            "My first sketches focused on how the lens could “open” gradually (click by click), so the interaction feels earned instead of instant. I liked this because it mirrors how I warm up in group work: small steps, then fully engaged.",
        },
        {
          type: "image",
          value: "/projects/buttons/sketch-2.png", // <-- replace with your actual path
          alt: "Lens opening interaction sketches",
        },
        {
          type: "text",
          value:
            "From there, I mapped the interaction to our team dynamic: once fully open, the camera ‘notices’ other buttons and triggers a glow. The glow is a visual cue for support/attention—subtle, but constant.",
        },
        {
          type: "image",
          value: "/projects/buttons/sketch-3.png", // <-- replace with your actual path
          alt: "Glow / attention sketches",
        },
        {
          type: "text",
          value:
            "I iterated based on clarity: I kept the visuals simple (pixel-art friendly), and made sure the effect reads quickly even if you only interact for a few seconds.",
        },
      ],
    },
    {
      id: 2,
      title: "Expertise Sharing",
      description: "test",
      image: "/projects/project1.png",
      tags: ["test", "test", "test"],
      demoUrl: "#",
      githubUrl: "#",
  
      // optional: you can add later
      // writeup: [{ type: "text", value: "..." }]
    },
    {
      id: 3,
      title: "Group Project 3",
      description: "test",
      image: "/projects/project1.png",
      tags: ["test", "test", "test"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]