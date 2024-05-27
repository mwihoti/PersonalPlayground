const register_user = (req, res) => {
    try {
        return res.status(200).send({
            message: "register_user"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const login = (req, res) => {
    try {
        return res.status(200).send({
            message: "login"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const test = (req, res) => {
    try {
        return res.status(200).send({
            message: "test was succesfull"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    register_user,
    login,
    test
}