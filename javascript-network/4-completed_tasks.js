const request = require("request");

const url = process.argv[2]; // URL to request

request(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
  } else if (response.statusCode !== 200) {
    console.error("Status:", response.statusCode);
  } else {
    const jsonObject = JSON.parse(body);
    const filtered = jsonObject.filter(
      (jsonObject) => jsonObject.completed === true
    );
    console.log(countElements(filtered.map((ele, index) => ele.userId)));
  }
});

function countElements(list) {
  let counter = {};

  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (counter[element]) {
      counter[element]++;
    } else {
      counter[element] = 1;
    }
  }

  return counter;
}
