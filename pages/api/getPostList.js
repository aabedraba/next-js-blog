import blogPosts from '../../content/content-list.json'

export default (req, res) => {
    res.status(200).json(blogPosts[0]);
}