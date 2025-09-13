const { createIgClient } = require("./client");
const { fetchImage } = require("../utils/fetchImage");

async function postToInsta(caption = "🔥 Новая фотка!") {
  try {
    const ig = await createIgClient();

    const imageBuffer = await fetchImage(
      "https://stuffnobodycaresabout.com/wp-content/uploads/2021/06/Baby-Ruth-Pontico-Fat-Lady-circus-1941-photo-AP.jpg"
    );

    const result = await ig.publish.photo({
      file: imageBuffer,
      caption,
    });

    console.log("✅ Фото опубликовано:", result.media.pk);
  } catch (error) {
    console.error("❌ Ошибка при публикации фото:", error);
  }
}

module.exports = { postToInsta };
