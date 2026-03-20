// Splitting projects list from original ProjectsSection.jsx aided using ChatGPT.

export const projects = [
    {
      id: 1,
      title: "A Family of Buttons",
      description: "A pixel art web application that illustrates my team's individual personalities and group dynamic through button interactions.",
      image: "/projects/a1_final.png",
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
          value: "/projects/a1_final.png",
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
      description: "A creative, remote, and synchronous way for TinkerCAD experts to share their 3D modelling tips and tricks to novice users through interactive hand gestures.",
      image: "/projects/a2_final.png",
      tags: ["JavaScript", "CSS", "HTML"],
      demoUrl: "https://cpsc581project2.onrender.com/",
      githubUrl: "https://github.com/Jvery11/CPSC581Project2",
      content: [
        {
          type: "subtitle",
          value: "First Divergence",
        },
        {
          type: "text",
          value:
          "TinkerCAD (as well as any CAD software for that matter) was a new tool that I had never used prior to this assignment, so to start, I began by exploring the application to understand its workflow. During this process, I became familiar with the various tools available to users to manipulate 3D models, as well as the TinkerCAD specific features such the 'Learn' section where novice users are able to follow step by step tutorials on how to model specific objects.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch1.png",
          alt: "TinkerCAD Screenshot",
        }, 
        {
          type: "text",
          value:
          "The ‘Learn’ section sparked my initial design, where experts would walk novice users through a step by step tutorial on a modelling a certain object that requires the use of common tools such as Alignment, Rotation, and Scale. Rather than novice users reading text instructions on how to manipulate these shapes correctly with those tools, experts would demonstrate these manipulations with hand gestures instead. The tips and tricks novice users learn from modelling this object would ideally be useful for future, more complex projects, making this design a resource for learning foundational 3D modelling skills.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch2.jpg",
          alt: "Initial 'learn' desgin",
        },
        {
          type: "text",
          value:
          "To provide novice users with a richer system interaction, I thought of including visual and audio signals as elements of embodied output. A specific signal would be triggered for when the expert demonstrates shape manipulations correctly or incorrectly, to emphasize what should and should not be done when 3D modelling.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch3.jpg",
          alt: "Initial 'learn' desgin feedback",
        },
        {
          type: "subtitle",
          value: "First Convergence",
        },
        {
          type: "text",
          value:
          "After developing our individual ideas, we came together as a group and discussed how to combine them into one system. Following this discussion, we developed our Pepper's Ghost Illusion prototype, which uses projector software/hardware to display a 3D model on a piece of acrylic, allowing novice users to see the object's scale in the real world.", 
        },
        {
          type: "image",
          value: "/projects/a2_sketch4.png",
          alt: "Pepper's Ghost Illusion",
        },
        {
          type: "text",
          value:
          "Note: Acrylic Stand was 3D printed by my group member Jason, and was added here for reference only.",
        },
        {
          type: "text",
          value:
          "While we believed that this was a novel solution that didn’t rely on screen sharing or video calls, we ultimately found that its flaws outweighed its merits. Due to the Illusion’s poor image quality which limited the details we could include in the shared 3D model, the limited amount of embodied input and output it could support, and the fact that the Illusion didn’t even look very 3D to begin with, we decided to drop this design and diverge once again.",
        },
        {
          type: "subtitle",
          value: "Second Divergence",
        },
        {
          type: "text",
          value:
          "As I began my second round of ideating, I decided to focus less on the feasibility of my designs, as I found that this constraint limited the range of solutions I was allowing myself to come up with.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch5.png",
          alt: "Overlay Sketch",
        },
        {
          type: "text",
          value:
          "This design conveys expertise by demonstrating the step by step process required to create a specific object, simialr to my very first design. In this idea, however, the novice would screenshare to the expert, and our application would appear as an overlay on the novice’s screen. The expert would be able to drag and manipulate objects to the overlay with hand gestures to show the novice a ‘preview’ of what the next step of the object should end up looking like. The intent is to mimic rich, in real life interactions, as if the novice and expert were side by side and able to actually point at specific areas along the screen.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch6.png",
          alt: "Precise Gesture Sketch",
        },
        {
          type: "text",
          value:
          "This second design, which conveys the expertise of precisely aligning and rotating objects, emerged as a result of the limitations we found with the Pepper Ghost Illusion prototype. With the Pepper Ghost Illusion, we weren’t able to incorporate a way to accurately rotate and align objects, since the projector could not support small and detailed images such as a small ruler. Further, the illusion also could not support the colour changing border.",
        },
        {
          type: "text",
          value:
          "This new design addresses these shortcomings. The expert uses hand gestures to tap on the edges of their screen to precisely manipulate the objects, and the novice receives embodied output through the corresponding edges of their screen changing colours. ",
        },
        {
          type: "image",
          value: "/projects/a2_sketch7.png",
          alt: "Multiexpert sketch",
        },
        {
          type: "text",
          value:
          "This third design focuses more on how the novice user can receive feedback for their 3D model. The design requires three experts to interact with one novice, and relies on screen sharing as the core interaction to convey expertise. Using hand gestures, one expert could demonstrate the correct way to align two shapes, and another expert could demonstrate the incorrect way to align the same shapes. The third expert would analyze the novice’s shared screen that shows them copying the actions on TinkerCAD, and this expert would provide additional feedback to the novice through hand gestures. ",
        },
        {
          type: "image",
          value: "/projects/a2_sketch8.png",
          alt: "Multiexpert sketch",
        },
        {
          type: "text",
          value:
          "The fourth design combines the third idea's multisensory output and use of hand gestures with the second idea's multiexpert and screensharing feedback system. The first expert would display the correct movement to manipulate the object to the novice’s laptop, while the second expert would provide haptic and visual feedback through hand gestures to the novice’s phone.",
        },
        {
          type: "subtitle",
          value: "Second Convergence",
        },
        {
          type: "text",
          value:
          "Jason and Justin had also created their own ideas, and with our new pool of designs, we came together and rated each one based on a set of criteria we defined to find the ‘Right Design;. The criteria we chose to rank our designs on were picked to narrow down a design that fit on the assignment prompt the best. Ultimately, we chose the design in Figure 16, which corresponds to my second design from our second divergence.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch9.png",
          alt: "Second divergence comparison chart",
        },
        {
          type: "subtitle",
          value: "Third Divergence",
        },
        {
          type: "text",
          value:
          "Now with our ‘Right Design’ we diverged once more to explore how we could improve our idea and ‘Design it Right'.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch10.png",
          alt: "Second divergence comparison chart",
        },
        {
          type: "text",
          value:
          "Since 3D modelling requires precise manipulation of objects to ensure that physical designs are functional and structurally sound, I wanted to include a way for the novice to view the exact measurements and rotations of the model so they could replicate it accurately in TinkerCAD. This design displays the measurements indicating how far an object has been moved in a specific direction.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch11.png",
          alt: "Adjusted sketch",
        },
        {
          type: "text",
          value:
          "Although the assignment prompt solely focuses on providing the expert user with an easy way to convey their expertise and feedback, I thought a nice addition to the application could be a way for novice users to also provide feedback of their understanding to the expert. This design allows novice users to also use hand gestures to signal to the expert if they understand a concept or need more explanation on it. Including this feature would create richer interaction between the expert and the novice, rather than the interaction being one sided.",
        },
        {
          type: "text",
          value:
          "At this point, we also began prototyping potential UI designs on Figma. The expert UI mockup with a green background was created by Jason, and the designs with a white background were alternative UIs I created.",
        },
        {
          type: "image",
          value: "/projects/a2_sketch12.png",
          alt: "Green UI mockup",
        },
        {
          type: "image",
          value: "/projects/a2_sketch13.png",
          alt: "Alternative expert mockups",
        },
        {
          type: "text",
          value:
          "The goal with these alternate UIs was to improve hand gesture clarity for the expert. Rather than simply having the expert’s webcam in the corner of the screen, in the design on the left, the expert user’s webcam occupies the entire canvas where the object is being modelled. The goal of this idea was to have the expert’s hands appear life-sized relative to the model, and create the effect of the expert’s hands actually holding the model to manipulate it. The design on the right follows a similar concept, however instead of displaying the expert’s hands through the webcam, the system displays the hand tracking lines instead.",
        },
        {
          type: "subtitle",
          value: "Third Convergence & Final Design",
        },
        {
          type: "text",
          value:
          "Following another round of comparison charts and oral discussions as a group deciding what UI design and what specific features we wanted to include in our final submission, below is the final product we decided on/implemented.",
        },
        {
          type: "image",
          value: "/projects/a2_final.png",
          alt: "Final design home page",
        },
        {
          type: "image",
          value: "/projects/a2_final2.png",
          alt: "Final design expert page",
        },
    ]
    },
    {
      id: 3,
      title: "Augmented Eating Experience",
      description: "test",
      image: "/projects/project1.png",
      tags: ["test", "test", "test"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]