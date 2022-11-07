const database = require("./database");

const getUsers = (req, res) =>{
    database
    .query("select * from users")
    .then(([users]) => {
        res.json(users);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) =>{
    const id  = parseInt(req.params.id);

    database
        .query("select * from users where id = ?", [id])
        .then(([users]) => {
            if (users[0] !=null){
            res.status(200).json(users[0]);
            }else{
              res.status(404).send("Not found");
            }
        })
        .catch((err) =>{
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        })
}

module.exports = {
    getUsers,
    getUserById,
};