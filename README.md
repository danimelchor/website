# danielmelchor.com
Welcome! This is my current website's repository. Below you will have some information about how it was made and how to run it in your own device. I hope you enjoy it and don't doubt in messaging me if you have any doubts about the project :).

## Languages and Modules
This project is made with ReactJS. This JavaScript library allows user to build single-page websites efficiently by creating views for each page and updating the components live, when needed.

In addition, this project also uses other NPM modules such as `tailwindcss`,`typewritter-effect`,`react-scroll` and `react-tsparticles`.

## How to set it up in your machine
First of all you should have `npm` installed in your machine, which should come by default with any OS. To check if you have it, open terminal and run `npm -v`. If you don't have it, follow the instructions [here](https://www.npmjs.com/get-npm).

Then, clone this repository where you want the project to be using git (Open terminal, `cd` into any location and run `git clone --single-branch --branch main https://github.com/danimelchor/website/` and then `cd` into the website folder where the React App is located (`cd website`).

Then, to install all the used packages in this project run `npm install`.

Finally, to open this website locally and be able to make changes, run `npm run start` and it should automatically open a tab in your browser with the localhost address your website will be hosted at.

The files of this react app are located inside `website > src` divided into 3 main folders: `components`, `containers` and `pages`.

## Dark mode
For the dark mode I used [TailwindCSS](https://tailwindcss.com/)'s integrated dark-mode functionality. For this to work I used the local storage JavaScript provides access to and added an item called `"theme"` which can be either `"dark"` or `"light"`. Depending on this property, the theme of the website is changed. Each element can be added a class with the word `"dark:"` before for it to be applied when the website is set to dark mode (I.e.: `dark:text-gray-200`). The full explanation of this can be found [here](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually).

## Particles
For the particles I used npm's module [react-tsparticles](https://www.npmjs.com/package/react-tsparticles), which, not going to lie, was a pain to configure. I found most of the information about this module navigating around their [official website](https://particles.js.org/) [demos](https://particles.js.org/samples/index.html#chars) and [codepen](https://codepen.io/collection/DPOage). If you want to copy my particle system, head to `website > src > components > Welcome.js`.

## Typewritter Effect
This animation is pretty simple and their documentation is good. Check out the react usage [here](https://www.npmjs.com/package/typewriter-effect#react)

## Smooth scroll (even in Safari)
I just use the default package with a few custom settings. The usage is pretty simple, check it out [here](https://www.npmjs.com/package/react-scroll)
