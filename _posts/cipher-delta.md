---
title: "Cipher Delta"
excerpt: "About a web application that helps encode and decode plain content"
metaDescription: "About a web application that helps encode and decode plain content"
coverImage: "/assets/blog/cipher-delta/logo-img-1200.jpg"
date: "2037-11-02T05:35:07.322Z"
author:
  name: Prottay
  picture: "/assets/blog/authors/svesp.jpg"
ogImage:
  url: "https://cipher-delta.edrini.xyz/logo-img-1200.png"
url: "https://cipher-delta.edrini.xyz/"
github: ""
---

> Cipher Delta web application that helps encode and decode plain content.

### How its Build

### Additional Features

> Secure Key Generation

If you want to get a secure key, you can generate it from the app.

To generate a secure key, can go to `drawer` -> `Secure Encryption Key`, and the new key will be copied to your clipboard.

Or you can just click the `*` button under the encryption input field, this will generate a new key and also apply it.

The code that used to generate this key was taken from from this [stackoverflow](https://stackoverflow.com/a/1349426/12966479) answer.

<details>
  <summary>view code</summary>
  
```javascript
function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
```

</details>

> Dark Mode

To enable, go to -> `drawer` -> `appearance`.

Theme mode preference would be saved on the browser, so the next time you visit the app, it will have the same theme that you had selected.
