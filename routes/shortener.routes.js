

import { Router } from 'express'
import {postURLShortener, getShortenerPage, shortenerShortCodePage} from "../controllers/postshortener.controllers.js"

const router = Router();



// const serveFile = async (res, filePath, contentType) => {
//     try {
//         // file ka data variable mein save hojaayega
//         const data = await readFile(filePath)

//         // file ka meta data server ko pata chale isliye
//         res.writeHead(200, { "Content-Type": contentType })

//         // file client ko serve karega
//         res.end(data)

//     } catch (error) {
//         res.writeHead(404, { "Content-Type": "text/plain" })
//         res.end('404 Page not Found')
//     }
// }


// router.get("/report", (req, res)=> {

//     const students = [
//         {
//           name: "Ayesha Khan",
//           grade: "A",
//           favouriteSubjects: "Mathematics",
//         },
//         {
//           name: "Bilal Ahmed",
//           grade: "B",
//           favouriteSubjects: "History",
//         },
//         {
//           name: "Sana Malik",
//           grade: "A+",
//           favouriteSubjects: "Biology",
//         },
//         {
//           name: "Zaid Ali",
//           grade: "C",
//           favouriteSubjects: "Physical Education",
//         },
//       ];
      
      
//     res.render("report", {students})
// })

router.get('/',getShortenerPage)

router.post("/", postURLShortener)

router.get('/:shortCode', shortenerShortCodePage)

// export default router

// Named export 
export const shortenerRoutes = router
