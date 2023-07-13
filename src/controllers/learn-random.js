export default (req, res, next) => {
    try {
        res.render("learn-random")
    } catch (error) {
        next(error);
    }
};