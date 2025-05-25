require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const { IgApiClient } = require("instagram-private-api");
const { get } = require("request-promise");
const CronJob = require("cron").CronJob;

const postToInsta = async () => {
  try {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const imageBuffer = await get({
      url: "https://mezha.net/ua/kd_image_generate/ukraine-russia-prisoner-exchange-three-bukovynians-freed-on-may-24/849012.jpg?ver=0.1.0",
      encoding: null,
    });

    const result = await ig.publish.photo({
      file: imageBuffer,
      caption: "Really nice photo from the internet!",
    });
    console.log(`result`, result);
  } catch (error) {
    console.log(`error`, error);
  }
};

const cronInsta = new CronJob("30 5 * * *", async () => {
  postToInsta();
});

cronInsta.start();
postToInsta();
