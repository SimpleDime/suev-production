# SUEV Production website

Static copy of the SUEV Production site (originally built with Hostinger Horizons at
`darkorchid-bear-518475.hostingersite.com`). Plain HTML + CSS, no build step.

## Structure

```
index.html              Home: logo, client marquee, About us, Contact, LinkedIn/email/Instagram
services/index.html     Portfolio: Commercials, Events, Music Videos (link to Vimeo showcases)
assets/css/style.css    All styles (fonts: Barlow + Bitter from Google Fonts)
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

## Contact

The email icon and the address at the bottom of the home page open a new email to
**suev.production@gmail.com** (`mailto:` link in `index.html`).

## Deploy

Works on any static host (GitHub Pages, Netlify, Vercel, Hostinger). All paths are
relative, so it also works from a GitHub Pages project subpath.
