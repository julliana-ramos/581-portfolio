// Splitting philosophies list from original PhilosophySection.jsx aided using ChatGPT.
import { Lightbulb, User, Briefcase } from "lucide-react";

export const philosophies = [
  {
    id: 1,
    title: "Sometimes Less is More",
    subtitle: "And other times, it's not",
    icon: Lightbulb,
    content: [
      "In the Button Personality project, I learned that visual restraint can be more powerful than adding more effects or interactions.",
      "When I simplified the camera button interaction and focused on one clear behavior at a time, the meaning behind the interaction became much easier to understand.",
      "This taught me that clarity in interaction design often comes from removing features, not adding them."
    ]
  },
  {
    id: 2,
    title: "Test",
    subtitle: "Project Two",
    icon: User,
    content: [
      "This project helped me understand how design decisions affect how people interpret and feel about an interface.",
      "I became more intentional about feedback, timing, and subtle animation as communication tools rather than decoration."
    ]
  },
  {
    id: 3,
    title: "Test",
    subtitle: "Project Three",
    icon: Briefcase,
    content: [
      "I learned that tools like libraries and frameworks are only useful when they support a clear design goal.",
      "Most of my meaningful design decisions happened before I wrote any code."
    ]
  }
];
