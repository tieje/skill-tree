# Project skill-tree
## Table of Contents

[Problems Solved](#problems-solved)

[Motivation](#motivation)

[Tech Stack](#tech-stack)
## Problems Solved
Project skill-tree is a free application that allows users to create, share, and link to existing skill trees. The main problems that skill-tree will solve are the following:

1. Help teachers create a self-paced curriculum for students, as well as keep track of their student's interests and progress.
2. Allow students of all ages to find high quality online resources through educational links and book ISBNs embedded in the skill tree nodes curated by the skill tree author.
3. Make education fun, visually appealing, and decentralized.
4. Solve the "What next?" question through well-trodden learning paths in the form of recommendations.
5. Encourage academic experimentation by putting options to create one's own path first.
6. Passively create a decentralized method of recording the process of world knowledge acquisition across many people.
7. Decentralize the grading or verification process: a system of professional graders (teachers, professors, instructors) can log in and grade their student's work. Each node will have an end-product project link to view their project somewhere on the web.
## Motivation
I was presenting example ideas of how to improve the U.S. education system for a school project and I came up with an idea of gamifying knowledge acquisition through skill trees. Months later, I was somehow reminded of this idea this week because I have been teaching my sibling a lot lately. Having gone through a fairly terrible education system, myself, I have thought a lot about improving U.S. education. I'm not a great web developer yet so I think this will be a fun project to work on while I'm in school.
## Tech Stack
- Version Control
    - Git
- Frontend
    - React
    - Pick an animation framework. Gamification will be important.
- Backend
    - I like django, but it might be limited by the maintainers... I could just fork django if I need to. I think it's a solid base
- Deployment
    - Docker
- Database
    - FaunaDB
- Security
    - Web stack monitoring
- Marketing
    - Email service
    - Giving presentations to teachers and education boards
### Justin's Ideas
- Similar to the way GitHub manages repos: Open and closed skill trees. Open skill trees can be edited by all collaborators, closed can only be edited by the owner. Closed skill trees can either be publicly viewed or not. Of course, the real value of this project would be in the open skill trees.

- Worldtree/Hometree/something similar. An ambitious attempt to map all open skill trees into one "master treespace"

- I mentioned this at standup, but ability for students to link their projects to skill tree nodes, showing their work on a particular subskill.

- Students' projects could be verified by trusted educators/validators. Educators could leave constructive feedback on projects.

- Look into this D3 model:
    https://observablehq.com/@drewsapple/curriculum-skill-tree
    https://observablehq.com/@bartok32/step-by-step-directed-graph-drawing-dagre-layout

