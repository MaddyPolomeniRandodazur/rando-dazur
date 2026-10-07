# Migration SEO — maddypolomeni.com vers randodazur.com

Audit public du 7 octobre 2026. **Le domaine cible réel est https://www.randodazur.com**, sans « n » supplémentaire. `randondazur.com` dans la demande est traité comme une coquille, pas comme un domaine de migration.

## Statut réel

- Les pages et les données professionnelles du nouveau site ont été mises à jour dans ce dépôt.
- **Aucune redirection de maddypolomeni.com n’a été installée**, aucun DNS modifié et aucune action Search Console effectuée.
- Le mapping ci-dessous et deux configurations alternatives sont préparés, à installer sur l’hébergement de l’ancien domaine après sauvegarde et validation. Le fichier Apache fourni n’est pas déployé par Vercel.
- Le site source reste disponible. Pas de redirection globale vers la homepage, pas de suppression de l’ancien site.

## Sources et limites de l’inventaire

Inspection de `https://maddypolomeni.com/wp-sitemap.xml`, de ses six sous-sitemaps, de `robots.txt`, et des liens internes présents dans les pages : **29 URLs HTML distinctes**, toutes HTTP 200 sans directive `noindex` détectée. Elles sont potentiellement indexables ; cela ne prouve pas leur présence dans l’index Google. Les archives WordPress n’exposent pas de canonical.

Les canonicals de l’ancien site utilisent généralement le domaine sans `www`. La configuration prend également en charge `www`, avec ou sans slash final. Les URLs à paramètres historiques, anciennes URLs supprimées, variantes inconnues et backlinks non exposés par le site nécessitent un export Search Console / analytics / journaux du serveur. L’inventaire est complet pour les sources publiques inspectées, pas pour l’historique inconnu du domaine.

## Infrastructure source : où installer les redirections

Le site source est **WordPress**, thème Vandana Health Coach / Vandana Lite, réponse `X-Powered-By: PHP/8.2`. Les domaines racine et www résolvent vers `217.160.0.104`. Les NS observés sont `ns1054.ui-dns.com`, `ns1118.ui-dns.biz`, `ns1042.ui-dns.de`, `ns1062.ui-dns.org` ; le réseau de l’adresse est identifié `ionos-inf`. Ces indices désignent un hébergement IONOS ; le contrat, l’accès administrateur et le support Apache exact ne sont pas accessibles depuis ce repository.

Deux choix, **ne pas activer les deux simultanément** :

1. Sur le webspace IONOS servant maddypolomeni.com, si Apache/mod_rewrite et `.htaccess` sont disponibles : sauvegarder le fichier `.htaccess` existant, puis insérer le contenu de [migration/maddypolomeni-apache-redirects.conf](migration/maddypolomeni-apache-redirects.conf) **avant `# BEGIN WordPress`**. Ne pas remplacer les règles WordPress existantes. Les règles sont restreintes aux deux anciens hostnames.
2. Dans l’administration WordPress de l’ancien site, avec le plugin **Redirection** si disponible/choisi : importer [migration/maddypolomeni-redirection.csv](migration/maddypolomeni-redirection.csv), vérifier chaque règle, sa regex et son code 301 avant activation. Ce dépôt ne peut ni installer le plugin ni ouvrir l’administration de l’ancien site. L’import contient uniquement les 21 équivalences retenues.

Conserver le certificat HTTPS valide sur l’ancien domaine et sur www. Ne pas changer aveuglément les DNS pour pointer le domaine vers ce Vercel : les règles de ce dépôt ne pilotent pas l’ancien WordPress. **Préserver les services email et les enregistrements MX/TXT (SPF/DKIM/DMARC)** : l’adresse professionnelle reste bonjour@maddypolomeni.com.

## Mapping page par page

Les 301 sont **proposées et préparées**, pas installées. « — » signifie conserver l’ancienne URL sans redirection jusqu’à décision spécifique ; aucun 410 n’est installé. Les liens vers les ancres booking/contact sont fonctionnels et ciblent la bonne fonction plutôt qu’une homepage sans indication.

