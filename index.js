require("dotenv").config();
const app = require("./server/app");
const { postToInsta } = require("./instagram/photo");
const { postStoryToInsta } = require("./instagram/story");

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

(async () => {
  // Example: publish photo
  await postToInsta();

  // Example: publish story
  await postStoryToInsta({
    imageUrl:
      "https://stuffnobodycaresabout.com/wp-content/uploads/2021/06/Baby-Ruth-Pontico-Fat-Lady-circus-1941-photo-AP.jpg",
    linkUrl: "https://www.npmjs.com/package/instagram-private-api#examples",
    linkText: "Детальніше",
  });
})();
