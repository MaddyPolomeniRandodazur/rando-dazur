# Vercel Web Analytics — 8 octobre 2026

## État initial et accès

Next.js 16 App Router, deux root layouts alternatifs (anglais et FR/IT). Aucun SDK, Analytics component, script ou traceur d’audience existant dans le dépôt. Le HTML public ne contient aucun script Analytics ; `https://www.randodazur.com/_vercel/insights/script.js` répond 404 avant modification.

Le connecteur Vercel liste le projet `rando-dazur` (prj_GQ58pyUUlU7CbHXOhQf9Wro44xtH), mais sa lecture détaillée sous l’équipe team_GqxCAPnEbSbE82iPPMtN4Wfj est refusée HTTP 403. Aucun CLI authentifié disponible pour le repli. Ni activation Analytics, ni forfait, ni rétention, ni contrat/DPA validé dans le tableau de bord depuis cette session. Aucun achat ou changement de forfait effectué.

## Intégration et données

SDK officiel `@vercel/analytics` 2.0.1, composant `Analytics` de `@vercel/analytics/next`, monté une seule fois par document via SiteAnalytics dans le root layout actif. Les deux layouts sont alternatifs : aucun double montage. Aucun outil concurrent ajouté.

Off par défaut, aucun chargement du SDK ni collecte avant un accord explicite. Un bouton discret dans le footer ouvre un dialogue natif accessible, avec autorisation/refus de même présentation, fermeture sans accord et possibilité de retrait. Aucun popup automatique ni modification de la mise en page existante. Le stockage propriétaire `rando-analytics-consent-v1` ne contient que allowed et expires. Validité 180 jours ; suppression à la prochaine consultation après expiration, choix en mémoire si stockage indisponible. Le retrait bloque immédiatement beforeSend et recharge la page pour décharger le SDK.

Événements fixes, sans propriétés :

- `whatsapp_click` : lien WhatsApp.
- `phone_click` : lien tel.
- `email_click` : lien mailto de contact.
- `booking_request_click` : accès au bloc booking ou composition d’une demande via son lien email. Une demande est une intention de contact, pas une réservation payée/confirmée.

Un clic émet au maximum une catégorie ; les liens de demande explicitement marqués passent avant la classification email. Délégation capture unique, sans modification des liens ou de leur navigation. Aucun numéro, adresse email, href, texte, contenu de message, valeur de formulaire ou identifiant client transmis comme donnée d’événement. Aucune utilisation de identify/group/enableCookie.

beforeSend vérifie le consentement à chaque événement, n’autorise que les routes publiques connues et remplace l’URL par son chemin canonique sans paramètres ni fragments. La version actuelle du script inclut document.referrer indépendamment de beforeSend.url : les événements sont donc supprimés si le référent a des paramètres, un fragment, un chemin interne inconnu ou un chemin externe autre que /. Conséquence : certaines visites référées et conversions ne seront pas comptées ; priorité à l’absence de données identifiantes. Une ancienne attribution SDK ou des propriétés personnalisées inattendues entraîne également un rejet.

## RGPD / article 82

Ne pas confondre absence de cookies et exemption automatique. Vercel décrit un hash de visite issu de la requête, supprimé après 24 h, et des informations techniques (appareil/navigateur, localisation approximative). Les données de requête/empreinte peuvent relever de données personnelles ou pseudonymes même si les statistiques accessibles sont agrégées. L’intégration ne prétend pas à une certification CNIL ni à une exemption d’audience : elle demande le consentement préalable pour la mesure d’audience et de conversion. Le stockage du choix sert exclusivement à respecter cette préférence.

Les politiques confidentialité et cookies FR/EN/IT décrivent le SDK, les finalités, les clics anonymes côté payload, les données techniques traitées par Vercel, la base consentement, le refus/retrait, le stockage, le prestataire et les transferts éventuels hors EEE. La durée de vie du hash (24 h) n’est pas présentée comme la durée de conservation des statistiques : celle-ci dépend du forfait/paramétrage Vercel non accessible ici. Le propriétaire doit confirmer la rétention et les garanties contractuelles/DPA avant activation et préciser la durée exacte dans la politique si nécessaire.

Sources consultées :
- https://vercel.com/docs/analytics/quickstart
- https://vercel.com/docs/analytics/privacy-policy
- https://vercel.com/docs/analytics/custom-events (événements personnalisés : Pro/Enterprise selon la documentation consultée)
- https://vercel.com/legal/dpa
- https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience

## Actions manuelles Vercel

1. Ouvrir le projet rando-dazur dans la bonne équipe, onglet **Analytics**, activer **Web Analytics** si ce n’est pas déjà actif. Ne pas ajouter de deuxième SDK.
2. Confirmer que le déploiement main contenant cette intégration est Ready, et que www.randodazur.com lui est associé. Après activation, redéployer si Vercel le demande pour les routes/configurations d’intake.
3. Vérifier l’accès aux événements personnalisés du forfait actuel (documentation : Pro/Enterprise). Ne pas souscrire/acheter automatiquement ; sans cette fonctionnalité, les pages vues peuvent fonctionner mais les conversions ne seront pas disponibles dans le tableau de bord.
4. Vérifier le DPA Vercel, les garanties de transfert, les accès autorisés et la rétention du forfait/projet. Choisir la durée minimale utile permise et mettre à jour la durée précise dans les politiques si elle est confirmée. L’intégration reste soumise au choix des visiteurs.
5. Dans une fenêtre normale sans bloqueur, autoriser Analytics via le footer, visiter une page et tester les quatre types de liens. Vérifier les requêtes SDK/intake en succès et l’arrivée des événements dans Analytics après son délai de traitement. Puis retirer le consentement et vérifier l’arrêt.

## Vérifications

`scripts/verify-analytics.mjs` utilise le vrai script public Vercel téléchargé pour le test, avec intake intercepté localement : aucune donnée de test envoyée à Vercel. Contrôles à 360/430/820/1440 px : aucun SDK/stockage avant choix, fermeture/refus inactifs, un seul script après accord, pageview expurgée, quatre événements sans propriétés identifiantes, filtrage du référent sensible, retrait, consentement expiré, absence de cookies et dialogue responsive. Les tests d’intake local ne prouvent pas l’activation du service dans Vercel ; le contrôle public réel est consigné séparément après push.

Build et lint réussis. Tests du SDK réel/intercepté réussis aux quatre largeurs, y compris arrêt après effacement du choix et consentement expiré. 48 contrôles responsive des 12 pages juridiques FR/EN/IT réussis. Les photos, CTA et animations existants sont conservés ; seul le contrôle de préférence est ajouté au footer.
