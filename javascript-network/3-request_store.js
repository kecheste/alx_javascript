const request = require("request");
const fs = require("fs");

const url = process.argv[2]; // URL to request
const filePath = process.argv[3]; // File path to store the response

// Make a request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
  } else if (response.statusCode !== 200) {
    console.error("Status:", response.statusCode);
  } else {
    // Write the response body to a file
    fs.writeFile(filePath, body, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        // console.log('File saved successfully!');
      }
    });
  }
});
