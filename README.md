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

Messages are emailed to **suev.production@gmail.com** via [FormSubmit](https://formsubmit.co)
(free, no account needed). The address is set in `CONTACT_EMAIL` at the top of
`assets/js/main.js`.

**One-time activation:** the first time the form is submitted from the live site, FormSubmit
sends an activation email to suev.production@gmail.com. Click **Activate Form** in it; after
that, every submission arrives as an email with the sender's address as reply-to.
If sending fails, visitors are shown the email address to write to directly.

## Deploy

Works on any static host (GitHub Pages, Netlify, Vercel, Hostinger). All paths are
relative, so it also works from a GitHub Pages project subpath.
