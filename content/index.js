const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

const getFiles = dir => {
  const files = fs.readdirSync(dir)
  const fileList = []

  files.forEach(file => {
    const markdownFile = fs.readFileSync(`${dir}${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)
    const date = fileContents.date
    const image = fileContents.image
    const title = fileContents.title
    const description = fileContents.description
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.')

    const obj = { date, slug, image, title, description }
    fileList.push(obj)
  })
  return fileList
}

const writeBlogs = async () => {
  const fileArray = await getFiles('content/articles/')

  const sortedArray = await fileArray.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('content/articles.json', jsonContent, err => {
    if (err) throw new Error(err)
  })
}

writeBlogs()
