import crypto from 'crypto'
// import path from 'path'
// import { readFile } from 'fs/promises'
import { loadLinks, saveLinks } from '../models/shortener.models.js'

export const getShortenerPage =  async (req, res) => {
    try {
        // const file = await readFile(path.join("views", "index.html"))
        const links = await loadLinks()

       return res.render("index", {links, hosts: req.host, })

     

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")

    }
}

export const postURLShortener = async  (req, res)=> {
    try {
        const { url, shortCode } = req.body

        const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex')

        const links = await loadLinks()

        if (links[finalShortCode]) {
            return res.status(400).send("Short code is already exist. Please choose another.")
        }
        links[finalShortCode] = url
        await saveLinks(links) 

        return res.redirect("/")
    } catch (error) {
        console.log(error);

    }
}

export const shortenerShortCodePage = async (req, res) => {
    try {
        const { shortCode } = req.params
        const links = await loadLinks()
        if (!links[shortCode]) return res.status(404).send("404 error occurred")

        return res.redirect(links[shortCode])
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")


    }
}