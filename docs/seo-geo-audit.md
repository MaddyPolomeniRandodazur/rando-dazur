# Audit et optimisation SEO/GEO — Rando d’Azur

Date : 7 octobre 2026. Domaine canonique : https://www.randodazur.com.

## Architecture et constats

Le site possède déjà des versions anglaise (sans préfixe), française (`/fr`) et italienne (`/it`), 12 slugs d’expériences et six destinations. Les anciennes URL EVG anglaise et française redirigent en 308 vers la page EVJF & EVG. Ces URL et toutes les autres URL existantes sont conservées.

Les pages destinations et les metadata existaient déjà ; aucune série de pages géographiques supplémentaires n’a été créée. Le Journal contient uniquement une annonce d’articles en préparation : son `noindex, follow` et son exclusion du sitemap sont intentionnels et conservés. Les pages commerciales restent indexables, y compris avec la bannière temporaire.

Problèmes identifiés : origine des canonical dépendante de variables de preview ; blocage des ressources `/_next/` ; metadata françaises peu explicites ; images sociales génériques ; absence de page professionnelle dédiée et de liens réciproques expériences/destinations ; liste erronée d’activités sur les pages détaillées Lérins ; galeries composées de placeholders répétés ; liens sociaux contenant `REPLACE-WITH-RANDO-DAZUR` ; coordonnées géographiques sans source visible dans les mentions légales.

## Corrections

- Origine canonique stable, HTTPS et domaine www. Canonical propre à chaque langue, hreflang en/fr/it et x-default. La nouvelle page B2B existe uniquement en anglais et français ; aucune traduction italienne automatique n’est annoncée. La page EVG italienne, restée distincte, ne déclare pas d’équivalences linguistiques non réciproques avec les pages fusionnées FR/EN.
- Titles et descriptions explicites pour les homepages et les expériences françaises ; ajustements des metadata anglaises pour la randonnée, le corporate et la Provence sauvage. Les destinations conservent leurs textes géographiques spécifiques et leurs metadata uniques.
- Robots autorise les pages publiques et les ressources Next.js. Sitemap : URL canoniques uniquement, traductions effectivement présentes, sans Journal ni URL redirigées.
- Page `/travel-trade` et `/fr/travel-trade`, accessible depuis le footer, la section agences et les pages détaillées. Contenu naturel pour agences, DMC, tour-opérateurs, hôtels, conciergeries, groupes corporate/incentive et croisiéristes ; FAQ courte, sans tarifs ni partenariats inventés.
- Liens expériences → destinations réellement concernées, expériences complémentaires et B2B. Les destinations relient déjà les expériences. Lérins propose exclusivement randonnée, randonnée apéro et escape games outdoor, dans les trois langues.
- Données structurées Organization/LocalBusiness, Person, WebSite, WebPage, Service, Place, BreadcrumbList et FAQPage pour les questions déjà visibles des destinations. Téléphone, logo réel, zones desservies, fondatrice et adresse déjà publiée dans les mentions légales. Coordonnées géographiques retirées faute de source visible ; aucun prix, avis, note, horaire ou certification ajouté.
- Expertise de Maddy explicitée dans sa présentation FR/EN, sans diplôme ni qualification inventés. Le balisage Person pointe vers sa section existante ; aucune page biographique artificielle créée.
- Réutilisation des originaux déjà fournis sur les pages détaillées : trois photos par destination et les visuels disponibles par expérience. Fichiers originaux conservés, dimensions relevées, alt descriptifs, affichage cover, chargement responsive/optimisation Next Image, preload du hero. Les galeries de faux emplacements répétés sont remplacées par les seuls visuels disponibles. Pas de génération, retouche ou filtre ajouté. Les photos et mises en page existantes de la homepage restent conservées.
- Les URL sociales provisoires ne sont ni affichées comme liens publiés ni déclarées en `sameAs`. Aucun compte officiel n’est inventé. Téléphone, WhatsApp et e-mails restent disponibles.
- Aucun changement du style global, des animations ou de la grille de partenaires « They trust us ».

## Vérification

`npm run build` et `npm run lint`. Crawl de production local avec `scripts/verify-seo.mjs` : statuts HTTP, un H1 par page, titles/descriptions distincts, canonical, robots, OG/Twitter, hreflang, JSON-LD parsable et types/propriétés revus, téléphone, images, liens internes/ancres, 404 et redirections 308. Contrôle du sitemap et des alternatives ; contrôle explicite du Journal et de l’indexabilité malgré la bannière.

Rendu vérifié à 360, 430, 820 et 1440 px sur les homepages FR/EN, pages B2B FR/EN et plusieurs pages d’expériences/destinations : aucun débordement horizontal, titre ou header chevauchant la bannière. Captures consultées pour la nouvelle page professionnelle.

Pour reproduire le crawl, disposer de Playwright et Chromium, lancer un serveur de production après le build, puis `node scripts/verify-seo.mjs http://localhost:PORT`. `CHROMIUM_PATH` permet d’indiquer le navigateur installé. Le rapport JSON est enregistré dans `/workspace/scratch/seo-route-audit.json`.

Résultat du crawl final : 72 URL canoniques, 98 liens internes/ancres et 53 ressources image contrôlés ; aucune erreur détectée. Un contrôle complémentaire des liens HTML rendus confirme qu’aucune des 72 pages canoniques n’est orpheline.

## Points de suivi

Les pages Edible Plants et EVG italienne n’ont pas de photo dédiée vérifiable : aucun visuel inexact n’a été inventé. Les URL officielles Facebook/Instagram doivent être renseignées dans `app/lib/contact-channels.ts` pour réactiver les liens. Le Journal pourra devenir indexable lorsqu’il contiendra de vrais articles.

Les vérifications locales ne mesurent pas les Core Web Vitals réels des visiteurs. Leur suivi ainsi que celui des requêtes et de l’indexation se fait après déploiement dans Search Console et les outils de mesure de production. Les balises de vérification Google/Bing restent configurables via les variables déjà prévues dans le projet. Le classement ou la citation par un assistant IA ne peut pas être garanti par les seules modifications du code.
