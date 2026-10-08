# Vérification approfondie des anciens déploiements — 8 octobre 2026

## Résultat

**Aucun déploiement supprimé. Aucun candidat certifié sûr proposé à la suppression.**
Les 51 commits distincts des 53 versions historiques ont été examinés dans leur arbre Git complet (local ou API publique GitHub, sans arbre tronqué). La nouvelle production `dpl_E6bc4cR8B5e8M7bipxhtYcNEizzz` est exclue également. Les trois dernières productions/rollbacks, tous les alias actifs et les déploiements protégés sont conservés.

Les **1 556 809 139 octets** concernent exactement le dossier public du commit `806cda558cc8730531abdf89249c60ab58b1c942`. Trois déploiements portent ce SHA :

- `dpl_B8F9KQTp5Y8uHRQdjYqoecq7cL2V` : READY, ancienne production.
- `dpl_BrjbQow25okXaRKxje9cKtTkAXGt` : ERROR, erreur ENOENT au build.
- `dpl_2CkrsC53CDWnqqjspJMSYWNAVBBs` : ERROR, erreur au build.

Les trois requêtes d'alias actuels retournent une liste vide. Le champ `alias` de l'historique du détail de déploiement contient cependant d'anciennes affectations : il ne faut pas le confondre avec les alias actuellement attachés.

**Correction de précision : ces trois versions ont les mêmes sources publiques volumineuses ; cela ne prouve pas que les deux ERROR aient stocké un build complet de cette taille.** L'ancien READY a un arbre de fichiers Vercel accessible, mais la réponse est tronquée en profondeur, sans tailles et mélange `src` et `out`. Elle ne permet pas de mesurer la part statique déployée ni son poids réellement comptabilisé. Télécharger les sources pour sommer leurs tailles ne produirait toujours pas une mesure du quota Vercel.

## Tailles réellement comptabilisées et candidats

Le connecteur n'expose aucun endpoint Usage & Resources/Deployment Storage ou statut de pin. L'accès à l'équipe et aux logs détaillés est refusé (403). Aucun CLI Vercel authentifié n'est disponible dans l'environnement. Les tailles réelles et les économies de suppression sont donc **indéterminées** ; ne pas annoncer 1,56 Go gagnés par version, ni multiplier par trois.

La protection d'accès Vercel Authentication est activée au niveau projet pour `all_except_custom_domains`. Les trois URL des versions `806cda55` ont aussi été testées sans authentification : chacune renvoie HTTP 302 vers `vercel.com`, confirmant la protection d’accès. Aucun contournement n’a été utilisé. Elle se distingue des exceptions et pins de rétention. En appliquant strictement la consigne d'exclure les déploiements protégés, les URL générées protégées ne sont pas candidates ; les pins individuels ne peuvent en outre pas être certifiés. L'absence d'alias et un ancien SHA ne suffisent pas à rendre une version supprimable sans risque.

**Liste exacte des candidats approuvables avec les preuves disponibles : vide.** Les versions ci-dessous sont uniquement des versions lourdes à inspecter dans le dashboard, pas une demande d'autorisation de suppression.

