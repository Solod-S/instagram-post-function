const { createIgClient } = require("./client");
const { fetchImage } = require("../utils/fetchImage");

async function postStoryToInsta({ imageUrl, linkUrl, linkText }) {
  try {
    const ig = await createIgClient();
    const imageBuffer = await fetchImage(imageUrl);

    const result = await ig.publish.story({
      file: imageBuffer,
      stickerConfig: linkUrl
        ? {
            story_cta: [
              {
                links: [
                  {
                    webUri: linkUrl,
                    linkType: 1,
                    linkText: linkText || "Детальніше",
                  },
                ],
              },
            ],
          }
        : undefined,
    });

    console.log("✅ Сторис опубликован:", result.media.pk);
  } catch (error) {
    console.error("❌ Ошибка при публикации сторис:", error);
  }
}

module.exports = { postStoryToInsta };
