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
        // INVIDIAUL DESIGN
        {
          type: "subtitle",
          value: "Individual Button Design",
        },        
        {
          type: "text",
          value:
            "Coming up with ways to represent my personality and likeness for this assignment was a twisty process. It took many different designs for me to capture my hobbies, traits, and character as an individual as well as in a group dynamic, as accurately as possible in a single button.",
        },
        {
          type: "text",
          value:
          "While designing, I referenced my ITP Metrics Personality Survey results for concrete personality traits that I could include in my button. Ultimately, all of my designs revolved around my low extraversion, as I felt like this trait heavily influenced my behaviour and traits in the other four categories of the survey."
        },
        {
          type: "image",
          value: "/projects/a1_sketch1.jpg", 
          alt: "Initial sketches potential objects for button",
        },
        {
          type: "text",
          value:
          "A telescope and a magnifying glass are objects that help others see things more clearly. I felt this could represent my role as a supporter in group settings, rather than being a leader. To further emphasize this supporter role, I considered having a ray of light emit from the object and follow the mouse around the page as part of the button’s functionality. Similarly, I felt a cat could also represent my observant and listening nature, and this could be shown further by having its eyes follow the mouse around the screen as functionality."        
        },
        {
          type: "text",
          value:
          "At this point in our design process, I had no idea how my group member's buttons functioned or looked, so I also created a simpler design in the case our buttons needed to be more cohesive. "        
        },
        {
          type: "image",
          value: "/projects/a1_sketch2.jpg", 
          alt: "Initial sketches of potential button",
        },
        {
          type: "text",
          value:
          "In this version I designed the button as a simple circle, and my personality traits would be represented by the effects that would occur when you interact or hover over the button. The button starts out small and it grows as you click it to represent how I am shy when I first meet new people but open up as we interact more and more. Once the button is at full size, it would make the other two buttons glow to represent my supporter role and show that after a few interactions, I become comfortable to open up. This also sparked my initial ideas of how I would represent my personality in our team dynamic."        
        },
        {
          type: "text",
          value:
          "As we began exchanging ideas, we started to look beyond our personality traits and considered our hobbies and interests as a way to represent our team dynamic. With this idea in mind, I ended up choosing a camera symbol for my button as I found it incorporates my personality traits with my hobbies together the best."        
        },
        {
          type: "image",
          value: "/projects/a1_sketch3.jpg", 
          alt: "Initial sketches of camera idea",
        },
        {
          type: "text",
          value:
          "My personal interests vary from watching movies, recording piano covers or singing covers, spending time with my family and friends, travelling, and doing hair, nails, and makeup. Each of these activities involve using a camera in one way or another, such as needing cameras to film movies, and taking pictures for memories when I’m with friends, family, or travelling. Similar to objects from earlier sketches, I felt a camera represents my supporter role as it is an object used to help people take the bigger picture, rather than being in the spotlight. It is also an object you normally operate alone, which reflects my preference to work alone rather than in a group."
        },
        {
          type: "image",
          value: "/projects/a1_sketch4.png", 
          alt: "Prototype of camera with glowing effect following mouse",
        },
        {
          type: "text",
          value:
          "While prototyping my button, I tried combining the camera with the idea of a flash emitting from the object and following the mouse around the page. I ended up deciding against this because I felt like the flash was too bold and conveyed extraversion traits, as if the light the camera’s emitting is pointing orders to the objects around it to glow, similar to how a leader would do. "
        },
        {
          type: "image",
          value: "/projects/a1_sketch5.png", // <-- replace with your actual path
          alt: "Final design application of button",
        },
        {
          type: "text",
          value:
          "My final button design starts with the camera smaller than the other two buttons to represent my low extraversion and shy nature upon meeting new people. Unlike my other group member’s buttons that display their hobbies upon the initial click, a user must click my button at least three times before I display my hobbies. For these three clicks, the camera button grows a little more each click to represent how I open up to someone gradually with each interaction we share. Once my button is at its full size and I am comfortable to be myself around the user, any following clicks will display or hide my personality and hobbies. To show that my button is in an active state, a twinkling animation appears next to the camera to show my high cheerfulness, low frustration, and low melancholic traits as an individual. In this active state, my button creates a halo effect around my group member's buttons to reflect my supporter role in our group dynamic."
        },
        // GROUP DESIGN
        {
          type: "subtitle",
          value: "Group Dynamic and Background Design",
        },
        {
          type: "text",
          value:
          "When designing how our buttons could interact in a group dynamic, I once again referenced our ITP Metrics Personality Survey results, and thought of ways to represent our similar and different personality traits simply through our buttons.",
        },  
        {
          type: "image",
          value: "/projects/a1_sketch6.jpg",
          alt: "Initial sketch of how Julliana's button interact with Jason and Justin's button",
        },
        {
          type: "text",
          value:
          "When my button is clicked, I designed a glowing halo effect to appear around Justin and Jason’s button to show my role as a supporter in the team dynamic. I also incorporated the idea that my button must be clicked a certain number of times in order for the lens to be fully open before I am comfortable to interact within the team.",
        }, 
        {
          type: "image",
          value: "/projects/a1_sketch7.jpg",
          alt: "Initial sketch of how Justin's button interact with Jason and Julliana's button",
        },
        {
          type: "text",
          value:
          "When Justin’s button is clicked, I designed it so that the other two buttons slowly move towards his button to represent his friendliness and leadership traits. If mine or Jason’s button bumps into Justin’s button, then his button temporarily shifts into the shape of our button to show how he changes based on his surroundings.",
        },
        {
          type: "image",
          value: "/projects/a1_sketch8.jpg",
          alt: "Initial sketch of how Jason's button interact with Julliana and Justin's button",
        },  
        {
          type: "text",
          value:
          "When Jason’s button is clicked, I designed it so that it could be animated to unfold into a staircase to represent how he is adventurous and ambitious. To show team dynamic, Justin’s button would try to climb the stairs as well to show how he overcomes challenges, while my button would still to show how I am not as adventurous.",
        },
        {
          type: "text",
          value:
          "As I tried to figure out how we could accurately represent our team dynamic through just effects and animations, I ran into an issue of how much we could represent our individual personalities through our buttons. For example, for Jason’s individual button, he would have been limited to having it be the shape of a square to accommodate for the stairs animation. Because of this tradeoff, we decided as group against this idea.",
        },
        {
          type: "text",
          value:
          "Instead my team started designing versions a different idea, which was to place our personal buttons in a specific context, and have our team dynamic displayed in relation to a chosen background design. After sharing a few different landscape ideas, we ultimately decided on an indoor bedroom or house design, as we felt it made the most sense for our concept, which was to display our personal hobbies when our buttons were clicked.",
        },
        {
          type: "image",
          value: "/projects/a1_sketch9.jpg",
          alt: "Initial sketch/storyboard of house background design",
        }, 
        {
          type: "text",
          value:
          "In my design, our buttons would be placed on the shelves, and I imagined our dynamic to be represented by clicking each member’s button to change the room’s objects to contain that person’s hobbies. To represent the similarities between members, if two members shared the same hobby, that shared object would not change when you clicked the new button. For example, Jason and Justin both like hiking so in both of their rooms, there is a hill with a hiker outside the window.",
        },
        {
          type: "text",
          value:
          "Justin also came up with a similar idea, and in both of our versions, the camera view was a side view (similar to the platformer genre of video games) but we realized there was too little space to add objects and thus we sketched out the idea of a slightly offset, top down view of the house, similar to many indie video games like Stardew Valley.",
        },
        {
          type: "image",
          value: "/projects/a1_sketch10.jpg",
          alt: "Initial sketch of top down house view",
        }, 
        {
          type: "text",
          value:
          "This was my design for the top down view of our house idea. For this idea, rather than having the items in the room be switched out depending on whose button is clicked, the items would rather accumulate in the room as long as two or more member's buttons were toggled on. The idea was to represent our likeness and differences as team members coming together to create one cohesive space.",
        },
        {
          type: "image",
          value: "/projects/project1.png",
          alt: "Final application",
        }, 
        {
          type: "text",
          value:
          "This is the final product of our application. In the end, our group decided to go with a pixel art approach of the top down view of the house design, as it was the most convenient technical option that included an aesthetic we all agreed on. Please note, this picture of the final product was included as a reference and was created by Jason using a pixel map editor.",
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