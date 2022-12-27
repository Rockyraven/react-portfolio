import React from "react";
import uuid from 'react-uuid';
import { boostweb, ecommerce, quicktube, quicktwitt, quiz } from "../assets";
// import ecomm from '../assets'

export const projects = [
    {
        _id: uuid(),
        projectName: "QuickTube",
        description: `Quicktube is video library Project like Youtube. You can explore and enjoy the song, learn from video `,
        image: quicktube,
        link: "https://quicktube.netlify.app/",
        github: "https://github.com/Rockyraven/QuickTube"
    },
    {
        _id: uuid(),
        projectName: "QuickTwitt",
        description: `QuickTwitt is a social media app focused on explore post and chat with another `,
        image: quicktwitt,
        link: "https://quicktwitt.netlify.app/",
        github: "https://github.com/Rockyraven/quick-twitt"
    },
    {
        _id: uuid(),
        projectName: "QuickQuiz",
        description: `QuickQuiz is an Quiz platform for the learner. Here you can participate for Quiz.`,
        image: quiz,
        link: "https://quickquiz-ui.netlify.app/",
        github: "https://github.com/Rockyraven/Quick-Quiz"
    },
    {
        _id: uuid(),
        projectName: "QuickStore",
        description: `QuickStore is an e-commerce platform for the Shoe lovers. You can buy various category of shoe products of multiple brands in your favourite category like Sports shoe , Casual shoe, Formal shoe on QuickStore. `,
        image: ecommerce,
        link: "https://quickstore-react.netlify.app/",
        github: "https://github.com/Rockyraven/Quick-Store-React"
    },
    {
        _id: uuid(),
        projectName: "BOOSTWEB-UI",
        description: `BOOSTWEB is a Component Library that makes your website come to life faster and make more attractive `,
        image: boostweb,
        link: "https://boostweb-ui.netlify.app",
        github: "https://github.com/Rockyraven/boostweb-ui"
    }
]