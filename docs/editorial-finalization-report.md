# Finalisation éditoriale — Rando d’Azur

Date : 8 octobre 2026. Dépôt : MaddyPolomeniRandodazur/rando-dazur, branche main.
Domaine réellement configuré : https://www.randodazur.com (sans « n » supplémentaire).

## A. Pages et fichiers

Pages enrichies : accueil EN/FR ; Meet Maddy EN/FR ; Press EN/FR ; Family Experiences EN/FR. Nouvelle page EN `/kids-schools-youth-groups` et FR `/fr/kids-schools-youth-groups`. Navigation/footer communs mis à jour. Pages destinations/expériences : descriptions alternatives localisées et données géographiques cohérentes. Pages Presse, Journal et juridiques : contraste du header corrigé sans changement de structure. Travel Trade : texte alternatif français.

Fichiers modifiés ou créés dans cette livraison :

- `app/(english)/kids-schools-youth-groups/page.tsx`
- `app/[locale]/kids-schools-youth-groups/page.tsx`
- `app/[locale]/layout.tsx`
- `app/[locale]/press/page.tsx`
- `app/components/DestinationPage.tsx`
- `app/components/ExperiencePage.tsx`
- `app/components/FeaturedIn.tsx`
- `app/components/Footer.tsx`
- `app/components/HomePage.tsx`
- `app/components/JournalPage.tsx`
- `app/components/LegalPage.tsx`
- `app/components/MaddyProfile.tsx`
- `app/components/MeetMaddyPage.tsx`
- `app/components/Navbar.tsx`
- `app/components/PartnerTrustSection.tsx`
- `app/components/PressPage.tsx`
- `app/components/PressSection.tsx`
- `app/components/RivieraMap.tsx`
- `app/components/SocialLinks.tsx`
- `app/components/TemporaryUpdateNotice.tsx`
- `app/components/TravelTradePage.tsx`
- `app/components/YouthGroupEnquiry.module.css`
- `app/components/YouthGroupEnquiry.tsx`
- `app/components/YouthGroupsPage.tsx`
- `app/components/YouthGroupsSection.tsx`
- `app/globals.css`
- `app/i18n/image-alt.ts`
- `app/i18n/messages.ts`
- `app/i18n/professional-content.ts`
- `app/i18n/youth-groups.ts`
- `app/lib/analytics-privacy.ts`
- `app/lib/metadata.ts`
- `app/lib/press-content.ts`
- `app/lib/structured-data.ts`
- `app/sitemap.ts`
- `docs/press-source-inventory.md`
- `public/images/partners/esterel-cote-d-azur.png`
- `public/images/press/Logos/marie-celine.webp`
- `public/images/press/Logos/rcf.webp`
- `scripts/verify-editorial.mjs`
- `scripts/verify-italian-removal.mjs`
- `scripts/verify-official-links.mjs`
- `scripts/verify-seo.mjs`

- `docs/editorial-finalization-report.md` (ce rapport).

## B. Langues et référencement

- Le retrait italien était déjà effectif dans la livraison précédente ; il est intégralement recontrôlé, sans supprimer la compétence linguistique personnelle de Maddy.
- Deux langues de site : anglais et français. Les sélecteurs conservent la page équivalente ; 26 anciennes URL italiennes ont des redirections 301 page par page. Une ancienne URL inconnue reste 404 plutôt qu’une redirection abusive vers l’accueil.
- « Côte d’Azur » dans les contenus français, « French Riviera » en anglais. Titres, descriptions, textes alternatifs, bannière temporaire et libellés accessibles harmonisés.
- Sitemap : 52 URL canoniques EN/FR (50 précédentes + deux pages jeunesse), sans italien. Canonical/hreflang conservés ; nouvelle page reliée depuis accueil, Groups, footer et Family Experiences.
- Person : Maddy connaît fr/en/it ; contact de l’entreprise : fr/en/it/es/sv/de selon guide et disponibilité. WebSite : en/fr uniquement.
- 20 ans d’expérience professionnelle visibles dans Meet Maddy et sur l’accueil. Les qualifications individuelles restent associées à Maddy.

## C. Logos partenaires

- Les 12 organisations préexistantes sont conservées ; aucune mention presse transformée en partenariat.
- Estérel : fichier blanc 75×40 remplacé au même emplacement par le logo officiel rouge transparent 300×195, géométrie et couleurs intactes. Source officielle documentée dans l’inventaire presse.
- Filtres gris et opacité réduite supprimés des logos partenaires/médias pour restituer les couleurs disponibles.
- Franceinfo : support foncé discret pour rendre le logo blanc et jaune lisible. RCF : fichier vérifié sur l’article du média puis recompressé. Marie-Céline : logo officiel optimisé WebP.
- Crux Agency : nom conservé, suppression du libellé inachevé ; aucun faux logo. Andy Swann : traitement de contraste existant conservé en l’absence d’alternative couleur officielle établie.
- Les fichiers ne prouvent pas à eux seuls toutes les collaborations : confirmation propriétaire encore souhaitée pour les relations qui auraient changé.

## D. Presse et recherche

