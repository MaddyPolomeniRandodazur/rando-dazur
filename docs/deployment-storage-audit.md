# Audit Deployment Storage — 8 octobre 2026

## Résultat et limites d'accès

Projet `rando-dazur`, `prj_GQ58pyUUlU7CbHXOhQf9Wro44xtH`.
Le connecteur permet la lecture du projet, de 53 déploiements et de leurs alias.
Il ne donne pas accès à la mesure de stockage dans Usage & Resources : la lecture explicite de l'équipe retourne 403 et l'arbre des fichiers du déploiement retourne 404. La taille individuelle et les pins de rétention ne sont pas exposés.
**9,19 Go / 10 Go est donc la valeur fournie par la propriétaire, pas une mesure reproduite par cet audit.** Aucun déploiement n'a été supprimé, aucune facturation ou rétention n'a été modifiée.

## Nature du quota

Le changelog Hobby du 16 septembre 2026 décrit une capacité de **10 Go pour les déploiements conservés** : chaque déploiement gardé occupe du stockage ; au-delà du plafond, les nouveaux déploiements peuvent être bloqués jusqu'à libération de place. Ce n'est pas un compteur de tous les octets historiquement téléversés, remis à zéro à chaque mois.
La documentation de facturation générale mesure aussi le stockage en **Go-mois**, à partir du maximum quotidien stocké par projet. Supprimer des ressources réellement retenues réduit le stockage futur ; cela ne réécrit pas les maxima déjà enregistrés. Ne pas confondre ce calcul avec le plafond Hobby.

La suppression peut donc aider le plafond Hobby, mais son gain précis et son délai de prise en compte ne sont pas vérifiables avec ces accès. La rétention documentée comporte une récupération temporaire après suppression ; ne pas promettre une baisse immédiate sous le plafond. Aucun test destructif n'a été effectué pour mesurer ce délai.

## Origine observée

53 déploiements du 5 au 8 octobre : 36 READY et 17 ERROR ; 40 Production et 13 Preview.
De nombreux commits de photos déclenchent chacun une nouvelle production complète. Le commit `806cda55` a aussi trois déploiements. Un commit uniquement documentaire (`bab5c01`) a déclenché une production inutile.
Avant optimisation, les fichiers publics totalisaient 143 626 204 octets, dont environ 130 Mio de presse (photos et PDF).
La combinaison de versions conservées et d'assets volumineux explique une pression importante sur le stockage. **Sans tailles cloud par version ni ventilation d'équipe, impossible d'attribuer précisément les 9,19 Go ou de sommer les tailles locales comme s'il s'agissait de mesures Vercel.** Les déploiements ERROR ne sont pas supposés occuper la même place que les READY.

L'arbre GitHub public du commit `806cda558cc8730531abdf89249c60ab58b1c942`, actuellement recensé dans le déploiement READY `dpl_B8F9KQTp5Y8uHRQdjYqoecq7cL2V` et deux ERROR, contient **1 556 809 139 octets de fichiers publics**. Les dossiers `public/images/Rando d_Azur` (707 351 469 octets) et `public/images/experiences` (667 879 625 octets) comportaient de nombreux doublons exacts. L'arbre complet non tronqué révèle 173 groupes de blobs identiques, soit 677 480 764 octets redondants. Ces grandes archives ont déjà disparu du build courant lors d'une modification antérieure ; aucune nouvelle suppression du dépôt n'est nécessaire. Les anciennes versions conservées peuvent donc continuer à peser malgré un repository courant beaucoup plus léger. Preuve Git (pas une taille de facturation cloud) : `deployment-storage-historical-assets.json`.

Le cache local `.next/cache` (~128 Mio avant build) n'est pas assimilable au stockage de déploiement. Les traces de fonctions examinées ne montrent pas de copie des grosses photos publiques dans les bundles de fonctions. Les quatre paires JPEG identiques dans Articles restent en place : supprimer leurs URL pourrait casser des liens ou des téléchargements.

## Conservation et nettoyage

