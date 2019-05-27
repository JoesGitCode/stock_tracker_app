const RequestHelper = function(url) {
  this.url = url
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
  .then((response) => response.json());
};

RequestHelper.prototype.delete = function (id) {
  console.log(this.url);
    return fetch(`${this.url}/${id}`, {
      method: "DELETE"
    })

    .then((response) => response.json());


}



RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
  .then((response) => response.json())
};



module.exports = RequestHelper
