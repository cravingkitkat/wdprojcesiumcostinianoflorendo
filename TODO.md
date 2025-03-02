# Title: In Teyvat

## Description: jissae pls do <3

## Outline:

##### Home Page:

When opening the home page, there will be a quick animation and specific music. Once the animation finishes, there will be seven buttons, one for each nation in Genshin Impact. These buttons revolve around one larger button that has a pattern that can be seen on a certain non-playable character, namely Paimon's chest.

##### Page 1 (Mondstadt):

When the button for Mondstadt on the home page is clicked, the user will be redirected to this page, which will play a short animation and play Mondstadt-themed music. Once the animation finishes, the page will display Mondstadt scenery in the background, with text boxes describing the storyline of Mondstadt. If the user scrolls down, the user will see an image of Mondstadt's archon, with a text box on the right describing the archon.

##### Page 2 (Liyue):

When the button for Liyue on the home page is clicked, the user will be redirected to this page, which will play a short animation and play Liyue-themed music. Once the animation finishes, the page will display Liyue scenery in the background, with text boxes describing the storyline of Liyue. If the user scrolls down, the user will see an image of Liyue's archon, with a text box on the right describing the archon.

## Wireframe: who will do?

## Js Description:

JavaScript will be used on the homepage to play music and display the animations when the website loads. It will initially hide the buttons that redirect users to other web pages and manage the redirection to those pages. We will also implement JavaScript code to have the buttons appear after the animation finishes and to make the smaller buttons revolve around the large button.
# TODO 🚧

Your new site is all yours so it doesn't matter if you break it! Try editing the code.

Let's keep track of the submitted favorites using an array. First add this code near the top of `server.js` (where the comment says `ADD FAVORITES ARRAY VARIABLE`):

```js
const favorites = [];
```

In the `POST` route, inside the `if(color)` block, add this code to save the submitted value to the array, and write it to the console:

```js
favorites.push(color);
console.log(favorites);
```

Click __Tools__ > __Logs__ at the bottom of Glitch to see the log statement in action when you submit new colors through the form.

## Keep going! 🚀

Clearly this is not a robust data storage approach and won't persist for long! Your Node apps can use a variety of databases, like [SQLite](https://glitch.com/~glitch-hello-sqlite) and [Airtable](https://glitch.com/~glitch-hello-airtable).
