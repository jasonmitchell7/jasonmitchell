const routes = [
    '/',
    '/index/',
    '/projects/',
    '/blog/',
    '/contact/'
];

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
    {name: "Swift", level: 9, description: "I enjoy Swift a lot. Protocol-oriented programming is slightly different from the inheritance" +
    " I became used to using with other languages, but it's even more powerful. Leveraging 'where' statements makes programming robust, " +
    "reusable solutions a breeze. I've spent a lot of time with UIKit and the AVFoundation and CoreImage frameworks."},
    {name: "C#", level: 8, description: "C# was the first language I used for an extended period of time. I began by helping to program " +
    "multiple servers for a running an emulator (also created with C#) for a MMORPG. I then wrote tutorials to help others learn " +
    "how to leverage the language to create new content for their own servers. Later, I used C# to create a couple small 2D games " +
    "using Unity."},
    {name: "Java", level: 8, description: "I used Java for years in college, and for over a year in an internship where it was used for " +
    "multiple APIs and the back-end of a student information system."},
    {name: "JavaScript", level: 9, description: "I've used JavaScript for the front-end of multiple applications. These include many " +
    "small college projects, as well as at my internship with Infinite Campus and this website."},
    {name: "ReactJS", level: 7, description: "One of the main purposes of creating this website was to learn ReactJS. I love the way " +
    "components are used in React, helping to organize code in a much more efficient and manageable manner. Being able to create " +
    "classes that can be reused with simple HTML tags is amazing."},
    {name: "AngularJS", level: 7, description: "I used AngularJS for a year at Infinite Campus. Angular 1.X is a wonderful tool, but I " +
    "found that I would often wish that directives were better compartmentalized. Dabbling some with Angular 2+, I've found that my " +
    "wishes have been granted and then some. I find the newer versions to Angular to be a lot of fun to program with, and that my " +
    "productivity has increased significantly. The addition of TypeScript is icing on top of the cake."},
    {name: "SQL", level: 8, description: "College classes on databases, a vigorous SQL training program at Infinite Campus, and designing " +
    " a database for a social media platform have left me pretty comfortable with SQL. Beyond just database design and querying, I quite " +
    "enjoy trying to maximize time efficiency. Following an execution plan of a query and altering the query to hit clustered indices is " +
    "a fun puzzle."},
    {name: "Groovy", level: 9, description: "During my internship I helped with an in-house automated testing framework that Software and " +
    "Test Engineers would use to write tests, using Groovy, Geb, Spock and Selenium. I also worked with people in Data Conversion to create " +
    "a blank database and ensure that tests would run correctly on this, giving the company a control dataset from with to work off of."},
    {name: "CSS", level: 9, description: "Creating styles and animations is a lot of fun. As a programmer, and not a designer, sometimes I " +
    "work better with an image to try to replicate, but I find CSS to be an increase powerful tool to create fun, interactive webpages " +
    "without too much overhead."},
    {name: "C++", level: 7, description: "Used it throughout college and created some interesting projects. Since most of what I do professionally " +
    "and personally values speed of development over low-level control, I haven't spent as much time with it recently as I would like."},
    {name: "Python", level: 7, description: "Great scripting language, would like to spend more time using it."},
    {name: "Clojure", level: 5, description: "I used Clojure both in school, and on my own to get more comfortable with functional programming " +
    "patterns. It's been a while since I've used it, so I would need to spend a little time getting used to the syntax again, but the value of" +
    "functional programming is something that I can take with me to any other language I write in."},
    {name: "Ruby On Rails", level: 6, description: "I used Ruby On Rails to create an API for a social media platform. Love the framework and " +
    "the language. I would like to spend more time to dig in deeper. The language and platform have a lot more to offer than what I've used, " +
    "and I can still learn a lot."},
    {name: "Webpack", level: 8, description: "I love how easy Webpack makes web development, and I don't miss hitting Ctrl+R with the hot-reload it provides."},
    {name: "Grunt", level: 8, description: "A great task runner, but I think it's time is short with the emergence of Webpack."},
    {name: "npm", level: 7, description: "Probably the best package manager out there at the moment. I've used it on my own projects, as well as at " +
    "my internship with Infinite Campus. It's easy to use and understand and a powerful tool."},
    {name: "Gradle", level: 4, description: "I've spent enough time in Gradle during my internship with Infinite Campus to know my way around, but not enough to say that I have a firm grasp of it yet."},
    {name: "Docker", level: 4, description: "I've used Docker Compose to develop and deploy an API with a Postgres database to AWS. I still have a lot to learn with Docker, but quite enjoy using it."},
];


module.exports = {
    routes: routes,
    navItemData: navItemData,
    descriptors: descriptors,
    joys: joys,
    skills: skills,
    contact: {social: social, email: email}
};