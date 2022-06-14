const users = [
    {
        id : "U001",
        username:"prajeev23",
        first_name:"Gopi",
        last_name:"Prajeev",
        full_name:"Gopi Prajeev",
        avatar_url:"https://url1.com"
    },
    {
        id : "U002",
        username:"riftwalker",
        first_name:"Rift",
        last_name:"Walker",
        full_name:"Rift Walker",
        avatar_url:"https://url2.com"
    },
    {
        id : "U003",
        username:"kdbreal",
        first_name:"Kevin",
        last_name:"De Bruyne",
        full_name:"Kevin De Bryune",
        avatar_url:"https://url3.com"
    }
]

const stats = [
    {
        views:20,
        likes:7,
        retweets:10,
        responses:11
    },
    {
        views:100,
        likes:65,
        retweets:44,
        responses:15
    },
    {
        views:200,
        likes:110,
        retweets:70,
        responses:25
    }
];

const tweets = [
    {
        id:"T001",
        body:"This is a sample tweet T001",
        date:"2022-01-07",
        Author:users[0],
        Stats:stats[0]
    },
    {
        id:"T002",
        body:"This is a sample tweet T002",
        date:"2022-02-22",
        Author:users[1],
        Stats:stats[1]
    },
    {
        id:"T003",
        body:"This is a sample tweet T003",
        date:"2022-03-17",
        Author:users[2],
        Stats:stats[2]
    },
];

const notifications = [
    {
        id:"N001",
        date:"2021-12-01",
        type:"Normal"
    },
    {
        id:"N002",
        date:"2022-01-05",
        type:"Priority"
    },
    {
        id:"N003",
        date:"2022-03-23",
        type:"High Priority"
    },

];

module.exports = {notifications, tweets, users, stats};