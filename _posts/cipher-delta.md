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

Cipher Delta web application that helps encode and decode plain content.

It also has a header, titled **Black Background**, but since the text color is also black, its nearly invisible.

### Possible Use

<li>Testing device screen</li>
<li>Situations where you want to/ have to stare at a black screen.</li>

<br/>

Press the `f11`(windows) or `ctrl`+`cmd`+`f`(mac) if you want it to be fullscreen.

### Additional Features

> Secure key generation

If you want to get a secure key, you can generate it from the app. You can go to `drawer` -> `Secure Encryption Key`, and the new key will be copied to your clipboard. Or you can just click the `*` button under the encryption input field, this button will generate a new key and apply it in the encryption key field.

The code that used to generate this key was taken from from this [stackoverflow](https://stackoverflow.com/a/1349426/12966479) answer.
![algorithm code](/assets/blog/cipher-delta/key-enc-algo.jpg "algorithm code")

```java
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

> dark mode

To enable, go to -> `drawer`, -> `appearance`.

Theme mode preference would be saved on the browser, so the next time you visit the app, it will have the same theme that you had selected.
