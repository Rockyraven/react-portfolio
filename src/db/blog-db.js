import uuid from "react-uuid";
import React from "react";
import { closure, tdz, unit } from "../assets";


export const blogs = [
    {
        _id: uuid(),
        blogName: "Hoisting and TDZ",
        description: `Hoisting refers to JavaScript giving higher precedence to the declaration of variables, classes, and functions during a program's execution. Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. `,
        image: tdz,
        link: "https://rockypage.hashnode.dev/hoisting-and-tdz",
    },
    {
        _id: uuid(),
        blogName: "Different CSS units and their usage.",
        description: `CSS has several different units for expressing a length. Many CSS properties take "length" values, such as width , margin , padding , font-size `,
        image: unit,
        link: "https://rockypage.hashnode.dev/different-css-units-and-their-usage",
    },
    {
        _id: uuid(),
        blogName: "Closures - Javascript",
        description: `Closures are a fundamental JavaScript concept that every serious programmer should know function of closure.`,
        image: closure,
        link: "https://rockypage.hashnode.dev/closures-javascript",
    },
]