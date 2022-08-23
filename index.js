window.addEventListener("DOMContentLoaded", getData);
document.getElementById("submit").addEventListener("click", getSend);

var x = document.createElement("TBODY");

function getSend() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  const obj = {
    email,
    name,
  };

  axios
    .post(
      "https://crudcrud.com/api/985dfeb3f37640ab8db9da80a54feb02/appointmentData",
      obj
    )
    .then(getData())
    .catch((err) => console.log(err));
}
const ul = document.getElementById("data");

function getData() {
  axios
    .get(
      "https://crudcrud.com/api/985dfeb3f37640ab8db9da80a54feb02/appointmentData"
    )
    .then(function (res) {
      for (let i = 0; i < res.data.length; i++) {
        var li = document.createElement("li");
        var email = document.createTextNode(`${res.data[i].email}, `);
        var name = document.createTextNode(`${res.data[i].name}`);
        var del = document.createElement("button");
        var edit = document.createElement("button");
        del.innerHTML = "Delete";
        edit.innerHTML = "Edit";
        del.setAttribute("onclick", `Delete('${res.data[i]._id}')`);
        edit.setAttribute("onclick", `Edit('${res.data[i]._id}')`);
        li.setAttribute("id", `${res.data[i]._id}`);
        li.append(email, name, del, edit);
        ul.appendChild(li);
      }
    });
}

function Delete(id) {
  axios
    .delete(
      `https://crudcrud.com/api/985dfeb3f37640ab8db9da80a54feb02/appointmentData/${id}`
    )
    .then(() => document.getElementById(`${id}`).remove())
    .catch(() => alert("Something went wrong"));
}
function Edit(id) {
  console.log(id);
}
