/*
Assignment 04
Continue from the above
Loop all the data in the previous JSON object
Create a div inside the page with an ID named data
Print the data inside the div as shown in the example below
Help
You can use document.create or Template Literals to create the elements directly
*/

const myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json", true);
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    let mainData = JSON.parse(this.response);
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("id", "data");
    for (let i = 0; i < mainData.length; i++) {
      let innerDiv = document.createElement("div");
      let title = document.createElement("h2");
      title.appendChild(document.createTextNode(mainData[i].title));
      innerDiv.appendChild(title);

      let content = document.createElement("p");
      content.appendChild(document.createTextNode(mainData[i].content));
      innerDiv.appendChild(content);

      let author = document.createElement("p");
      author.appendChild(document.createTextNode(`Author: ${mainData[i].author}`));
      innerDiv.appendChild(author);

      let category = document.createElement("p");
      category.appendChild(document.createTextNode(`Category: ${mainData[i].category}`));
      innerDiv.appendChild(category);

      outerDiv.appendChild(innerDiv);
    }
    document.body.appendChild(outerDiv);
  }
}
