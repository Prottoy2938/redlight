---
title: "A Online Tool to Change SVG Color Using CSS"
excerpt: "About a web application that can change color of an SVG using CSS filter"
metaDescription: "About a web application that can change color of an SVG using CSS filter"
coverImage: "/assets/blog/change-svg-color/logo-1200.jpg"
date: "2037-11-06T05:35:07.322Z"
author:
  name: Prottay
  picture: "/assets/blog/authors/svesp.jpg"
ogImage:
  url: "https://blog.edrini.xyz/assets/blog/change-svg-color/logo-1200.jpg"
url: "https://change-svg-color.edrini.xyz/"
github: "https://github.com/Prottoy2938/change-svg-color"
---

> It is an online tool that helps change the color of an SVG using CSS filter

## How to Use it

<li>Pick a color using the Color Picker</li>
<li>See the preview of that color on the SVG</li>
<li>Copy and Paste the <code>filter</code> outcome on your CSS</li>

Also, keep in mind the `loss` number, which indicates if the color would work as expected or not.

## How it works

When you select a color from the color picker, it takes the `rgb` version of that color and runs this [algorithm](https://gist.github.com/Prottoy2938/7ff636330f2eec9bfeee56a49d6471e4 "view the algorithm on GitHub Gist").

The algorithm returns the CSS `filter` of that color, the application takes the color, updates the `filter` outcome value and updates the preview svg color using that filter value.

## How it's Built

This application is build using Reactjs and TypeScript. It uses Chakra-UI for most of it's UI components.

The color picker component is from the [react color](https://github.com/casesandberg/react-color "react-color on GitHub") library, and the application uses the [@emotion](https://www.npmjs.com/package/@emotion/core "@emotion/code on npm") library to apply to filter value on the SVG in real time. Also it uses the [prism react renderer](https://github.com/FormidableLabs/prism-react-renderer "prism react renderer on npm") library to highlight the CSS filter output.

And the application is deployed on Vercel.

## Additional Features

#### Upload Custom SVG

You can upload your custom svg and do the color preview on that SVG.

<br />

**Lastly**, if you have any feedback, or facing any issues, send [an email](mailto:svesp@protonmail.com "svesp@protonmail.com") about it.