| OLD URL | NEW URL | REDIRECT TYPE | RATIONALE |
| --- | --- | --- | --- |
| https://maddypolomeni.com/hello-world | — Aucun équivalent validé | — Maintien provisoire | Article WordPress de démonstration ; pas d’équivalent éditorial. |
| https://maddypolomeni.com/ | https://www.randodazur.com/fr | 301 proposée | Accueil français de la même activité et de la même exploitante. |
| https://maddypolomeni.com/qui-suis-je | https://www.randodazur.com/fr/meet-maddy | 301 proposée | Biographie et qualifications de Maddy, page dédiée en français. |
| https://maddypolomeni.com/randonnees | https://www.randodazur.com/fr/experiences/hiking-experiences | 301 proposée | Randonnées privées et accompagnement professionnel ; anciens calendriers et prix non repris. |
| https://maddypolomeni.com/velo | https://www.randodazur.com/fr/experiences/cycling-experiences | 301 proposée | Univers vélo ; positionnement désormais privé. Les anciennes séances d’apprentissage et leurs tarifs ne sont pas reconduits. |
| https://maddypolomeni.com/autres | — Aucun équivalent validé | — Maintien provisoire | Page vide sans prestation décrite : aucun équivalent établi. |
| https://maddypolomeni.com/reserver-une-activite | https://www.randodazur.com/fr#booking | 301 proposée | Nouvelle demande d’expérience ; ce n’est pas la reprise de l’ancien calendrier collectif. |
| https://maddypolomeni.com/presse | https://www.randodazur.com/fr/press | 301 proposée | Page presse existante, même langue. |
| https://maddypolomeni.com/contact | https://www.randodazur.com/fr#contact | 301 proposée | Coordonnées et moyens de contact officiels, section dédiée du footer. |
| https://maddypolomeni.com/randonnee-des-plantes-sauvages-comestibles | https://www.randodazur.com/fr/experiences/edible-plants | 301 proposée | Découverte des plantes comestibles, page existante. |
| https://maddypolomeni.com/mesures-sanitaires | — Aucun équivalent validé | — Maintien provisoire | Mesures sanitaires anciennes ; aucun équivalent actuel. Décider ultérieurement du maintien ou du retrait. |
| https://maddypolomeni.com/mentions-legales | https://www.randodazur.com/fr/legal-notice | 301 proposée | Mentions légales actualisées. |
| https://maddypolomeni.com/conditions-generales-de-vente | https://www.randodazur.com/fr/terms-and-conditions | 301 proposée | CGV actuelles ; les tarifs et conditions obsolètes ne sont pas importés. |
| https://maddypolomeni.com/enfants | https://www.randodazur.com/fr/experiences/family-experiences | 301 proposée | Activités adaptées aux familles ; pas de reprise des anciennes offres ni tarifs enfants. |
| https://maddypolomeni.com/marche-nordique | — Aucun équivalent validé | — Maintien provisoire | La marche nordique n’est pas présentée comme une prestation spécifique sur le nouveau site. Pas de redirection automatique vers une randonnée générique. |
| https://maddypolomeni.com/le-label-famille-plus | — Aucun équivalent validé | — Maintien provisoire | Contenu relatif à un label historique ; aucun statut actuel confirmé. Ne pas transférer de certification non validée. |
| https://maddypolomeni.com/entreprises | https://www.randodazur.com/fr/experiences/corporate-incentive-travel | 301 proposée | Sorties de groupes professionnels, entreprises et incentives. |
| https://maddypolomeni.com/rando-apero | https://www.randodazur.com/fr/experiences/sunset-apero-hikes | 301 proposée | Randonnée et apéritif, expérience équivalente. |
| https://maddypolomeni.com/bienvenue-francais | https://www.randodazur.com/fr | 301 proposée | Ancienne entrée française vers le nouvel accueil français. |
| https://maddypolomeni.com/en/bienvenue-english | https://www.randodazur.com/ | 301 proposée | Accueil anglais vers le nouvel accueil anglais. |
| https://maddypolomeni.com/en/who-i-am | https://www.randodazur.com/meet-maddy | 301 proposée | Biographie et qualifications de Maddy en anglais. |
| https://maddypolomeni.com/en/hiking | https://www.randodazur.com/experiences/hiking-experiences | 301 proposée | Expériences de randonnée, même langue. |
| https://maddypolomeni.com/en/book-an-activity | https://www.randodazur.com/#booking | 301 proposée | Nouvelle demande d’expérience en anglais. |
| https://maddypolomeni.com/en/general-terms-and-conditions-of-sale | https://www.randodazur.com/terms-and-conditions | 301 proposée | CGV actuelles en anglais. |
| https://maddypolomeni.com/en/legal-information | https://www.randodazur.com/legal-notice | 301 proposée | Mentions légales en anglais. |
| https://maddypolomeni.com/en/contact-2 | https://www.randodazur.com/#contact | 301 proposée | Même fonction contact, en anglais. |
| https://maddypolomeni.com/category/uncategorized | — Aucun équivalent validé | — Maintien provisoire | Archive WordPress sans équivalent utile. |
| https://maddypolomeni.com/author/lesaventuresdemaddy-2021 | — Aucun équivalent validé | — Maintien provisoire | Archive auteur technique, pas une biographie équivalente à Meet Maddy. |
| https://maddypolomeni.com/en/author/lesaventuresdemaddy-2021 | — Aucun équivalent validé | — Maintien provisoire | Archive auteur technique anglaise, aucun équivalent éditorial. |

