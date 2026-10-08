# Nettoyage des médias — Rando d’Azur

Audit du 8 octobre 2026. Base : commit `204bae1`, projet Vercel `rando-dazur` / `prj_GQ58pyUUlU7CbHXOhQf9Wro44xtH`.

## Vidéos et usages

Recherche dans tous les répertoires public/media/medias/assets hors dépendances, builds et historique Git. Le seul répertoire correspondant dans le projet est `public` : **139 fichiers**, dont **aucune vidéo**. Contrôle par extensions et par type MIME réel, y compris les fichiers sans extension : zéro vidéo et zéro type binaire indéterminé.

Le dossier `public/images/press/TV` contient uniquement des photos/captures JPEG. Les mentions de vidéos dans la bibliothèque historique de presse ne sont pas des fichiers vidéo actuellement déployés. Aucun composant n’importe `getPressAssets` ou `getPressTelevisionPhotos` ; ces helpers d’archives contiennent des scanners génériques, pas des URL vidéo cassées affichées. Ils sont conservés pour éviter de modifier inutilement des fonctionnalités.

**Vidéos supprimées : aucune ; poids supprimé : 0 octet.** Aucun fichier d’usage incertain supprimé. Les liens vers reportages/lecteurs externes et les archives historiques sont conservés. L’historique Git et les anciens déploiements ne sont pas touchés.

## Optimisations

- 18 JPEG de presse supérieurs à 2 Mo : compression JPEG haute qualité (95), dimensions inchangées, profils ICC et EXIF strictement conservés. Pas de filtre, recadrage ni réduction de résolution. PSNR mesuré entre 41,5 et 44,8 dB ; comparaison visuelle de détails et d’un aperçu complet.
- 5 PNG d’archives supérieurs à 500 Ko : recompression sans perte, buffers RGBA décodés strictement identiques.
- Les **139 fichiers et tous leurs chemins sont conservés**. Les 116 autres fichiers ont un hash SHA-256 strictement inchangé, dont les photos de l’accueil, des expériences et des destinations, tous les PDF, les logos et SVG non concernés.
- Les originaux des fichiers recompressés sont conservés hors dépôt dans `/workspace/scratch/media-cleanup/originals` pour revue locale ; ils ne sont pas ajoutés au build.
- Les six anciennes fiches commerciales récupérées avant cette intervention sont préservées séparément hors dépôt, dans `/workspace/library-files/rando-dazur-historical-offers-originals`, pour la mission éditoriale en attente. Elles n’alourdissent pas cette livraison de médias.

## Poids avant / après

Mesure comparable des fichiers versionnés présents au début, hors `.git`, `node_modules`, `.next`, caches locaux et nouvelles pièces d’audit :

| Périmètre | Avant | Après | Gain |
| --- | ---: | ---: | ---: |
| Sources du projet, mêmes fichiers | 130 096 769 octets | 104 317 916 octets | 25 778 853 octets |
| Ressources publiques | 129 196 031 octets | 103 417 178 octets | 25 778 853 octets |

Soit **25,78 Mo / 24,58 Mio économisés**, environ 20 % des médias publics. Les petits documents d’audit/scripts ajoutés ne sont pas inclus dans la comparaison des mêmes fichiers. Ce gain réduit les fichiers des prochains builds ; ce n’est pas une mesure de récupération du Deployment Storage existant.

La taille totale du workspace inclut dépendances, caches et historique Git ; elle varie avec les builds et ne représente pas la taille du site. Les anciennes versions des fichiers restent dans Git, conformément à la demande de préserver l’historique.

## Fichiers volumineux conservés

Les PDF ne sont pas recompressés avec réduction de qualité : scans/textes et supports presse à préserver. Les photos suivantes restent grandes pour conserver leur résolution originale. Liste exhaustive >2 Mo dans `media-cleanup-audit.json`.

- `public/images/press/Articles/LFA Mandelieu-la-Napoule_Randonnée en forêt d_or.pdf` : 10.30 Mo.
- `public/images/press/TV/IMG_20180618_151703.jpg` : 4.45 Mo.
- `public/images/press/TV/IMG_20180803_194815.jpg` : 3.77 Mo.
- `public/images/press/TV/IMG_20180618_150130.jpg` : 3.62 Mo.
- `public/images/press/Articles/Le Figaro Magazine - Mimosa - Décembre 2021.pdf` : 3.53 Mo.
- `public/images/press/TV/IMG_20180803_194813.jpg` : 3.48 Mo.
- `public/images/press/TV/IMG_20180618_150428.jpg` : 3.47 Mo.
- `public/images/press/TV/IMG_20180618_150429_1.jpg` : 3.45 Mo.

## Vérifications

- Build Next.js, TypeScript et ESLint réussis ; 61 pages statiques/prérendues, architecture inchangée.
- Audit SEO : 52 routes, 68 liens internes, 58 images affichées, aucun échec.
- 137 URL de médias : HTTP 200 et Content-Length exact. Les deux `.gitkeep` sont des marqueurs de répertoire, pas des médias à servir.
- Contrôle d’intégrité : 139 chemins présents, 116 hashes inchangés, 23 fichiers optimisés conformes à la nouvelle empreinte et aux dimensions d’origine.
- Contrôle navigateur EN/FR, accueil/presse/vélo à 390, 768 et 1440 px : images décodées, absence de débordement horizontal et d’erreur JavaScript.
- Aucune modification de page, composant, style, contact, tarif, formulaire, réservation, réseau social ou newsletter.

Rejouer : `node scripts/verify-media-cleanup.mjs http://localhost:3046`.

## Vercel et livraison

Le connecteur lit le projet et confirme la production existante READY (`204bae1`), mais refuse la lecture de l’équipe/Usage avec 403. Aucun CLI Vercel authentifié ni token Vercel disponible. La capacité restante actuelle est **inconnue** ; l’ancienne mesure de 9,19 Go / 10 Go n’est pas présumée actuelle.

Les fichiers et le commit local sont prêts. **Pas de push ni nouveau déploiement déclenché sans confirmation de capacité**, conformément à « si le quota le permet ». Aucun déploiement ancien supprimé, aucun réglage de facturation/rétention, DNS ou IONOS modifié.

Action restante : relever la valeur actuelle dans Vercel Team > Usage & Resources > Deployment Storage. Une fois la capacité confirmée, un seul push `main` peut déclencher la livraison GitHub/Vercel habituelle. Le quota exact et l’effet cloud ne sont pas remplacés par la somme des fichiers locaux. La documentation [Limits](https://vercel.com/docs/limits) distingue également les limites d’upload CLI du stockage des versions ; aucun déploiement CLI de test n’est créé.
