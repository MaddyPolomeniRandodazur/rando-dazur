# Official social and Regiondo connections

Instagram: https://www.instagram.com/randodazur
Facebook: https://www.facebook.com/randodazur/

Facebook's supplied share link redirects to this public page. Its canonical and og:url confirm the address, with the title “Rando d'Azur | Mandelieu”. No advertising SDK or pixel is integrated.

Regiondo shop: https://randodazur.regiondo.fr/categories

Maintain product assignments in `app/lib/regiondo.ts`. A null product URL always falls back to the active shop, without tracking parameters. Only add individual links after confirming that the product matches the website's current offer.

| Website experience | Individual product confirmed | Active booking URL |
| --- | --- | --- |
| Food Tours | No | https://randodazur.regiondo.fr/categories |
| Hiking Experiences | No | https://randodazur.regiondo.fr/categories |
| Sunset Apéro Hikes | No | https://randodazur.regiondo.fr/categories |
| Cycling Experiences | No | https://randodazur.regiondo.fr/categories |
| Wild Provence | No | https://randodazur.regiondo.fr/categories |
| Edible Plants | No | https://randodazur.regiondo.fr/categories |
| Outdoor Escape Games | No | https://randodazur.regiondo.fr/categories |
| Family Experiences | No | https://randodazur.regiondo.fr/categories |
| EVJF / Bachelorette Groups | No | https://randodazur.regiondo.fr/categories |
| EVG Experiences (Italian route) | No | https://randodazur.regiondo.fr/categories |
| Corporate & Incentive Travel | No | https://randodazur.regiondo.fr/categories |
| Cruise Guests | No | https://randodazur.regiondo.fr/categories |
| Cannes City Discovery | No | https://randodazur.regiondo.fr/categories |
| Estérel Mountain Bike Adventure | No | https://randodazur.regiondo.fr/categories |
| Mimosa Season Cycling Tour | No | https://randodazur.regiondo.fr/categories |

## Product observed, not automatically assigned

The shop currently links to “La grande aventure pour les enfants : rando, chasse au trésor et découverte de la nature”:
https://randodazur.regiondo.fr/la-grande-aventure-pour-les-enfants-rando-chasse-au-tresor-et-decouverte-de-la-nature

This children's activity is not a confirmed one-to-one replacement for the website's private Family Experiences or Outdoor Escape Games offers. No historical price, availability or equipment claim was imported. The catalogue's product set can change when the owner updates it.

## Why direct links

Regiondo documents a Widget Editor and React catalogue/product widgets:
https://support.regiondo.com/hc/en-us/articles/20179528874140-How-to-use-the-Widget-Editor

Widget cookie guidance:
https://support.regiondo.com/hc/en-us/articles/20180060659100-Cookies-notice

An embedded widget could later show products and the booking calendar within the site. It would also load third-party resources and require a separate review of consent and data flows. The current integration uses only ordinary links: no iframe, Regiondo script, Meta pixel, API key or password. External services load only after visitors open a link, and apply their own privacy and cookie choices. Existing consent-gated Vercel Analytics is unchanged; booking links use the existing anonymous conversion category with no extra payload.

## Owner follow-up

Update/create the matching offers in Regiondo, including accurate descriptions, prices, options and availability. Publish them to this ticketshop, verify the public pages and booking flow, then copy confirmed product URLs into the central configuration. Booking access is active now and does not wait for those changes. No purchase or payment was performed during verification.
