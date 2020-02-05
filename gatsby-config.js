let siteMetadata = {
    title: `HUGO HSIAO`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo2.png`,
    icon: `/images/icon2.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `WEB ENGINEER | DESIGNER`,
    description: `I am a Product Designer, who focus on the interaction between human and technology.`,
    author: `HugoHsiao`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        }
        // {
        //     name: "BLOG",
        //     url: "/blog"
        // },
        // {
        //     name: "PORTFOLIO",
        //     url: "/portfolio"
        // },
        // {
        //     name: "CONTACT",
        //     url: "/contact"
        // }
    ],
    footerLinks: [
        // {
        //     name: "PRIVACY POLICY",
        //     url: "/privacy-policy"
        // },
        // {
        //     name: "GitHub",
        //     url: "https://github.com/akzhy/gatsby-starter-elemental"
        // }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/TaiwannoI"
        },
        // {
        //     name: "Twitter",
        //     icon: "/images/Twitter.svg",
        //     url: "#"
        // },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/hugohsiao/?hl=en"
        }
        // {
        //     name: "Youtube",
        //     icon: "/images/Youtube.svg",
        //     url: "#"
        // }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
