module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'Welcome to Soccer | View Players'
                ,players: result
            });
        });
    },
};