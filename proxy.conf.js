const PROXY_CONF = {
    "/api/settings": {
        "target": "http://localhost",
        "secure": false,
        "bypass": function(req, res, proxyOptions){
            req.headers["X-Custom-Headers"]= "yes"
        }
    }
}
module.exports = PROXY_CONF;