// All site text and links live here so content can change without touching the rendering code.
const portfolioContent = {
    name: 'Tyler Rowan',
    school: 'University of Alabama',
    intro: "I'm a Junior majoring in Management Information Systems (MIS) with a minor in Business Cybersecurity. I'm an MIS Ambassador passionate about leveraging technology to solve complex business problems.",

    // Set url to null for a tile that is not a link yet. imageClass matches a class in styles.css.
    tiles: [
        {
            title: 'Database Management Systems Analysis | Python & ML',
            description: 'Financial analytics pipeline using descriptive, predictive, and prescriptive modeling.',
            url: 'https://github.com/tbrowan/Database-Management-Systems-Analysis-Python-ML',
            imageClass: 'tile-database'
        },
        {
            title: 'Pi-Hole Project',
            description: 'Network-wide ad and tracker blocking with a self-hosted Pi-hole DNS server on a Raspberry Pi.',
            url: 'https://github.com/tbrowan/pihole-tailscale-dns-analytics',
            imageClass: 'tile-pihole'
        },
        {
            id: 'aboutTile',
            title: 'About Me + Resume',
            description: 'Learn more about my background and download my resume.',
            url: null,
            imageClass: 'tile-about'
        },
        {
            title: 'GitHub',
            description: 'Check out my profile.',
            url: 'https://github.com/tbrowan',
            imageClass: 'tile-github'
        },
        {
            title: 'LinkedIn',
            description: 'View my professional profile.',
            url: 'https://www.linkedin.com/in/tylerbrowan',
            imageClass: 'tile-linkedin'
        }
    ],

    about: {
        paragraphs: [
            'As a kid I have always been fascinated by how technology works and all the different ways it can be used. This passion and curiosity led me to pursue a degree in Management Information Systems.',
            "I thrive on figuring out how things work whether that's constructing a project or optimizing a business workflow. If I'm not coding and trying to get better at my profession, then usually I'm with my friends and family, fishing, or playing video games.",
            'I have always been a determined, hard worker and I am excited to see the impacts I can bring to a business and the world with the skills I am developing.'
        ],
        verseReference: 'Colossians 3:23',
        verseText: '"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."',
        resumeUrl: 'images/tyler-rowan-resume.pdf'
    },

    contact: {
        email: 'tbrowan@crimson.ua.edu',
        phone: '(256) 727-0989',
        linkedInUrl: 'https://www.linkedin.com/in/tylerbrowan'
    }
};