Rétention Hobby documentée : 30 jours par défaut ; vérifier la configuration effective dans Settings > Deployment Retention. Les versions observées ont moins de quatre jours, donc ne sont pas encore expirées.
Depuis septembre 2026 : exceptions pour les trois productions les plus récentes et les trois déploiements les plus récents de tout type, production courante jamais supprimée, alias et branches actives protégés. Les previews n'ont plus de réserve distincte. Si l'équipe dépasse 10 Go, Vercel annonce une suppression immédiate des versions hors exceptions plutôt que l'attente de 30 jours.

Cinq versions sont explicitement conservées ci-dessous : production courante, rollback, troisième production récente et deux alias de branches. Les 48 autres sont une liste d'inspection, **pas une liste autorisée de suppressions**.
Le projet a aussi Vercel Authentication activé sur `all_except_custom_domains`. Cela protège l'accès aux URL Vercel ; ce n'est pas la même chose qu'un pin de rétention. Conformément à la demande de ne jamais supprimer un déploiement protégé, aucune version n'est déclarée supprimable sans risque tant que ces protections, pins et besoins de rollback ne sont pas vérifiés dans le dashboard.

Avant toute suppression : lire Usage & Resources sur la même période, inspecter pins/alias/branches actives, établir la liste exacte des IDs et demander l'accord explicite de la propriétaire. Après suppression autorisée seulement : comparer les mesures cloud et confirmer la disparition effective des ressources. Aucun accord n'est demandé sur une liste dont la sûreté n'est pas établie.

## Optimisations réalisées

- 57 JPEG de presse examinés ; 56 recompressés sans perte via `jpegtran -copy all -optimize`, avec scans progressifs seulement quand plus petits.
- Ni résolution, ni pixels, ni orientation modifiés. Comparaison des buffers RGB décodés et hash SHA-256 pour chaque fichier ; conservation des marqueurs de métadonnées. Aucun chemin d'image supprimé ou renommé. Aucune photo de homepage/expérience/destination modifiée.
- JPEG examinés : 112 467 533 → 97 359 014 octets, soit **15 108 519 octets économisés (15,11 Mo / 14,41 Mio)**. Fichiers publics : 143 626 204 → 128 517 685 octets. Cela réduit les nouveaux artefacts, pas les anciennes versions déjà stockées. Preuves : `deployment-storage-images.json`.
- `vercel.json` ajoute un Ignored Build Step conservateur : seules les modifications de documentation et scripts de vérification évitent un build. Comparaison avec `VERCEL_GIT_PREVIOUS_SHA`, dernier déploiement réussi, pour ne jamais oublier un changement applicatif dans un push multi-commits. Premier déploiement, SHA indisponible, erreur Git, modification runtime ou redéploiement volontaire : build maintenu.
- Ce filtre s'applique à l'intégration Git ; le déploiement actuel est bien de source `git`. L'ancienne version volumineuse `806cda55` est de source `cli` : éviter aussi les livraisons CLI manuelles inutiles, que ce filtre Git ne supprime pas.
- Aucun déploiement Preview de test supplémentaire créé ; une seule livraison groupée après vérifications.

## Vérifications avant livraison

- `npm run build` : réussi ; toutes les routes Next.js existantes restent produites.
- `npm run lint` : réussi.
- `node scripts/verify-deployment-filter.mjs` : Git réel dans un dossier temporaire ; documentation seule ignorée, push multi-commits contenant du code maintenu, images maintenues, premier déploiement/SHA absent/redéploiement volontaire maintenus.
- `node scripts/verify-seo.mjs http://localhost:3036` : 75 routes, 101 liens, 53 images, aucun échec ; metadata, canonicals, sitemap, robots, JSON-LD et liens inchangés vérifiés.
- Homepage et presse EN/FR/IT à 360, 768 et 1440 px : aucun débordement horizontal ni image cassée. Captures presse examinées.
- 57 URL JPEG de presse : HTTP 200 avec exactement la taille optimisée attendue ; pixels identiques contrôlés avant écriture. Aucun fichier public ajouté, supprimé ou renommé.

