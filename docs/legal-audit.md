> Audit historique du 7 octobre 2026. La mesure d’audience a depuis été ajoutée avec consentement préalable : voir [analytics-audit.md](analytics-audit.md) pour le fonctionnement actuel.

# Mise à jour juridique — 7 octobre 2026

## Informations utilisées

Identité, adresse à Cannes, SIRET, TVA, NAF, téléphone et e-mail issus des informations explicitement validées par Maddy. Les conditions de paiement et d’annulation reproduisent les règles fournies, dans les trois langues existantes du site. Aucun acompte, pourcentage d’acompte ou délai contractuel de remboursement ajouté.

Les anciennes références à Biot, à l’absence de numéro de TVA, aux réservations non remboursables, à un délai de confirmation de trois jours et aux références historiques d’assurance/carte professionnelle ont été retirées des documents actuels plutôt que présentées comme des informations validées.

L’hébergement Vercel est confirmé par le projet et les réponses du site en production. Le nom et l’adresse de Vercel Inc. proviennent de sa politique officielle consultée le 7 octobre 2026 : https://vercel.com/legal/privacy-policy (440 N Barranca Avenue #4133, Covina, CA 91723, United States).

Les durées de conservation sont exprimées selon les finalités et obligations légales, sans période commerciale arbitraire. La durée de dix ans concerne les pièces comptables relevant de l’article L. 123-22 du Code de commerce, et non les remboursements. La disposition relative au droit de rétractation est limitée aux activités de loisirs datées prévues par l’article L. 221-28, 12° du Code de la consommation.

## Audit technique des traceurs

Code : aucun outil de publicité ou d’analytics, cookie, stockage local/de session ou iframe. La carte utilise un SVG local. Les avis sont des contenus statiques. Le bloc Regiondo est un placeholder sans script. Le formulaire newsletter empêche la soumission et affiche un état d’attente ; il ne transmet pas l’adresse.

Navigation sur https://www.randodazur.com dans une session Chromium vierge, chargement complet puis défilement au footer : seul domaine de requête observé `www.randodazur.com`, aucun cookie, aucune entrée localStorage/sessionStorage, aucun iframe. Aucun gestionnaire de consentement ajouté en l’absence de traceurs soumis au consentement. Il faudra refaire cet audit et adapter les politiques avant d’activer un widget, une newsletter connectée ou des traceurs.

## Contrôles

Build et lint réussis. Script `scripts/verify-legal.mjs` : 12 routes juridiques en FR/EN/IT à 360, 430, 820 et 1440 px, soit 48 vérifications. Contrôle des identifiants, contacts cliquables, seuils d’annulation, absence des informations anciennes et du TODO dans le contenu rendu, liens du footer, absence de débordement, cohérence de l’identité professionnelle JSON-LD et absence de cookies/stockage/iframe dans l’application testée. Captures mobiles des documents français consultées.

## Seule information juridique encore à renseigner

TODO — Médiateur de la consommation à renseigner.

Ce TODO est conservé uniquement dans le code de `app/i18n/legal-content.ts`. Aucun nom, contact ou organisme fictif n’est publié. Après désignation du médiateur, ajouter ses coordonnées et les modalités de saisine aux CGV dans les trois langues.
