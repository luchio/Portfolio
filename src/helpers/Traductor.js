export const ES = [
    //home
     {
        greeting: "Hola! soy",
        job: 'Desarrollador Web Frontend'
     },
     //nav
     {
        home: 'Inicio',
        aboutMe: 'Sobre Mi',
        skills: 'Habilidades',
        projects: 'Proyectos'
     },
     //aboutMe
     {
        title: 'Perfil',
        description: `Soy una persona apasionada por la tecnología, en especial por la programación,
        busco superarme y crecer día a día con el objetivo de ampliar mis conocimientos 
        como desarrollador web Frontend. Tengo 3 años de experiencia trabajando con HTML, 
        CSS, JavaScript y React.JS. Cuento con habilidades de comunicación, trabajo en equipo, 
        liderazgo y creatividad. Actualmente busco nuevos desafios para llegar a ser un mejor 
        desarrollador y crecer en el ambito profesional.`,
        downloadText: 'Descargar',
        title2: `Trabajemos Juntos`

     },
      //skills
      {
        title: 'Habilidades',
        title2: 'Sobre Mi',
        skill1: 'Trabajo en equipo',
        skill2: 'Liderazgo',
        skill3: 'Creatividad',
        skill4: 'Pasión por aprender',
        skill5: 'Empatia'

     },
     //experience
     {
        title: 'Proyectos',
       
        projects: [
           {
            title: 'Calendar App',
            github: "https://github.com/luchio/calendar-backend",
            url: "https://calendar-backend-production-33b1.up.railway.app",
            description: `Aplicación web construida con el stack MERN para gestionar las actividades de un equipo o grupo de trabajo. La aplicacion
            web esta implementada con la libreria react-big-calendar,redux-toolkit y bootstrap`,
            img: 'calendar-app.jpeg',
            buildIn: ['react-icon-2.png','node2.png','mongoIcon.png','BStrapIcon.png']
           },
           {
            title: 'Journal App',
            description: `Aplicación web para añadir fotos y experiencias de los viajes del usuario, construida con React, redux-toolkit, Material-UI, 
            autenticación y base de datos con firebase. Se utilizó cloudinary para almacenar las fotos`,
            github: "https://github.com/luchio/journal-app",
            url: "https://journal-app-firebase.netlify.app",
            img: 'journal-app.jpeg',
            buildIn: ['react-icon-2.png','firebase.png','MUIIcon.png']
           },{
            title: 'Legends App',
            description: `Aplicación web donde podrás armar tu 11 ideal con las leyendas que pasaron por el futbol mundial. Consulta estadios
            balones, jugadores etc. La aplicación fue 
            construida en el stack MERN, Material-UI, redux-toolkit y jwt`,
            github: "https://github.com/luchio/Legends-Soccer",
            url: "https://legends-soccer-production.up.railway.app",
            img: 'legends-app.jpeg',
            buildIn: ['react-icon-2.png','node2.png','mongoIcon.png','MUIIcon.png']
           },
           {
            title: 'Budget Control',
            description: `Aplicación web donde podrás llevar un control sobre un presupuesto, podrás ingresar 
            la fecha y el tipo de tus propios gastos. La aplicación web fue creada con React y puro CSS. Utiliza
            el localStorage para guardar los datos`,
            github: "https://github.com/luchio/Budget-Control-App",
            url: "https://app-budget-control.netlify.app",
            img: 'budget-app.jpeg',
            buildIn: ['react-icon-2.png']
           }

        ],        
             
     }


]

export const EN = [
    //home
    {
        greeting: "Hi! I'm",
        job: 'Front end web developer'
    },
    //nav
    {
        home: 'Home',
        aboutMe: 'About Me',
        skills: 'Skills',
        projects: 'Projects'
     },
      //aboutMe
      {
        title: 'Profile',
        description: `I am a person who is passionate about technology and especially about programming,
        I seek to improve myself and grow day by day with the aim of expanding my knowledge as a Frontend web developer. 
        I have 3 years of experience working with HTML, CSS, JavaScript and  React.JS. I have communication, teamwork, leadership and creativity skills. 
        Currently I am looking for new challenges to become a better developer and grow professionally.`,
        downloadText: 'Download',
        title2: `Let's work together`
     },
     //skills
     {
        title: 'Skills',
        title2: 'About Me',
        skill1: 'Teamwork',
        skill2: 'Leadership',
        skill3: 'Creativity',
        skill4: 'Passion to learn',
        skill5: 'Empathy'

     },
      //experience
      {
        title: 'Projects',
       
        projects: [
           {
            title: 'Calendar App',
            github: "https://github.com/luchio/calendar-backend",
            url: "https://calendar-backend-production-33b1.up.railway.app",
            description: `Web application built with the MERN stack to manage the activities of a team or work group. 
            The web application is implemented with the react-big-calendar library, redux-toolkit and bootstrap`,
            img: 'calendar-app.jpeg',
            buildIn: ['react-icon-2.png','node2.png','mongoIcon.png','BStrapIcon.png']
           },
           {
            title: 'Journal App',
            github: "https://github.com/luchio/journal-app",
            url: "https://journal-app-firebase.netlify.app",
            description: `Web application to add photos and experiences of the user's journeys built with React, redux-toolkit, Material-UI, 
            authentication and database with firebase. Cloudinary was used to store the photos`,
            img: 'journal-app.jpeg',
            buildIn: ['react-icon-2.png','firebase.png','MUIIcon.png']
           },{
            title: 'Legends App',
            github: "https://github.com/luchio/Legends-Soccer",
            url: "https://legends-soccer-production.up.railway.app",
            description: `Web application where you can organize your ideal 11 with 
            the legends that went through world soccer. Check stadiums, balls, players, etc. 
            The app was built on the MERN stack, Material-UI, redux-toolkit and jwt`,
            img: 'legends-app.jpeg',
            buildIn: ['react-icon-2.png','node2.png','mongoIcon.png','MUIIcon.png']
           },
           {
            title: 'Budget Control',
            github: "https://github.com/luchio/Budget-Control-App",
            url: "https://app-budget-control.netlify.app",
            description: `Web application where you can keep track of a budget, you can enter the date and type of your own expenses. 
            The web application was created with React and pure CSS. Uses
            the localStorage to save the data`,
            img: 'budget-app.jpeg',
            buildIn: ['react-icon-2.png']
           }

        ],        
             
     }

]