## Actions dashboard restantes

1. Team > Usage & Resources > Deployment Storage : confirmer les 9,19 Go, l'unité, la période et la ventilation par projet ; enregistrer une mesure avant/après.
2. Project > Deployments : examiner les tailles/ressources si visibles et les protections pour les 48 versions anciennes inventoriées. Conserver la production, les rollbacks et tous les pins/alias nécessaires.
3. Settings > Deployment Retention : vérifier que la rétention automatique Hobby est active ; ne pas supprimer ni désactiver les protections sans validation.
4. Regrouper les petites modifications en une livraison, éviter les redéploiements manuels du même SHA, et ne pousser les branches d'import intermédiaires que si un preview est utile. Le filtre de documentation est désormais dans le repository.
5. Vérifier que le nouvel Ignored Build Step est accepté dans les logs Vercel ; lors du prochain commit uniquement documentaire, vérifier le build ignoré.
6. Suivre l'espace réel après la livraison : **aucune économie du quota cloud n'est revendiquée par cet audit**. Une nouvelle version peut faire monter le total malgré sa taille réduite.

### Conditions de l'offre

La documentation Hobby réserve cette offre aux usages personnels non commerciaux. Le site présente des prestations commerciales et réservations : conserver techniquement le stockage sous 10 Go ne suffit donc pas à garantir l'éligibilité contractuelle. Demander une confirmation à Vercel concernant cet usage. Aucun abonnement, réglage de facturation ou migration payante n'a été effectué.

## Sources officielles consultées

- https://vercel.com/changelog/hobby-projects-now-retain-fewer-deployments-to-free-up-storage (16 septembre 2026)
- https://vercel.com/docs/deployment-storage
- https://vercel.com/docs/deployment-storage/optimize
- https://vercel.com/docs/deployment-retention
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/environment-variables/system-environment-variables (`VERCEL_GIT_PREVIOUS_SHA`)
- https://vercel.com/docs/project-configuration/vercel-json (`ignoreCommand`)

## Inventaire exact avant livraison

Tailles : **indisponibles pour les 53 versions**. Le JSON compagnon contient aussi le statut rollback de l'API. Cet inventaire date d'avant la nouvelle livraison ; les alias courants changent après un push réussi.

