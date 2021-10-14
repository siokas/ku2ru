<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap" rel="stylesheet">
<p align="center">
<img src="https://raw.githubusercontent.com/siokas/ku2ru/main/public/logo.svg" />
<h1 style="text-align:center; font-family: 'Baloo 2', cursive;">KU2RU</h1>
</p>

KU2RU is a fully custom made blog. All the posts are created by a text generator bot given just a relevant sentence which is a title of an article from various news websites. The bot is using pretrained models to generate the text.

### Front-end

The project is built in Typescript with NextJS which is a React Javascript framework. The theme is custom made using Tailwind CSS framework.

### Back-end

There is not an implementation in the back-end of the blog because it uses Contenful Headless CMS.

### airticles

For the text generation bot I have created a simple python script which uses some pretrained models in order to generate a realistic article. 

All models are imported from HuggingFace.
