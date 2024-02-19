const fetchdata = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await data.json();
  console.log(json);
  const div = document.getElementById("mydiv");

  json.map((item) => {
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    h2.innerHTML = item.name;
    h3.innerHTML = item.email;

    div.appendChild(h2);
    div.appendChild(h3);
  });
};
fetchdata();
