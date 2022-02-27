## :star: Inspiration
Traveling is one of the greatest ways to get out of the hustle and bustle of your everyday life.​Improving your well-being, study shows that women who vacation at least twice a year show a significantly lower risk of suffering a heart attack than those who only travel less. Men who do not take an annual vacation show a 20 percent higher risk of death and 30 percent greater risk of heart disease.​ Traveling helps you feel calm, and it allows you to take time from work to see new places and releases the stress you've been holding onto​.

Traveling abroad gives you brand new experience to immerse in a different culture. A research shows that foreign experiences increase both cognitive flexibility and depth and integrativeness of thought The COVID-19 pandemic has prompted all destinations worldwide to introduce restrictions on travel. According to a trend report from American Express, people miss travel so much that they are feeling anxious and stressed.

![alt text](https://github.com/manyicheng/P01nter/blob/main/home.gif)
## :iphone: What it does
P01nter provides a space for its users to post, share and enjoy their special moments of life with people around the world. It uses google cloud vision API to detect labels, web entity and landscape from the image and automatically label the post based on confidence score.

## :computer: How we built it
The backend is set up using Express.js to host server for Google Vision API. The frontend is bootstrapped with React.js and Material UI. The frontend processes users’ input image and sends it to the backend for it to analyze using Google Vision WebEntity Detect, Label Detect, and Landscape Detect. The results are exposed at the backend's endpoint so that the frontend can pick it up. We also set up Firebase/Firestore to enable Google Authentication and Email/Password Authentication. Moreover, we used Three.js and react-three to implement the 3D earth and stars on the homepage.

## :hourglass: Challenges we ran into
One soft challenge is to figure out how to apply the technologies to solve real life issues and bring the users what they really want. Through rounds and rounds of discussion, we came up with an idea to help users automatically label their post with AI detect and from their posts and match them with the people with similar interests. Viewing their post, reacting and commenting will set up a connection bridge and bring souls one step closer even if they are distant away.

On the technology point of view, we ran into lots of problems with incompatibility between operating systems and software versions. The same piece of code might run successfully with a previous software version and not work at all with the current one. Unfortunately, 4 people on our team use 3 different operating systems, which causes us lots of trouble to make code and dependencies working for everyone.

## :memo: Accomplishments that we're proud of
Successfully built a web application from 0 to 100% within 24 hours. Learn awesome technologies such as Google Vision API, React.js, Express.js. Apply 3D motion components in UI.


## :mortar_board: What we learned
Google Vision API, React.js, Express.js, Material UI, Figma, Firebase, Three.js


## :mag:  What's next for P01nter
In the next step, we plan to optimize the resource we have in the application and then deploy it in docker with Google VM instance. Enable private chat for users
