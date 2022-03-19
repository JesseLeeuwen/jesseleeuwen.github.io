var app = new Vue({
    el: "#app",
    data: {
        projects: [/*{
            name: "GAW #1",
            description: "",
            takeaways: [],
            video: ""
        }*/],
        workExperience: [
        {
            function: "Game programmer / co-founder - Ember Glitch",
            date: "oct 2017 - present",
            description: "I work on our own projects as the lead programmer and as a freelance gameplay programmer on various projects",
            link: "https://emberglitch.com"
        },{
            function: "Porting/Optimalisation - Monobanda",
            date: "sept 2021 - mrt 2022",
            description: "Create  Remembering VR Port for Oculus Qeust and HTC Flow, made optimisation to various gameplay element to work on mobile hardware",
            link: "https://monobanda.eu/project/rememberingvr",
            additionalLink: "https://www.rememberingthegame.nl/"
        },{
            function: "Programmer - Monobanda",
            date: "mrt 2021 - feb 2022",
            description: "Work on Visible Voice as a programmer of various systems and prototyping mechanics. \n Visible Voice is a safe and inviting environment for children and youth dealing with intelligible behaviour, to better cope with feelings of aggression and anxiety",
            link: "https://monobanda.eu/project/visiblevoice"
        },{
            function: "Coding/Finetuning - Monobanda",
            date: "oct 2020",
            description: "Created game mechanics and assisted with implementing existing game mechanics for an interactive VR story The Shape of Us",
            link: "https://monobanda.eu/project/shapeofus",
            additionalLink: "https://heartwire.org/the-shape-of-us/"
        },{
            function: "Game programmer - Monobanda",
            date: "dec 2017 - apr 2018",
            description: "worked as Game programmer on Timbre in de klas. \nMy function was to create the main loop and gameplay mechanics",
            link: "http://monobanda.eu/project/timbreclass"
        }, {
            function: "Game programmer - Monobanda-PLAY",
            date: "dec 2016 - jun 2017",
            description: "worked on Timbre VR, I researched possible interaction with voice control",
            link: "http://monobanda.eu/project/timbre"
        }, {
            function: "(Intership) game programmer - Monobanda-PLAY",
            date: "sept 2016 - dec 2016",
            description: "during my interschip I worked on Weltatem VR as Gameplay programmer",
            link: "http://www.weltatem.eu"
        }, {
            function: "(Intership) game programmer - Hibernate studios",
            date: "feb 2016 - jun 2016",
            description: "during my interschip I worked on Rumble Run's UI and server backend",
            link: "https://hibernatestudios.com"
        }],
        skills: {
            languages: [{
                    icon: "devicon-csharp-plain",
                    name: "C#"
                },{
                    icon: "devicon-cplusplus-plain",
                    name: "C++"
                },{
                    icon: "devicon-javascript-plain",
                    name: "Javascript"
                },{
                    icon: "devicon-html5-plain",
                    name: "HTML5"
                },{
                    icon: "devicon-python-plain",
                    name: "Python"
                },{
                    icon: "icon-shaders",
                    name: "Shaders"
                }
            ],
            tools: [
                {
                    icon: "icon8-unity3d",
                    name: "Unity3D"
                },{
                    icon: "icon-blender",
                    name: "Blender"
                },{
                    icon: "devicon-git-plain",
                    name: "Git"
                },{
                    icon: "devicon-dot-net-plain",
                    name: "Dot-net"
                },{
                    icon: "devicon-mongodb-plain",
                    name: "Mongodb"
                },{
                    icon: "icons8-unreal-engine",
                    name: "Unreal"
                },{
                    icon: "devicon-trello-plain",
                    name: "Trello"
                },{
                    icon: "devicon-django-plain",
                    name: "Django"
                }                
            ],
        }
    }
});