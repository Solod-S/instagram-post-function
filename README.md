![Version](https://img.shields.io/badge/Version-1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Runs with Node.js](https://img.shields.io/badge/Runs%20with-Node.js-43853d.svg?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Runs with Express](https://img.shields.io/badge/Framework-Express-000000.svg?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Runs with Instagram API](https://img.shields.io/badge/Instagram-API-E4405F.svg?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/developer/)
[![Runs with Axios](https://img.shields.io/badge/HTTP-Axios-5A29E4.svg?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)
[![Runs with dotenv](https://img.shields.io/badge/Env-dotenv-000.svg?style=flat-square&logo=dotenv&logoColor=white)](https://www.npmjs.com/package/dotenv)

# Instagram Automation

![Instagram Automation](/assets/instagram.jpg)

Simple Node.js application to publish photos and stories on Instagram using `instagram-private-api`.

# Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Fast, minimalistic web framework for Node.js.
- **Instagram Private API**: For programmatic posting to Instagram.
- **Axios**: HTTP client for fetching images.
- **dotenv**: To manage environment variables.

## Installation

```bash
git clone <your-repo>
cd instagram-post-function
npm install
```

Create a `.env` file in the project root:

```env
IG_USERNAME=your_instagram_username
IG_PASSWORD=your_instagram_password
IG_PROXY=optional_proxy
PORT=4000
```

## Start Server

```bash
node index.js
```

Visit `http://localhost:4000` in your browser — you should see the server running message.

## Usage

### Publish Photo

```js
const { postToInsta } = require("./instagram/photo");

postToInsta("🔥 New photo! Description under the photo.");
```

### Publish Story

```js
const { postStoryToInsta } = require("./instagram/story");

postStoryToInsta({
  imageUrl: "https://example.com/photo.jpg",
  linkUrl: "https://example.com",
  linkText: "Learn more",
});
```

**Notes:**

- Clickable links in stories work only for **business/creator accounts**.
- Captions under photos (`caption`) support emojis, #hashtags, and @mentions. HTML is not supported.
