function get_(req, res) {
  return res.json({ route: "GET" });
}

function post_(req, res) {
  return res.json({ route: "POST" });
}

function put_(req, res) {
  return res.json({ route: "PUT" });
}

function delete_(req, res) {
  return res.json({ route: "DELETE" });
}

module.exports = {
  get_,
  post_,
  put_,
  delete_
};