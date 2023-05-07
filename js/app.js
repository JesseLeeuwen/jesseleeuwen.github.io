var app = new Vue({
    el: "#app",
    data: {
        workExperience: [
        {
            function: "Game programmer / co-founder - Ember Glitch",
            date: "oct 2017 - present",
            description: "Work as the lead programmer / founder and as a freelance gameplay programmer on various projects",
            link: "https://emberglitch.com"
        },
        {
            function: "programmer / Studio Harm Hasenaar",
            date: "mei 2023 - present",
            description: "programmer on various projects for the studio and support the other programmers",
            link: "https://studioharmhasenaar.nl"
        },{
            function: "Programmer - Monobanda",
            date: "mrt 2021 - present",
            description: "Worked on Visible Voice as a programmer of various systems and prototyping mechanics. \n Visible Voice is a safe and inviting environment for children and youth dealing with intelligible behaviour, to better cope with feelings of aggression and anxiety",
            link: "https://monobanda.eu/project/visiblevoice"
        },{
            function: "Porting/Optimalisation - Monobanda",
            date: "sept 2021 - mrt 2022",
            description: "Create  Remembering VR Port for Oculus Qeust and HTC Flow, made optimisation to various gameplay element to work on standalone VR headsets",
            link: "https://monobanda.eu/project/rememberingvr",
            additionalLink: "https://www.rememberingthegame.nl/"
        },{
            function: "Coding/Finetuning - Monobanda",
            date: "oct 2020",
            description: "Created game mechanics and assisted with implementing existing game mechanics for an interactive VR story The Shape of Us",
            link: "https://monobanda.eu/project/shapeofus",
            additionalLink: "https://www.heartwire.org/cases/theshapeofus"
        },{
            function: "Game programmer - Monobanda",
            date: "dec 2017 - apr 2018",
            description: "worked as Game programmer on Timbre in de klas. \nMy function was to create the game mechanics and voice interactions",
            link: "http://monobanda.eu/project/timbreclass"
        }, {
            function: "Game programmer - Monobanda-PLAY",
            date: "dec 2016 - jun 2017",
            description: "Timbre VR, Researched possible interaction with voice control",
            link: "http://monobanda.eu/project/timbre"
        }, {
            function: "(Intership) game programmer - Monobanda-PLAY",
            date: "sept 2016 - dec 2016",
            description: "during my interschip I worked as a Gameplay programmer on Weltatem VR",
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
                    icon: "devicon-dot-net-plain",
                    name: "Dot-net"
                },{
                    icon: "icons8-unreal-engine",
                    name: "Unreal"
                },{
                    icon: "icon-blender",
                    name: "Blender"
                },{
                    icon: "devicon-git-plain",
                    name: "Git"
                },{
                    icon: "devicon-trello-plain",
                    name: "Trello"
                },{
                    icon: "devicon-mongodb-plain",
                    name: "Mongodb"
                },{
                    icon: "devicon-django-plain",
                    name: "Django"
                }                
            ],
        }
    }
});