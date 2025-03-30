// import the installed libraries
require("dotenv").config()
const m = require("masto")

const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/",
    accessToken: process.env.TOKEN
})

async function makeStatus(text){

    const status = await masto.v1.statuses.create({
        // the thing that will be posted
        status: text,
        // change the visibility for testing purposes
        visibility: "public"
    })

    console.log(status.url)
}

const subjects = ["I", "You", "We", "They", "The Sun", "The Moon", "The clouds", "A ghost", "Your shadow", "The hallway"]
const verbs = ["forgot", "remembered", "held", "became", "sang to", "waited for", "opened", "followed",  "unfolded", "carried"]
const objects = ["my name", "your voice", "the window", "a dream", "that version of you", "the silence", "a second sky", "nothing"]
const endings = ["before the sky melted.", "without looking back.", "in another timeline.", "like a memory.", "while the stars blinked.", "as if it mattered.", "in the house with no doors."]

function generateDream() {
    let s = subjects[Math.floor(Math.random() * subjects.length)]
    let v = verbs[Math.floor(Math.random() * verbs.length)]
    let o = objects[Math.floor(Math.random() * objects.length)]
    let e = endings[Math.floor(Math.random() * endings.length)]

    return s + " " + v + " " + o + " " + e
}

setInterval ( () =>{
    let post = generateDream()

    makeStatus(post)

}, 1000 * 60 * 60 * 5)