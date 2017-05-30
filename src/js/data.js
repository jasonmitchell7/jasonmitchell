const navItemData = [
    {to: "index", title: "Home"},
    {to: "projects", title: "Projects"},
    {to: "blog", title: "Blog"},
    {to: "contact", title: "Contact"}
];

const social = [
    {name: "LinkedIn", url: "https://www.linkedin.com/in/jason-mitchell-91160434"},
    {name: "GitHub", url: "/"}
];

const email = "jasonmitchell7@gmail.com";

const descriptors = [
    "developer",
    "plane watcher",
    "tinkerer",
    "Canadian",
    "writer",
    "traveler",
    "nut"
];

const joys = [
    "hockey",
    "puzzles",
    "caffeine",
    "lakes",
    "creativity",
    "rollerblading",
    "peanut butter"
];

const skills = [
    {name: "Swift", level: 9, description: "Swift is my current love. The large majority of my time is spent in Swift."},
    {name: "C#", level: 8, description: "If I'm looking for a powerful language that is Windows compatiable, C# is my go-to."},
    {name: "Java", level: 8, description: "I used Java for years in college, and for over a year in an internship where it was used for mutliple APIs and the back-end of a student information system."},
    {name: "JavaScript", level: 9, description: "I've used JavaScript for the front-end of multiple applications, from my internship at Infinite Campus, this website, and the website for 'Slices'."},
    {name: "ReactJS", level: 7, description: "One of the main purposes of creating this website was to learn ReactJS. Since then I've created the 'Slices' website with ReactJS and plan to keep getting more comfortable."},
    {name: "AngularJS", level: 5, description: "I used AngularJS for a year at Infinite Campus, however I'm not as comfortable with it as ReactJS, and I haven't had much exposure to Angular 2 yet."},
    {name: "SQL", level: 8, description: "College classes on databases, a vigorous SQL training program at Infinite Campus (databases to run all K-12 schools in a state or no joke), and designing a database for a social media platform have left me pretty comfortable with SQL."},
    {name: "Groovy", level: 9, description: "During my internship I helped with an in-house automated testing framework that Software and Test Engineers would use to write tests, using Groovy, Geb, Spock and Selenium."},
    {name: "HTML", level: 10, description: "It pretty much a native language now... should I even include it?"},
    {name: "CSS", level: 9, description: "I wish I could say I'm 100% comfortable with CSS, but every now and then something just don't move/land the way I want it to."},
    {name: "C++", level: 7, description: "Used it throughout college and created some interesting projects. Since most of what I do professionally and personally values speed over power, I haven't spent as much time with it recently as I would like."},
    {name: "Python", level: 7, description: "Great scripting language, would like to spend more time using it."},
    {name: "Clojure", level: 6, description: "I used Clojure both in school, and on my own to get more comfortable with functional programming patterns. Since then, I've used what I learned in other languages with less parenthesis and brackets."},
    {name: "Ruby On Rails", level: 7, description: "I used Ruby On Rails to create an API for a social media platform. Love the framework and the language. I would like to spend more time to dig in deeper."},
    {name: "Webpack", level: 8, description: "I love how easy Webpack makes web development, and I don't miss hitting Ctrl+R."},
    {name: "Grunt", level: 8, description: "A great task runner, but I think it's time is short with the emergence of Webpack."},
    {name: "npm", level: 7, description: "package.j(a)son -- This might be trying to tell you that Jason is the whole package? Only one way to find out... :P"},
    {name: "Gradle", level: 4, description: "I've spent enough time in Gradle during my internship with Infinite Campus to know my way around, but not enough to say that I have a firm grasp of it yet."},
    {name: "Docker", level: 1, description: "I'm just getting started with Docker, and can't wait to learn more!"},
];


module.exports = {
    navItemData: navItemData,
    descriptors: descriptors,
    joys: joys,
    skills: skills,
    contact: {social: social, email: email}
};