La page Presse comporte 13 références, avec liens, nature de la couverture, résumés originaux courts, auteurs/dates lorsqu’établis. L’accueil met en avant France 3, BBC Travel et RCF et renvoie vers la page complète. Configuration centralisée : `app/lib/press-content.ts`.

Liste détaillée avec URL originales, preuve et limites : [inventaire des sources](press-source-inventory.md).

Références : France 3 (deux reportages), BBC Travel, RCF, actu.fr, Le Figaro, Le Routard, Kidiklik, Dynamic Seniors, Riviera Magazine, Marie-Céline, Hortus Focus, Estérel Mag.

BBC : titre « France’s 130km Mimosa Route », Chrissie McClatchie. La reproduction attribuée TPG nomme explicitement Maddy. L’URL originale a été corroborée indépendamment ; le site BBC bloque l’accès automatisé, son contenu actuel n’est donc pas prétendu testé. Les deux liens sont distingués et mai 2022 correspond au numéro reproduisant l’article, pas à une date originale inventée.

New York Times : aucune mention personnelle confirmée malgré les recherches ; aucun logo ni revendication ajouté. Les autres pistes historiques (France 2, Ushuaïa TV, Radio Monaco, Nice-Matin, La Croix, Riviera Zeit…) restent séparées des références publiées. Les PDF locaux Figaro Magazine/France Agricole contiennent Maddy mais nécessitent URL/issue/droits avant enrichissement public.

Pas de nouveau lecteur vidéo, de copie intégrale d’article, de couverture ou de photographie de presse réhébergée. Les médias sans logo officiel disponible sont affichés avec leur nom typographique, sans imitation de marque. Le magazine Estérel de 40 Mo utilisé pour l’audit reste hors dépôt.

## E. Enfants, écoles et groupes

Offre dédiée : écoles, centres de loisirs, anniversaires, familles et structures jeunesse. Activités adaptées au groupe : nature, découverte ludique, biodiversité, exploration, escape games lorsque appropriés. Aucun âge minimum, capacité, agrément, BAFA, transport ni tarif enfant inventé.

Tarifs scolaires/jeunesse sur devis, avec possibilité de tarifs préférentiels. Les tarifs privés existants restent 250 € demi-journée et 350 € journée PAR GUIDE, déplacement exclu.

Formulaire bilingue : type de groupe, tranche d’âge, participants, date, objectif pédagogique. Prépare une demande dans WhatsApp, à relire et envoyer par le visiteur ; pas de création de réservation automatique. Alternative email/téléphone, et action mailto sans JavaScript. Aucun nom d’enfant demandé, stockage ou journalisation ajouté.

## F. Vérifications et poids

- ESLint, TypeScript et build Next.js : réussis ; 61 pages statiques/prérendues.
- Audit SEO : 52 routes, 68 liens internes, 58 images, zéro échec ; canonical, hreflang, robots et JSON-LD contrôlés.
- Responsive éditorial : 60 vues sur 320, 375, 390, 768 et 1440 px ; aucun débordement, chevauchement ou texte coupé. Contrôle visuel Presse et jeunesse ; menus Groups et langues testés desktop/tablette/mobile.
- Audit de toutes les pages françaises : absence de « French Riviera » dans le texte éditorial visible.
- 26 redirections 301 italiennes, absence de liens/hreflang/prérendus italiens.
- Réseaux sociaux et Regiondo : 52 routes contrôlées, menu mobile et réservation de secours opérationnels, aucune requête externe avant clic.
- Newsletter : 20 contrôles responsive, 4 POST natifs interceptés avec/sans JavaScript, validation et consentement non précoché corrects. Aucune inscription réelle ni réception d’email prétendue vérifiée.
- Demandes jeunesse : deux handoffs WhatsApp interceptés EN/FR, validation obligatoire testée ; aucun message réel envoyé.
- Tarifs/qualifications : 40 contrôles réussis. Photos existantes et parcours Instagram/Facebook/Regiondo/WhatsApp/Brevo conservés.
- Poids public avant : 129 166 529 octets ; après : 129 196 031 octets ; ajout net **29 502 octets** (~29 Ko), uniquement des petits logos. Aucune nouvelle grande photo, dépendance lourde ni promesse de récupération du quota Deployment Storage.

## G. Points restant à valider/enrichir

1. Confirmer que les 12 relations partenaires affichées restent toutes actuelles, notamment Crux Agency ; fournir son logo officiel si souhaité.
2. Fournir les URL officielles des anciens reportages TV/radio et les droits des couvertures/miniatures souhaitées. Aucun média non confirmé n’est revendiqué.
3. Vérification humaine des sources BBC/France 3/actu bloquant l’automatisation, et des liens de replay.
4. Test réel volontaire du double opt-in Brevo (email, confirmation puis liste #30), hors tests interceptés de cette livraison.
5. Le médiateur de la consommation reste l’information juridique manquante préexistante ; aucune identité inventée.

Le déploiement est effectué par un seul push main après validation locale, via l’intégration GitHub/Vercel existante. Aucun ancien déploiement supprimé et aucun réglage de facturation modifié.
