module.exports = (app) => {
    app.get("/api/test/testGet", async (req, res) => {
        return res.send({
            success: true
        });
    });
    
    app.post("/api/test/testPost", async (req, res) => {
        return res.send({
            success: true
        });
    });
};