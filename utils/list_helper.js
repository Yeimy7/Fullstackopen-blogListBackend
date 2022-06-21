const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) {
        return 0
    } else if (blogs.length === 1) {
        return blogs[0].likes
    } else {
        return blogs.reduce((sum, value) => (sum + value.likes), 0);
    }
}

const favoriteBlog = (blogs) => {
    const maxValue = Math.max(...blogs.map(x => parseInt(x.likes)))
    const result = blogs.filter(x => x.likes == maxValue)
    return { title: result[0].title, author: result[0].author, likes: result[0].likes }
}

const mostBlogs = (blogs) => {
    const sumAuthor = (arr) => {
        const times = {}; 
        arr.forEach(item => {
            if (times[item.author]) {
                times[item.author] += 1; 
            } else {
                times[item.author] = 1; 
            }
        });
        return times; 

    }
    const result = sumAuthor(blogs)
    const maxBlogs = Math.max(...Object.values(result))
    const author = {}

    for (const property in result) {
        if (result[property] === maxBlogs) {
            author.author = property
        }
    }
    author.blogs = maxBlogs
    return author
}

const mostLikes = (blogs) => {
    const sumAuthor = (arr) => {
        const times = {}; 
        arr.forEach(item => {
            if (times[item.author]) {
                times[item.author] += item.likes; 
            } else {
                times[item.author] = item.likes; 
            }
        });
        return times; 

    }
    const result = sumAuthor(blogs)
    const maxLikes = Math.max(...Object.values(result))
    const author = {}

    for (const property in result) {
        if (result[property] === maxLikes) {
            author.author = property
        }
    }
    author.likes = maxLikes
    return author
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog, 
    mostBlogs,
    mostLikes
}