| ID | Date UTC | État | Environnement | Branche | Commit | Alias | Décision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| dpl_4N8ZMnJXNzcU7xgxEAw6biKXSKvE | 2026-10-08 06:34:56 | READY | production | main | bab5c01 | www.maddypolomeni.com, rando-dazur.vercel.app, www.randodazur.com, rando-dazur-rando-dazur.vercel.app, maddypolomeni.com, rando-dazur-git-main-rando-dazur.vercel.app, randodazur.com | CONSERVER — production actuelle |
| dpl_FPpoKETXKRiAjrWNUsVxWWQWivtr | 2026-10-08 06:32:22 | READY | production | main | 41b7fdb | — | CONSERVER — rollback |
| dpl_9Fp5SioKRkauVtHfNzhHsoNXLmbn | 2026-10-07 21:52:51 | READY | production | main | 589b0b0 | — | CONSERVER — trois dernières productions |
| dpl_GAoQanmXv5ZuYRMN1n9PariSntg8 | 2026-10-07 21:35:06 | READY | production | main | 57e2852 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_6HtnPmuWgEmoEFqjG5p4N19E9dTC | 2026-10-07 21:25:36 | READY | production | main | d4b79c6 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_4vUMuo9N3JJ8M9epnf8J4HbnKRYB | 2026-10-07 21:06:19 | READY | production | main | 65444fd | — | À examiner uniquement — protections/pins non certifiés |
| dpl_EGabD1QxEgccvcd5GY8YAYQjpGg7 | 2026-10-07 21:02:29 | READY | production | main | 44b0105 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_CXrGYcoyi7t5kejHLdBqSNcaP6aD | 2026-10-07 20:59:39 | READY | production | main | 2e5f367 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_7iz9QwQ8dpPKqp9mdJnGuaK8fbv1 | 2026-10-07 20:55:28 | READY | production | main | 22f399c | — | À examiner uniquement — protections/pins non certifiés |
| dpl_2uPh2EES5TVLJYuiEYq6AR2N7jNE | 2026-10-07 20:49:57 | READY | production | main | 25bf02e | — | À examiner uniquement — protections/pins non certifiés |
| dpl_5iVvDjmr59S53zmEDAAmAZ4JSYfk | 2026-10-07 20:46:23 | READY | production | main | a4aac9b | — | À examiner uniquement — protections/pins non certifiés |
| dpl_BZJYNJ7QAMW16shi44frh3m1zZNr | 2026-10-07 20:42:24 | READY | production | main | c3988c8 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3PR2kNHN11yRq9vJmzKw7nx8FDqW | 2026-10-07 20:38:10 | READY | production | main | 35f35b0 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_6FhVQKh6qGv6iQ2gMuGMBEkAq7E6 | 2026-10-07 20:35:40 | READY | production | main | 4e71e9b | — | À examiner uniquement — protections/pins non certifiés |
| dpl_4vxWgazWJKoNJpR76cCmDo2CCxoF | 2026-10-07 20:34:00 | READY | production | main | 5ba93da | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3p5NvCwYPe3uu7GBC3PncAiQgPiP | 2026-10-07 20:29:47 | READY | production | main | 7c9bfa4 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_4o265WognDi4tQ9m5VmrNaetCQn3 | 2026-10-07 20:21:12 | READY | production | main | b5641d7 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_5fvRdZMFwwo5sjtDqzUp3d8egHhx | 2026-10-07 20:16:36 | READY | production | main | eeaaaba | — | À examiner uniquement — protections/pins non certifiés |
| dpl_8qNKSg9mE8zZoCnnXPL6KSQhG5ha | 2026-10-07 20:04:52 | READY | production | main | 03a64ad | — | À examiner uniquement — protections/pins non certifiés |
| dpl_CFPbx6F4XEatkJ7G2adbtNQfsjvk | 2026-10-07 19:59:26 | READY | production | main | 570dc31 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_8Fdg5sAR5sEkCvk7hyCWPPTwqkTy | 2026-10-07 19:57:19 | READY | production | main | 60b131b | — | À examiner uniquement — protections/pins non certifiés |
| dpl_6kGmtoC2rDEkhLRJkdpJCA59Rc4Y | 2026-10-07 19:53:47 | READY | production | main | 278f56b | — | À examiner uniquement — protections/pins non certifiés |
| dpl_CNWm6ngZd5YXWneQ995VrMGJu9pz | 2026-10-07 19:51:26 | READY | production | main | 8763578 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_2aoV6dRz1DLPC5tmTQHKU7jk7F4z | 2026-10-07 19:42:48 | READY | production | main | 0cec5e9 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_Ea9XxNVbJh3BsxC9EH2krgj4hkVe | 2026-10-07 19:34:51 | READY | production | main | 790bcf9 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_GRY93SfCxDzE2TNRhfMXDYYGvhfv | 2026-10-07 19:29:27 | READY | production | main | f3fe3f3 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3jg3degnTSbT5fj6ap9hqCQb51Qq | 2026-10-07 19:22:51 | READY | production | main | 4580269 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_7CVF9vU6MK4ZQUqLdjmBRCKEyNuy | 2026-10-07 19:02:41 | READY | production | main | 3db1a19 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3fpCWhKGs4dthPnvpCYg7htoZuoR | 2026-10-07 18:55:34 | READY | production | main | 0b6382b | — | À examiner uniquement — protections/pins non certifiés |
| dpl_2PepApJAYbrucjp3oZxgQNubfW15 | 2026-10-07 18:50:59 | READY | production | main | 5d70306 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_D91SdDTp757XAef9bDfNLUQCZztS | 2026-10-07 18:30:04 | READY | production | main | 74b50a7 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_B18EbuuP93BYHBNm5kmywZSu8XuG | 2026-10-07 15:55:09 | READY | production | main | b8ed792 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_8ewiSgR7YxrXLRg69NwzUyLgEkN1 | 2026-10-07 15:47:32 | ERROR | production | main | bfc7852 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_EaPfB82c3b7SfhMkAGw5YorGYQjy | 2026-10-07 13:41:45 | READY | production | main | adfa459 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_B8F9KQTp5Y8uHRQdjYqoecq7cL2V | 2026-10-07 13:29:37 | READY | production | main | 806cda5 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_BrjbQow25okXaRKxje9cKtTkAXGt | 2026-10-07 13:19:14 | ERROR | production | main | 806cda5 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_2CkrsC53CDWnqqjspJMSYWNAVBBs | 2026-10-07 12:23:26 | ERROR | production | main | 806cda5 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_AyXNQFWXtmAhYX8zL49ii7btQCxy | 2026-10-07 11:00:25 | ERROR | production | main | 68cbfe7 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_8zG8uHUeSgNfdCXGCxWU75UdWfBP | 2026-10-07 09:42:50 | ERROR | production | main | e82b8d6 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_BvjUuVGhQsMsbYYnWhEy6HEXQJ96 | 2026-10-07 09:42:20 | ERROR | preview | main-upload | e1ca69d | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3HBLmZtnDkAbFiR2eTGxTT2JCVjN | 2026-10-07 09:41:36 | ERROR | preview | main-upload | 6146936 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_32Jxj3YTrob28vZ7kjxDic6Pkq4a | 2026-10-07 09:39:51 | ERROR | preview | main-upload | 13a2f15 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_5JWnZgbfjQrSnJbBVjHnotNkGCpP | 2026-10-07 09:38:41 | ERROR | preview | main-upload | dd89248 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_Bbkzo7kCew2yh9ugCSpJSCzaWE5w | 2026-10-07 09:36:48 | ERROR | preview | main-upload | 76b7d61 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_AjpBwjDXjmcrkXuTL9S5uj4gripS | 2026-10-07 09:35:30 | ERROR | preview | main-upload | 1932d33 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_FAQGKP6utL7EP54CmYdBekm9jpqw | 2026-10-07 09:33:36 | ERROR | preview | main-upload | b4cefc1 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_948cWogUkuvo5UqkiBhpQGPamchU | 2026-10-07 09:32:07 | ERROR | preview | main-upload | 0e4f57d | — | À examiner uniquement — protections/pins non certifiés |
| dpl_DU5F4n7vhiLmsCU7ZPaPNWvrHtb4 | 2026-10-07 09:29:34 | ERROR | preview | main-upload | 38f3571 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_FVnEfAmGQgPEJjBnaB8irBd4tqw1 | 2026-10-07 09:28:47 | ERROR | preview | main-upload | 11f23cb | — | À examiner uniquement — protections/pins non certifiés |
| dpl_CHUuQuwiCp6Byn19P1ve4sDy8uhE | 2026-10-07 09:27:31 | ERROR | preview | main-upload | 11268c9 | — | À examiner uniquement — protections/pins non certifiés |
| dpl_3SiPGkr9rjTr8xdTcaxwvmKaxRck | 2026-10-07 09:26:21 | ERROR | preview | main-upload | 42e13c8 | rando-dazur-git-main-upload-rando-dazur.vercel.app | CONSERVER — alias de branche |
| dpl_QdHrmgmeRDW678soeq6MLgbgkArw | 2026-10-07 08:43:26 | READY | preview | master | 5a5ffae | rando-dazur-git-master-rando-dazur.vercel.app | CONSERVER — alias de branche |
| dpl_DY423KZetMiftsWhCeZtVtfMXmWC | 2026-10-05 20:06:03 | READY | production | master | 4395f5a | — | À examiner uniquement — protections/pins non certifiés |
