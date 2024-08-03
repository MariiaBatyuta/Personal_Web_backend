export const warmUpServerControllers = (req, res, next) => {
    try {
        res.status(200).send({message: "Server is running successfully."})
    } catch (error) {
        next(error);
    }
}