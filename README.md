# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Solution ScreenShot on laptop](/Solution-ScreenShots/Solution-ScreenShot-laptop.png)
![Solution ScreenShot active status](/Solution-ScreenShots/Solution-ScreenShot-active-status.png)
![Solution ScreenShot mobile](/Solution-ScreenShots/Solution-ScreenShot-mobile.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/jlubiba/Advice-Generator)
- Live Site URL: [Add live site URL here](https://jlubiba.github.io/Advice-Generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript custom properties
- Npm

**Note: These are just examples. Delete this note and replace the list above with your own choices**

1. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
2. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
3. Write out the base styles for your project, including general content styles, such as `font-family`, `font-size`, `color`, and `background-color`.
4. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
5. Start adding the fetch method to get the information from the API, then the variables that are obtained from the API data from [Advice Slip API](https://api.adviceslip.com).
6. Create the function that will dictate the behavior of the page.
7. Link the Event listener to the HTML element that will start the behavoir.
8. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
9. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this.

### What I learned

This is recap over some of your major learnings while working through this project.

While working on this project, the main things that I have learned are:
- Using the fetch() method in JavaScript for get APIs;
- Using the fetch() method requires one to install `node-fetch` and importing the method from `node-fetch` to be able to test-run the test in VS Code.
- I have learned how to work with shadows, and what the different rows of information in its JS mean.
- One can use the `onclick` event listener in the JS file attaching it to a varibale to have it work with a function.
- I have learned how to using the picture tag, source tag, and image tag to influence or change an image based on the screen width using the media attribute.

Changing images based on media conditions
```html
<picture>
  <source src="/images/conditional-image.png" media="(max-width: 575px;)">
  <img src="/images/default-image" width="***%" alt="Image Description">
</picture>
```

Using onclick on a variable in JS to after the DOM code:
```js
let diceRoll = document.querySelector(".dice-circle");
 diceRoll.onclick = function buttonPress() {};
```
**Note: I am not certain that this is best practice, but it works.**


While working with shadows, here is how to control its elements in CSS:
```css
.dice-circle:hover {
    /* box-shadow: shift-left(-)/right(+) shift-up(-)/down(+) blur spread  */
    /* Inside the color, adding one more thing controls the opacity here it's "0.7" */
    box-shadow: 0px 0px 50px 3px hsl(150, 100%, 66%, 0.7);
    -webkit-box-shadow: 5px 5px 50px 3px hsl(150, 100%, 66%, 0.7);
}
```

To install `node-fetch`, type the following code  in the terminal: `npm i node-fetch`

**Note: There are other methods but this is the one I chose to use thsi time around.**

The code import fetch to one's JavaSript:
```js
import fetch from "node-fetch";
```


### Continued development

The areas that I want to continue focusing on in future projects. These are concepts I am still not completely comfortable with and techniques you found useful that you want to refine and perfect.

I have familiarized myself with the fetch() method to get elements from from an API. I think that its really interesting. I'll work some more on that to learn how to use its options and how to post elements with it as well.

I would like to practice some more element positioning with absolute positioning and fixed one, just for the fun of it. Working on this project I realixed that I have not used them often before.


### Useful resources

- [Learn Fetch API In 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0) - This video helped me for further understand how to use fetch to get API data.
- [Fetch is not defined error fixed nodejs ReferenceError fetch api call error solved](https://www.youtube.com/watch?v=Z2RWNwX40NU) - This helped me to solve my fetch SyntaxError in my IDE (VS Code). I really liked this pattern and will use it going forward.
- [Making Use of APIs in Your Front End](https://medium.com/swlh/making-use-of-apis-in-your-front-end-c168e343bea3) - This is an amazing article which helped me finally understand how the fetch method works with APIs. I'd recommend it to anyone still learning the foundamentals of this concept.
- [Making Use of APIs in Your Front End](https://javascript.info/introduction-browser-events) - This is a good article which helped me with js events. I'd recommend it to anyone still learning the foundamentals of this concept.
- [Box-Shadow CSS Generator](https://html-css-js.com/css/generator/box-shadow/) - This helps one generate box-shadow, and see how different changes in the code affects the shadow around the box. I'd recommend it to anyone still learning this concept.
- [HTML `<picture>` Tag](https://www.w3schools.com/tags/tag_picture.asp) - This helps understand how the picture tag works.
- [Frontend Mentor](https://www.frontendmentor.io/home) - This is an amazing site to find designs to practice Web development on with a great community.

## Author

- Frontend Mentor - [Jean-marc Lubiba](https://www.frontendmentor.io/profile/jlubiba)
- Github - [Jean-marc Lubiba](https://github.com/jlubiba)
- Dev - [Jean-marc Lubiba](https://dev.to/jlubiba)

