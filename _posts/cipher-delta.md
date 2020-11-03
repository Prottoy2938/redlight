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

> Cipher Delta is web application that helps encode and decode plain content.

## Encoding

To encode content, it has two options. These are:

<li>Substitution Cipher (default)</li>
<li>AES Encryption Cipher</li>

### Substitution Cipher

[Substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher "substitution cipher wikipedia") is a encryption system where plain texts are replaced by cipher text. This application uses a low level version of this encryption system, where the each letter of the content are replaced by its _n-step_ forward or backward letter.

For example, if you set the substitute letter position is in `5`, then for the letter _`a`_ it would be replaced by the letter _`e`_, and for the letter _`b`_ it would be replaced by the letter _`f`_ and the pattern will continue on all letters respectively.

Note that currently it only supports substituting English letters.

### Key Encryption

To encrypt content using a key, it uses **[`AES`](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard "AES algorithm wikipedia")** encryption system. To use this encryption, you have to provide a key which will be used to both encrypt and decrypt the content.

If you're using this encryption, then don't forget to save the key since you would need it to decrypt the content.

## Decoding

To decode content, it has two options:

<li>Substitution Cipher Decryption</li>
<li>AES Decryption</li>

### Decoding Substitution Cipher

To decode a substitution cipher, you have to paste the content and set the substitution letter position. If they are correct, it will show you the decoded content.

### AES Decryption

To decode AES encrypted content, you have to paste in the content and provide the key. If the credentials are correct, then it will show you the decrypted content.

Note that, often the encrypted content might be encrypted in both Substitution Cipher and AES encryption. When decrypting this kind of content, you need to set both the substitute letter position and the AES encryption position correctly.

## How its Build

This application is build using **Reactjs** and **TypeScript**. It uses **Chakra-UI** for most of it's UI components. And the application is deployed on **Vercel**.

To handle the letter substitution process, it uses this [algorithm](https://gist.github.com/Prottoy2938/9e1487b8ce10609b62db64732b23f943 "view algorithm on GitHub Gist").

<details>
  <summary>view code</summary>
  
```javascript
function reverse(s) {
    return s.split("").reverse().join("");
}
const engAlphabets = "abcdefghijklmnopqrstuvwxyz".repeat(3);
const reverseEngAlphabets = reverse("abcdefghijklmnopqrstuvwxyz").repeat(3);
const engAlIndexes = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};
const revEngAlIndexes = {
    z: 0,
    y: 1,
    x: 2,
    w: 3,
    v: 4,
    u: 5,
    t: 6,
    s: 7,
    r: 8,
    q: 9,
    p: 10,
    o: 11,
    n: 12,
    m: 13,
    l: 14,
    k: 15,
    j: 16,
    i: 17,
    h: 18,
    g: 19,
    f: 20,
    e: 21,
    d: 22,
    c: 23,
    b: 24,
    a: 25,
};
//string reverse if negative number
/**
 * Returns substituted cipher version
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param content - The content you want to wrap
 * @param y - How many words you want to skip, default 1
 * @returns returns the cipher
 *
 * @beta
 */
const substituteContent = (userContent, skip = 1) => {
    let substitutedContent = "";
    for (let i = 0; i < userContent.length; i++) {
        const char = userContent[i];
        //if user wants to skip forward
        if (skip >= 0) {
            //finding the char index on the list
            const charIndex = engAlIndexes[char.toLowerCase()];
            if (charIndex >= 0) {
                //if the user word is uppercase, keeping the letter casing
                if (char === char.toUpperCase()) {
                    //if user wants to skip forward
                    substitutedContent = `${substitutedContent}${engAlphabets[charIndex + skip].toUpperCase()}`;
                }
                //if the user word is lowercase
                else {
                    substitutedContent = `${substitutedContent}${engAlphabets[charIndex + skip]}`;
                }
            }
            //if the char doesn't exists in the alphabet list
            else {
                substitutedContent = `${substitutedContent}${char}`;
            }
        }
        //if user wants to skip backward
        else if (skip >= -25) {
            //finding the char index on the list
            const charIndex = revEngAlIndexes[char.toLowerCase()];
            if (charIndex >= 0) {
                //if the user word is uppercase, keeping the letter casing
                if (char === char.toUpperCase()) {
                    //if user wants to skip forward
                    substitutedContent = `${substitutedContent}${reverseEngAlphabets[charIndex + Math.abs(skip)].toUpperCase()}`;
                }
                //if the user word is lowercased
                else {
                    substitutedContent = `${substitutedContent}${reverseEngAlphabets[charIndex + Math.abs(skip)]}`;
                }
            }
            //if the char doesn't exists in the alphabet list
            else {
                substitutedContent = `${substitutedContent}${char}`;
            }
        }
    }
    return substitutedContent;
};
```

</details>

It uses [crypto-js](https://www.npmjs.com/package/crypto-js "crypto-js on npm") package to handle the **`AES`** encryption and description functionality.

## Privacy and Security

All processes (including the encryption algorithms) runs in the browser. Saved keys stays in the [browser local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "MDN localStorage doc").

Nothing is sent to the server. In fact, this application is a serverless application.

## Additional Features

### Saving key to browser

You can save your key on the browser local storage. This is particularly useful when you are using the same key multiple times.

To use the saved key, click on the dropdown button right next to the _use_ button, and select **use saved key**. It will get the saved key from the browser and apply it.

### Secure Key Generation

If you want to get a secure key, you can generate it from the app.

To generate a secure key, can go to `drawer` -> `Secure Encryption Key`, and the new key will be copied to your clipboard.

Or you can just click the `*` button under the encryption input field, this will generate a new key and also apply it.

The code that used to generate these keys was taken from from this [stackoverflow](https://stackoverflow.com/a/1349426/12966479) answer.

![generate random key code](/assets/blog/cipher-delta/key-enc-algo.jpg)

<details>
  <summary>code</summary>
  
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

### Dark Mode

The application has two theme, **light (default)** and **dark**.

To toggle theme, go to -> `drawer` -> `appearance`.

Theme mode preference would be saved on the browser, so the next time you visit the app, it will have the same theme that you had selected.

<br/>

![tree image](https://cipher-delta.edrini.xyz/tree.svg)

**Lastly**, if you have any feedback, have any feature request, facing issues or want to have other encryption option, send [an email](svesp@protonmail.com "svesp@protonmail.com") about it.
