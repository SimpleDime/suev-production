# SUEV Production website

Static copy of the SUEV Production site (originally built with Hostinger Horizons at
`darkorchid-bear-518475.hostingersite.com`). Plain HTML + CSS, no build step.

## Structure

```
index.html              Home: logo, client marquee, About us, Contact form, socials
services/index.html     Portfolio: Commercials, Events, Music Videos (link to Vimeo showcases)
assets/css/style.css    All styles (fonts: Barlow + Bitter from Google Fonts)
assets/js/main.js       Contact form handler
assets/images/          Logo, contact photo
assets/images/clients/  Client logos shown in the scrolling marquee
assets/images/portfolio/ Portfolio thumbnails
```

The images were captured as screenshots from the live site.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Contact form

The original form posted to Hostinger's built-in backend, which a static copy can't use.
To make it send messages, create a form endpoint with a service such as Formspree,
Getform or Basin and paste its URL into `FORM_ENDPOINT` at the top of `assets/js/main.js`.
Until then, submitting shows a note pointing visitors to LinkedIn/Instagram.

## Deploy

Works on any static host (GitHub Pages, Netlify, Vercel, Hostinger). All paths are
relative, so it also works from a GitHub Pages project subpath.
