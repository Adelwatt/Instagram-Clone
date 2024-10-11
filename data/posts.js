import React from "react";
import USERS from "./Users";

const POSTS = [
    {
        imageUrl: "https://images.pexels.com/photos/12879651/pexels-photo-12879651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: USERS[2].userName,
        likes: 7870,
        caption: "Train Ride to Hogwarts. 🎉 🤠",
        profilePicture: USERS[2].image,
        comments: [
            {
                name: "theqazman",
                comment: "Wow! This build looks fire, Super excited about it"
            },
            {
                name: "amaanath.dev",
                comment: "Once I wake up, I'll finally be ready to code this up!"
            }
        ]
    }
]