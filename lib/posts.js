import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//TODO: try it inside the function with console.log() to see if there's different path
const postsDirectory = path.join(process.cwd(), 'blogposts') 

export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace('/\.md$/', '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContent)
        
        return {
            id,
            ...matterResult.data,
            content: matterResult.content
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.data) return 1
        else return -1
    })
}
    