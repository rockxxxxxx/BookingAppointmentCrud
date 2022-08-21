document.getElementById("submit").addEventListener("click", getSend);
document.getElementById("show").addEventListener("click", getData);

var x = document.createElement("TBODY");

function showData() {
  var y = document.createElement("TR");
  var z1 = document.createElement("TD");
  var z2 = document.createElement("TD");
  z1.innerHTML = "rakesh raushan";
  z2.innerHTML = "rakesh.singh@gmail.com";
  y.append(z1, z2);
  x.appendChild(y);

  document.getElementById("tbl").appendChild(x);
}

showData();

function getSend() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  const obj = {
    email,
    name,
  };

  axios
    .post(
      "https://crudcrud.com/api/81dda1eabde44a3a8f7b80b965615739/appointmentData",
      obj
    )
    .then(getData())
    .catch((err) => console.log(err));
}

function getData() {
  axios
    .get(
      "https://crudcrud.com/api/81dda1eabde44a3a8f7b80b965615739/appointmentData"
    )
    .then(function (res) {
      for (let i = 0; i < res.data.length; i++) {
        var y = document.createElement("TR");
        var z1 = document.createElement("TD");
        var z2 = document.createElement("TD");
        z1.innerHTML = res.data[i].email;
        z2.innerHTML = res.data[i].name;
        y.append(z1, z2);
        x.appendChild(y);

        document.getElementById("tbl").appendChild(x);
      }
    });
}