## Documents téléchargeables de l’ancien site

Huit PDF liés ont également été identifiés. Conserver leurs URLs et leur hébergement à ce stade : pas d’équivalent PDF actuel, pas de redirection arbitraire vers une page HTML. Leurs offres, calendriers et prix anciens ne sont pas copiés sur le nouveau site. Ils doivent être examinés séparément avant toute suppression ; vérifier également leurs backlinks et leur indexation dans Search Console.

- https://maddypolomeni.com/wp-content/uploads/2021/05/LeverdeSoleil_Fiches-Activite-Groupe-prive-Maddy-Polomeni.pdf
- https://maddypolomeni.com/wp-content/uploads/2021/05/Rando-Apero-Fiches-Activite-Groupe-prive-Maddy-Polomeni-.pdf
- https://maddypolomeni.com/wp-content/uploads/2021/05/Rando-Esterel_Fiches-Activite-Groupe-prive-Maddy-Polomeni.pdf
- https://maddypolomeni.com/wp-content/uploads/2021/05/Rando-Fraicheur-Fiches-activites-Groupe-prive-Maddy-Polomeni.pdf
- https://maddypolomeni.com/wp-content/uploads/2021/05/Rando-Mimosa-Fiches-Activite-Groupe-prive-Maddy-Polomeni-1.pdf
- https://maddypolomeni.com/wp-content/uploads/2025/07/Fiche-dactivite-Baby-rider-2025.pdf
- https://maddypolomeni.com/wp-content/uploads/2025/07/Fiche-dactivite-VTT-Enfant-2025.pdf
- https://maddypolomeni.com/wp-content/uploads/2025/07/Fiches-Activite-Escape-Game-2025.pdf

## Données professionnelles réutilisées et traçabilité

Les six intitulés de qualifications sont repris **exactement** depuis `https://maddypolomeni.com/qui-suis-je`, conservés en français dans toutes les langues :

- BPJEPS Activités Physiques pour Tous, option littoral (kayak, SUP, voile)
- BPJEPS Activités de la randonnée pédestre et cycliste
- Brevets Fédéraux VTT, niveau entraîneuse FFC
- Brevet Fédéral Escalade, niveau initiatrice
- BNSSA, nageur-sauveteur-secouriste
- PSE1, secouriste en équipe

Carte professionnelle : **00619ED0293**, validité actuelle confirmée par Maddy dans la demande. Lien officiel vérifié accessible : https://recherche-educateur.sports.gouv.fr/accueil. Aucun résultat nominatif ni date d’expiration n’est inventé.

