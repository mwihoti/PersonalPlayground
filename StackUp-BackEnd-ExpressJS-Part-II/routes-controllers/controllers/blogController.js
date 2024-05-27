const create_new_blog = async (req, res) => {
    try {
        return res.status(200).send({
            message: "create_new_blog"
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const update_blog_by_id = async (req, res) => {
    try {
        return res.status(200).send({
            message: "update_blog_by_id"
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const delete_blog_by_id = async (req, res) => {
    try {
        return res.status(200).send({
            message: "delete_blog_by_id"
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const get_blog_by_id = async (req, res) => {
    try {
        return res.status(200).send({
            message: `get_blog_by_id ${req.params.blog_id}`
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const get_all_blogs = async (req, res) => {
    try {
        return res.status(200).send({
            message: "get_all_blogs"
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const test = async (req, res) => {
    try {
        return res.status(200).send({
            message: "test"
        })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

module.exports = {
    create_new_blog,
    update_blog_by_id,
    delete_blog_by_id,
    get_blog_by_id,
    get_all_blogs,
    test
}