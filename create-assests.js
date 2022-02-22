const { readFileSync, writeFileSync } = require("fs");
const defaultJSON = {
  name: "1",
  symbol: "HP",
  image: "0.png",
  properties: {
    files: [],
    category: "image",
    creators: [
      {
        address: "B6WXRhNdvawLwqxKbTw4KseyT7UNQWaxvvBkJuL6snKx",
        share: 100,
      },
    ],
  },
  description: "hello",
  seller_fee_basis_points: 500,
  attributes: [
    { trait_type: "background", value: "blue" },
    { trait_type: "eyes", value: "star-eyes" },
    { trait_type: "mouth", value: "triangle-mouth" },
    { trait_type: "face", value: "teal-face" },
  ],
  collection: { name: "numbers", family: "numbers" },
};

function createJSON(imageUrl) {
  const ret = { ...defaultJSON };
  ret.properties.files = [{ uri: imageUrl, type: "image/png" }];
  ret.image = imageUrl;
  return ret;
}
const image = readFileSync("./default.png");

for (let i = 0; i < 20; i++) {
  const json = createJSON(`${i}.png`);
  writeFileSync(`assets/${i}.json`, JSON.stringify(json, null, 2));
  writeFileSync(`assets/${i}.png`, image);
}