RC professionnelle : **Markel Insurance SE**, contrat **33204.000/S17566926**, source `https://maddypolomeni.com/conditions-generales-de-vente`, validité actuelle confirmée par Maddy. Ces qualifications sont associées à Maddy uniquement ; aucun diplôme individuel des autres membres de l’équipe n’est inventé.

Seuls tarifs généraux actuels : **250 € demi-journée / guide** et **350 € journée / guide**, hors déplacement, options précisées par devis. Aucun prix ancien, durée horaire, nombre de participants, taux de TVA tarifaire ou supplément chiffré non fourni n’est ajouté. Les offres JSON-LD expriment le tarif de référence par guide ; les prestations complexes sont sur devis, sans offre fixe structurée.

## Mise en service et tests

Avant activation : sauvegarder WordPress et ses règles ; tester les destinations sur le nouveau site ; installer les règles uniquement sur l’ancien hébergement, idéalement après essai en staging. Après activation, utiliser `curl -I` sur chaque ancienne URL en HTTP/HTTPS, racine/www et avec/sans slash ; vérifier un 301 permanent vers la cible prévue et un 200 final. Éviter toute boucle, chaîne supplémentaire et redirection des assets PDF ou de l’administration. Les paramètres sont supprimés dans la configuration Apache pour éviter de transférer les paramètres WordPress `p`/`page_id` sur le nouveau site ; les variantes historiques doivent être inventoriées avant toute règle supplémentaire.

Les huit URLs sans équivalent ne doivent pas être redirigées globalement : elles restent disponibles jusqu’à décision documentée. Ne lancer Change of Address qu’une fois la migration du domaine et le traitement des contenus restants prêts, selon l’éligibilité indiquée par Search Console.

## Checklist Google Search Console — actions restantes

- [ ] Vérifier randodazur.com (domaine réel) dans Google Search Console.
- [ ] Vérifier maddypolomeni.com dans Google Search Console.
- [ ] Exporter les URLs indexées, les backlinks, les erreurs et compléter l’inventaire historique.
- [ ] Installer puis tester les redirections 301 sur l’ancien hébergement (racine/www, HTTPS, slash, statut final).
- [ ] Soumettre https://www.randodazur.com/sitemap.xml.
- [ ] Vérifier robots.txt sur les deux sites ; ne pas bloquer le crawl des anciennes URLs redirigées.
- [ ] Vérifier les canonical URLs : le nouveau site doit s’auto-canonicaliser.
- [ ] Vérifier l’absence de noindex accidentel ; la bannière temporaire ne doit pas bloquer l’indexation.
- [ ] Utiliser Google Search Console « Change of Address » lorsque la migration est prête et éligible.
- [ ] Surveiller les erreurs 404 et corriger les backlinks/URLs historiques supplémentaires.
- [ ] Surveiller l’indexation et l’évolution des requêtes des deux propriétés.
- [ ] Conserver les redirections pendant au moins un an, idéalement durablement.

Aucune de ces cases Search Console ou installation sur l’ancien hébergement n’est cochée : ces actions n’ont pas été exécutées depuis ce dépôt.

## Vérifications réalisées sur le nouveau site

- Build de production et lint réussis.
- 75 URLs canoniques du sitemap contrôlées : statut, H1, metadata uniques, canonical, hreflang, Open Graph / Twitter, JSON-LD et indexabilité.
- 101 liens internes et 53 ressources d’images contrôlés par l’audit SEO.
- 48 contrôles responsive des pages de qualifications/tarifs (360, 430, 820, 1440 px), dont absence de débordement et de chevauchement du contenu des nouveaux blocs.
- 48 contrôles responsive des pages juridiques existantes : coordonnées, footer et identité structurée préservés.
- Les 20 destinations distinctes des 21 redirections proposées répondent HTTP 200 sur le build local ; les ancres correspondent aux sections existantes.
- Pas de fichier photo supprimé ou modifié, pas de nouvelle règle de redirection sur l’ancien domaine activée.

Ces tests locaux ne constituent pas un test des 301 sur l’ancien serveur : celui-ci reste à réaliser après leur installation.
