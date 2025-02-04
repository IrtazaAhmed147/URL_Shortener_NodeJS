import express from "express"
import {shortenerRoutes} from "./routes/shortener.routes.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))


// template engine
// for installation "npm i ejs"

// it is use for dynamic content in html file
app.set("view engine", "ejs")

// we dont have to use this because our folder name is already views
// agar views ke ilawa koi or folder use karte ho to define krna parega
// views folder mein jo file hongi sub ko access kar sakta hai


// app.set("views", "./views")


app.use(shortenerRoutes) 

// const server = createServer(async (req, res) => {
//     console.log(req.url);

//     if (req.method === 'GET') {
//         if (req.url === '/') {
//             return serveFile(res, path.join("public", "index.html"), 'text/html')
//         } else if (req.url === '/style.css') {

//             return serveFile(res, path.join("public", "style.css"), 'text/css')

//         } else if (req.url === '/links') {
//             const links = await loadLinks()
//             res.writeHead(200, { "Content-Type": "application/json" })
//             return res.end(JSON.stringify(links))
//         } else {
//             const links = await loadLinks()
//             const shortCode = req.url.slice(1)
//             console.log("links red", req.url);
//             if (links[shortCode]) {
//                 res.writeHead(302, { location: links[shortCode] })
//                 return res.end()
//             }

//             res.writeHead(404, { "Content-Type": "text/plain" })
//             return res.end("Shortened URL is not found")
//         }

//     }

//     if (req.method === 'POST' && req.url === '/shorten') {
//         const links = await loadLinks()
//         let body = ''
//         req.on('data', (chunk) => body += chunk)
//         req.on('end', async () => {
//             console.log(body);
//             const { url, shortCode } = JSON.parse(body)

//             if (!url) {
//                 res.writeHead(400, { "Content-Type": "text/plain" })
//                 return res.end("URL is required")
//             }



//             const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex')


//             if (links[finalShortCode]) {
//                 res.writeHead(400, { "Content-Type": "text/plain" })
//                 return res.end("Short code is already exist. Please choose another.")
//             }

//             links[finalShortCode] = url
//             await saveLinks(links)
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify({ success: true, shortCode: finalShortCode }))

//         })
//     }

// })

app.listen(PORT, () => {
    console.log(`server running at localhost:3000`);

})