| ID | Date UTC | État | Commit | Public dans Git | Storage Vercel réel | Décision |
| --- | --- | --- | --- | --- | --- | --- |
| dpl_B8F9KQTp5Y8uHRQdjYqoecq7cL2V | 2026-10-07 13:29:37 | READY | 806cda5 | 1.557 Go | Indisponible | Non certifié — exclu |
| dpl_BrjbQow25okXaRKxje9cKtTkAXGt | 2026-10-07 13:19:14 | ERROR | 806cda5 | 1.557 Go | Indisponible | Non certifié — exclu |
| dpl_2CkrsC53CDWnqqjspJMSYWNAVBBs | 2026-10-07 12:23:26 | ERROR | 806cda5 | 1.557 Go | Indisponible | Non certifié — exclu |
| dpl_AyXNQFWXtmAhYX8zL49ii7btQCxy | 2026-10-07 11:00:25 | ERROR | 68cbfe7 | 2.807 Go | Indisponible | Non certifié — exclu |
| dpl_8zG8uHUeSgNfdCXGCxWU75UdWfBP | 2026-10-07 09:42:50 | ERROR | e82b8d6 | 2.177 Go | Indisponible | Non certifié — exclu |
| dpl_BvjUuVGhQsMsbYYnWhEy6HEXQJ96 | 2026-10-07 09:42:20 | ERROR | e1ca69d | 2.177 Go | Indisponible | Non certifié — exclu |
| dpl_3HBLmZtnDkAbFiR2eTGxTT2JCVjN | 2026-10-07 09:41:36 | ERROR | 6146936 | 1.987 Go | Indisponible | Non certifié — exclu |
| dpl_32Jxj3YTrob28vZ7kjxDic6Pkq4a | 2026-10-07 09:39:51 | ERROR | 13a2f15 | 1.779 Go | Indisponible | Non certifié — exclu |
| dpl_5JWnZgbfjQrSnJbBVjHnotNkGCpP | 2026-10-07 09:38:41 | ERROR | dd89248 | 1.572 Go | Indisponible | Non certifié — exclu |
| dpl_Bbkzo7kCew2yh9ugCSpJSCzaWE5w | 2026-10-07 09:36:48 | ERROR | 76b7d61 | 1.365 Go | Indisponible | Non certifié — exclu |
| dpl_AjpBwjDXjmcrkXuTL9S5uj4gripS | 2026-10-07 09:35:30 | ERROR | 1932d33 | 1.163 Go | Indisponible | Non certifié — exclu |

## Effet et délai selon Vercel

- [Changelog Hobby du 16 septembre 2026](https://vercel.com/changelog/hobby-projects-now-retain-fewer-deployments-to-free-up-storage) : chaque déploiement conservé utilise du stockage, le plafond Hobby est 10 Go. Retirer les ressources conservées peut donc récupérer de la capacité ; ce n'est pas une remise à zéro historique.
- [Deployment Storage](https://vercel.com/docs/deployment-storage) : facturation en Go-mois à partir des maxima quotidiens. Une suppression ne modifie pas les maxima déjà enregistrés.
- [Deployment Retention](https://vercel.com/docs/deployment-retention) : rétention Hobby par défaut de 30 jours ; une fois éligible, marquage généralement sous 48 heures ; période de récupération documentée de 30 jours avant suppression définitive des ressources. Une exception qui cesse de s'appliquer peut nécessiter jusqu'à 30 jours de réévaluation.
- [Suppression individuelle](https://vercel.com/kb/guide/how-do-i-delete-an-individual-deployment) : une version marquée supprimée peut rester restaurable pendant 30 jours. Cette documentation ne fixe pas un délai garanti de mise à jour du compteur Usage après une suppression manuelle.
- Le changelog annonce un traitement immédiat hors exceptions **si l'équipe dépasse 10 Go**. Les 9,19 Go rapportés sont sous ce seuil : ne pas promettre cette procédure accélérée dans ce cas.

Il n'est donc pas établi qu'une suppression manuelle ferait baisser instantanément le compteur affiché. Vérifier la mesure avec Vercel avant toute autorisation ; ne pas tester cette hypothèse en supprimant une version.

## Photos actuelles

Avant toute nouvelle modification Cycling : les 75 routes publiques du sitemap ont été lues en production ; les 53 URL d'images distinctes présentes dans le HTML retournent HTTP 200 avec un corps non vide. Tous leurs fichiers d'origine sont présents dans `public`, y compris le logo dont le nom contient un espace encodé. Aucun fichier nécessaire au site actuel n'a été supprimé. Rapport de vérification conservé dans le workspace `scratch/storage-audit/production-photos-follow-up.json`.

## Accès nécessaires pour terminer le chiffrage

1. Lecture authentifiée de Team > Usage & Resources > Deployment Storage, avec période, unité, ventilation par projet et mesure actuelle.
2. Détails Resources/Storage des anciennes versions, si exposés dans le dashboard, et leurs pins/exceptions de rétention. En l'absence de ventilation par déploiement, demander à Vercel une attribution et une estimation de libération avant intervention.
3. Confirmation du délai applicable à une suppression manuelle sur cette équipe Hobby sous le plafond.
4. Après identification d'une liste réellement sûre seulement : présenter les IDs et gains vérifiables à la propriétaire, obtenir son accord explicite, puis comparer Usage avant/après. **Aucune suppression n'est autorisée par le présent rapport.**
