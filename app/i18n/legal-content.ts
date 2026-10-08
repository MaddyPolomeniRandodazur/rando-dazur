import type { LegalPageSlug, Locale } from "./config";
import { businessDetails } from "../lib/business-details";
import { contactChannels } from "../lib/contact-channels";

// TODO — Médiateur de la consommation à renseigner.
// No provisional mediator name or contact details are rendered to visitors.

type LegalSection = { title: string; paragraphs: string[] };
export type LegalDocument = { title: string; introduction: string; sections: LegalSection[] };

const documents: Record<Locale, Record<LegalPageSlug, LegalDocument>> = {
  "en": {
    "legal-notice": {
      "title": "Legal Notice",
      "introduction": "Publisher identification and legal information for the Rando d’Azur website.",
      "sections": [
        {
          "title": "Publication and hosting",
          "paragraphs": [
            "Publication director: Maddy Polomeni.",
            "Hosting provider: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States. Provider website: https://vercel.com. Data protection information and contact: https://vercel.com/legal/privacy-policy."
          ]
        },
        {
          "title": "Website content",
          "paragraphs": [
            "Texts, photographs, logos and other website content are protected by applicable intellectual property rules. Use must respect the rights of their owners and statutory exceptions.",
            "Links to third-party websites lead to independent services governed by their own terms."
          ]
        }
      ]
    },
    "terms-and-conditions": {
      "title": "Terms & Conditions of Sale",
      "introduction": "Conditions for booking Rando d’Azur experiences, without prejudice to consumers’ statutory rights.",
      "sections": [
        {
          "title": "Bookings and prices",
          "paragraphs": [
            "The activity, date or period, total price including tax and service arrangements are specified when booking or in the corresponding quotation. Rando d’Azur confirms the booking.",
            "Any change agreed with the customer must be reflected in the applicable booking information or quotation."
          ]
        },
        {
          "title": "Payment",
          "paragraphs": [
            "Payment is due in full according to the arrangements specified when booking or in the corresponding quotation."
          ]
        },
        {
          "title": "Cancellation by the customer",
          "paragraphs": [
            "More than 7 days before departure: a full refund.",
            "From 7 days up to and including 48 hours before departure: 25% of the total price including tax is retained.",
            "Less than 48 hours before departure: 100% of the total price is retained.",
            "No-show / absence at departure: 100% of the total price is retained.",
            "To notify a cancellation or ask about a booking, contact Maddy at bonjour@maddypolomeni.com or +33 6 67 90 69 32. These conditions do not override mandatory consumer rights."
          ]
        },
        {
          "title": "Weather, safety and cancellation by Rando d’Azur",
          "paragraphs": [
            "When weather, safety conditions or any external circumstance make the activity impossible or dangerous, Rando d’Azur may adapt the itinerary, change the activity, reschedule or cancel it. A substantial change requires the customer’s agreement where required by law.",
            "Where possible, Rando d’Azur will prioritise rescheduling to another date or proposing an appropriate alternative activity or solution.",
            "If no acceptable rescheduling or alternative can be offered, the service cancelled by Rando d’Azur will be refunded. Payments for that service are returned in accordance with applicable legal rules.",
            "This provision does not restrict statutory consumer rights, including remedies for failure to provide the service or other remedies required by law."
          ]
        },
        {
          "title": "Right of withdrawal",
          "paragraphs": [
            "Under Article L. 221-28, paragraph 12 of the French Consumer Code, the right of withdrawal does not apply to leisure services provided on a specified date or during a specified period. This exception does not remove the cancellation conditions above.",
            "For contracts outside this exception, statutory withdrawal rules remain applicable."
          ]
        },
        {
          "title": "Complaints and consumer rights",
          "paragraphs": [
            "Complaints can be sent to bonjour@maddypolomeni.com or to the business address given in these terms.",
            "Consumers have the right to use consumer mediation free of charge under the conditions set out by law. These terms do not remove other statutory remedies."
          ]
        }
      ]
    },
    "privacy-policy": {
      "title": "Privacy Policy / GDPR",
      "introduction": "How Rando d’Azur handles information needed for enquiries, bookings and the operation of this website.",
      "sections": [
        {
          "title": "Information and purposes",
          "paragraphs": [
            "When you contact Maddy by email, telephone or WhatsApp, the contact details and information you provide are used to answer your enquiry, prepare a quotation and, where applicable, arrange and follow up your booking. Only share information relevant to your request.",
            "Website hosting involves technical information needed to deliver and secure pages, including the IP address and technical request information.",
            "The newsletter form sends your email address and express consent to Brevo via its official secure form. A confirmation email is requested; you join the newsletter only after clicking the confirmation link within 7 days. Submitting the form alone does not complete your subscription. Online booking links open the external Regiondo shop (https://randodazur.regiondo.fr/categories). No booking or payment widget loads on this website. Instagram and Facebook links also open external sites; their own privacy and cookie choices apply after you open them."
          ]
        },
        {
          "title": "Newsletter and consent",
          "paragraphs": [
            "Rando d’Azur uses Brevo as its newsletter processor to manage email addresses, consent and confirmation records and send the newsletter. This processing is based on your explicit consent (Article 6(1)(a) GDPR). The checkbox is not preselected. You can withdraw consent at any time through the unsubscribe link in newsletter emails or by writing to bonjour@maddypolomeni.com.",
            "Newsletter data is used while your subscription is active. Consent and suppression records may be retained where necessary to respect withdrawal or demonstrate consent; the 7-day confirmation window does not by itself mean unconfirmed records are deleted. Unconfirmed requests are not treated as active newsletter subscriptions. Brevo’s data protection information is available at https://www.brevo.com/legal/privacypolicy/.",
            "This website submits directly to Brevo and then displays the provider’s response page. No embedded Brevo widget, tracking pixel or marketing script loads on this website. Brevo’s external form applies its own privacy and cookie information."
          ]
        },
        {
          "title": "Legal bases",
          "paragraphs": [
            "Responding to quotation requests and handling bookings is based on pre-contractual steps at your request and performance of the contract.",
            "Accounting and other legally required processing is based on legal obligations. Website operation and security are based on the legitimate interest in providing a reliable, secure service while respecting your rights.",
            "Optional audience measurement and contact or booking-request click measurement are based on your prior consent (Article 6(1)(a) GDPR). They remain disabled until you allow them. You can refuse or withdraw via “Audience measurement settings” in the footer without losing access to the website."
          ]
        },
        {
          "title": "Optional Vercel Web Analytics",
          "paragraphs": [
            "After your consent, Vercel Web Analytics measures page visits and four click categories: WhatsApp, telephone, email and booking requests. Custom events have fixed names only, with no contact details, link destination, message content, form values or customer identifier. A click indicates an intention to contact us, not a completed booking.",
            "Vercel processes technical request data to create aggregated statistics, including device/browser information, approximate location and a short-lived visit hash. According to Vercel, the visit identifier is discarded after 24 hours; this is not the retention period of aggregate statistics. No identify/group feature or analytics cookie is enabled. Page URLs are limited to public routes and stripped of queries and fragments. Events with potentially identifying referrers are filtered out.",
            "The provider is Vercel Inc. Processing can involve transfers outside the EEA; its data processing agreement and transfer safeguards are described at https://vercel.com/legal/dpa. Analytics privacy details: https://vercel.com/docs/analytics/privacy-policy. Aggregate statistics are retained according to the applicable Vercel plan and project retention settings; they are not added to customer or booking records.",
            "The first-party local storage entry rando-analytics-consent-v1 contains only your allow/refuse choice and its expiry, valid for a maximum of 180 days and removed on your next visit after expiry. It is used solely to respect your privacy preference, not to identify or track you. No preference is stored until you make a choice. If browser storage is unavailable, the choice lasts only for the current page session."
          ]
        },
        {
          "title": "Recipients and external services",
          "paragraphs": [
            "Information is intended for Maddy Polomeni and authorised people needed to handle your request or arrange the service, and for technical email and hosting providers where their involvement is necessary.",
            "The website is hosted by Vercel Inc., based in the United States. Hosting may involve processing outside the European Economic Area. Vercel’s information about processing, international transfers and safeguards is available at https://vercel.com/legal/privacy-policy.",
            "Opening WhatsApp or another external service takes you away from this website. That service’s processing is governed by its own privacy policy."
          ]
        },
        {
          "title": "Retention and security",
          "paragraphs": [
            "Enquiries and correspondence are kept for the time needed to handle them and follow up the relationship. Booking information is retained to provide the service and, where necessary, to meet legal obligations or defend rights within applicable limitation periods.",
            "Relevant accounting records and supporting documents are kept for the statutory 10-year period under Article L. 123-22 of the French Commercial Code. Other data is deleted or anonymised when no longer needed, subject to statutory retention obligations.",
            "Access to information must be restricted to authorised people. Connections to this website are encrypted using HTTPS."
          ]
        },
        {
          "title": "Your rights",
          "paragraphs": [
            "Subject to GDPR conditions, you may request access, rectification, erasure, restriction of processing, portability and object to processing based on legitimate interests.",
            "Send requests to bonjour@maddypolomeni.com or the business address above. Identity verification may be requested where there is reasonable doubt. Replies are provided within the statutory GDPR time limits.",
            "You may also complain to the French data protection authority, CNIL: https://www.cnil.fr."
          ]
        }
      ]
    },
    "cookie-policy": {
      "title": "Cookie Policy",
      "introduction": "Cookies and similar technologies in the current Rando d’Azur website.",
      "sections": [
        {
          "title": "Optional Vercel Web Analytics",
          "paragraphs": [
            "Vercel Web Analytics is integrated but its script and events load only after explicit consent. No advertising pixels or external booking widget are integrated. The map remains local; external services such as WhatsApp, Instagram, Facebook and the Regiondo booking shop load only when you open their links. Those links themselves do not set third-party cookies on this website. The newsletter uses a native form submission to Brevo; no Brevo script or widget loads before submission. The external response page is governed by Brevo’s cookie information.",
            "After your consent, Vercel Web Analytics measures page visits and four click categories: WhatsApp, telephone, email and booking requests. Custom events have fixed names only, with no contact details, link destination, message content, form values or customer identifier. A click indicates an intention to contact us, not a completed booking.",
            "Vercel processes technical request data to create aggregated statistics, including device/browser information, approximate location and a short-lived visit hash. According to Vercel, the visit identifier is discarded after 24 hours; this is not the retention period of aggregate statistics. No identify/group feature or analytics cookie is enabled. Page URLs are limited to public routes and stripped of queries and fragments. Events with potentially identifying referrers are filtered out."
          ]
        },
        {
          "title": "Your choice and local storage",
          "paragraphs": [
            "The first-party local storage entry rando-analytics-consent-v1 contains only your allow/refuse choice and its expiry, valid for a maximum of 180 days and removed on your next visit after expiry. It is used solely to respect your privacy preference, not to identify or track you. No preference is stored until you make a choice. If browser storage is unavailable, the choice lasts only for the current page session."
          ]
        },
        {
          "title": "Consent and withdrawal",
          "paragraphs": [
            "We do not assume that being cookie-free exempts audience or conversion measurement from consent. Use the footer settings to allow, refuse or withdraw. Analytics is off by default. Allowing and refusing are presented equally; closing the panel is not consent.",
            "External services opened voluntarily apply their own privacy and cookie policies. You can also manage website storage in your browser. Questions or privacy requests: bonjour@maddypolomeni.com."
          ]
        }
      ]
    }
  },
  "fr": {
    "legal-notice": {
      "title": "Mentions légales",
      "introduction": "Identification de l’éditeur et informations légales du site Rando d’Azur.",
      "sections": [
        {
          "title": "Publication et hébergement",
          "paragraphs": [
            "Directrice de la publication : Maddy Polomeni.",
            "Hébergement : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Site de l’hébergeur : https://vercel.com. Informations et contact relatifs à la protection des données : https://vercel.com/legal/privacy-policy."
          ]
        },
        {
          "title": "Contenus du site",
          "paragraphs": [
            "Les textes, photographies, logos et autres contenus du site sont protégés par les règles applicables à la propriété intellectuelle. Toute utilisation doit respecter les droits de leurs titulaires et les exceptions prévues par la loi.",
            "Les liens vers des sites tiers permettent d’accéder à des services indépendants, soumis à leurs propres conditions."
          ]
        }
      ]
    },
    "terms-and-conditions": {
      "title": "Conditions générales de vente",
      "introduction": "Conditions applicables aux réservations des expériences proposées par Rando d’Azur, sous réserve des droits légaux du consommateur.",
      "sections": [
        {
          "title": "Réservation et prix",
          "paragraphs": [
            "Les caractéristiques de l’activité, la date ou période, le prix total TTC et les modalités de réalisation sont précisés lors de la réservation ou dans le devis correspondant. La réservation est confirmée par Rando d’Azur.",
            "Toute modification convenue avec le client doit être prise en compte dans les informations de réservation ou le devis applicable."
          ]
        },
        {
          "title": "Paiement",
          "paragraphs": [
            "Le paiement est comptant, selon les modalités précisées lors de la réservation ou sur le devis correspondant."
          ]
        },
        {
          "title": "Annulation par le client",
          "paragraphs": [
            "Plus de 7 jours avant le départ : remboursement intégral.",
            "De 7 jours à 48 heures avant le départ incluses : 25 % du montant total TTC sont retenus.",
            "Moins de 48 heures avant le départ : 100 % du montant total sont retenus.",
            "No-show / absence au départ : 100 % du montant total sont retenus.",
            "Pour notifier une annulation ou poser une question sur sa réservation, le client peut contacter Maddy à bonjour@maddypolomeni.com ou au +33 6 67 90 69 32. Ces conditions s’appliquent sans préjudice des droits impératifs reconnus au consommateur."
          ]
        },
        {
          "title": "Météo, sécurité et annulation par Rando d’Azur",
          "paragraphs": [
            "Lorsque les conditions météorologiques, les conditions de sécurité ou toute circonstance extérieure rendent l’activité impossible ou dangereuse, Rando d’Azur peut adapter l’itinéraire, modifier l’activité, la reporter ou l’annuler. Toute modification substantielle est soumise à l’accord du client lorsque la loi l’exige.",
            "Dans la mesure du possible, Rando d’Azur proposera en priorité un report à une autre date ou une activité ou solution alternative appropriée.",
            "Si aucune solution alternative ni aucun report acceptable ne peut être proposé, la prestation annulée par Rando d’Azur sera remboursée. Les sommes versées pour cette prestation sont restituées conformément aux règles légales applicables.",
            "Cette disposition ne limite pas les droits légaux du consommateur, notamment en cas d’inexécution de la prestation ou lorsque la réglementation prévoit d’autres recours."
          ]
        },
        {
          "title": "Droit de rétractation",
          "paragraphs": [
            "Conformément à l’article L. 221-28, 12° du Code de la consommation, le droit de rétractation ne s’applique pas aux prestations d’activités de loisirs qui doivent être fournies à une date ou pendant une période déterminée. Cette exception ne supprime pas les conditions d’annulation prévues ci-dessus.",
            "Pour les contrats qui ne relèvent pas de cette exception, les règles légales relatives au droit de rétractation restent applicables."
          ]
        },
        {
          "title": "Réclamations et droits du consommateur",
          "paragraphs": [
            "Toute réclamation peut être adressée à bonjour@maddypolomeni.com ou à l’adresse professionnelle indiquée dans ces conditions.",
            "Le consommateur dispose du droit de recourir gratuitement à un médiateur de la consommation dans les conditions prévues par la loi. Les présentes conditions ne privent pas le consommateur de ses autres voies de recours légales."
          ]
        }
      ]
    },
    "privacy-policy": {
      "title": "Politique de confidentialité / RGPD",
      "introduction": "Comment Rando d’Azur traite les données nécessaires aux échanges, aux réservations et au fonctionnement de ce site.",
      "sections": [
        {
          "title": "Données traitées et finalités",
          "paragraphs": [
            "Lorsque vous contactez Maddy par e-mail, téléphone ou WhatsApp, les coordonnées et informations que vous communiquez servent à répondre à votre demande, préparer un devis et, le cas échéant, organiser et suivre votre réservation. Ne transmettez que les informations utiles à votre demande.",
            "L’hébergement du site implique le traitement de données techniques nécessaires à la délivrance des pages et à leur sécurité, notamment l’adresse IP et les informations techniques de la requête.",
            "Le formulaire de newsletter transmet votre adresse e-mail et votre consentement explicite à Brevo via son formulaire officiel sécurisé. Un e-mail de confirmation est demandé ; l’inscription à la newsletter ne prend effet qu’après clic sur le lien de confirmation sous 7 jours. La seule soumission du formulaire ne vaut pas inscription confirmée. Les liens de réservation ouvrent la boutique externe Regiondo (https://randodazur.regiondo.fr/categories). Aucun widget de paiement ou de réservation ne se charge sur ce site. Les liens Instagram et Facebook ouvrent également des sites externes, soumis à leurs propres politiques et choix de confidentialité et de cookies."
          ]
        },
        {
          "title": "Newsletter et consentement",
          "paragraphs": [
            "Rando d’Azur utilise Brevo comme sous-traitant pour gérer les adresses e-mail, les preuves de consentement et de confirmation, et envoyer la newsletter. Ce traitement repose sur votre consentement explicite (article 6(1)(a) du RGPD). La case n’est pas précochée. Vous pouvez retirer votre consentement via le lien de désinscription dans nos newsletters ou en écrivant à bonjour@maddypolomeni.com.",
            "Les données de newsletter sont utilisées pendant votre abonnement. Les preuves de consentement et les données de suppression peuvent être conservées si nécessaire pour respecter le retrait ou démontrer le consentement. Le délai de confirmation de 7 jours ne signifie pas automatiquement que les fiches non confirmées sont supprimées. Les demandes non confirmées ne sont pas traitées comme des inscriptions actives à la newsletter. Informations de Brevo : https://www.brevo.com/legal/privacypolicy/.",
            "Le formulaire est soumis directement à Brevo et sa page de réponse est ensuite affichée. Aucun widget intégré, pixel ou script marketing Brevo ne se charge sur ce site. Le formulaire externe applique ses propres informations de confidentialité et cookies."
          ]
        },
        {
          "title": "Bases légales",
          "paragraphs": [
            "La réponse aux demandes de devis et la gestion des réservations reposent sur les mesures précontractuelles prises à votre demande et l’exécution du contrat.",
            "Les traitements imposés par la comptabilité ou d’autres obligations légales reposent sur ces obligations. Le fonctionnement et la sécurité du site reposent sur l’intérêt légitime à fournir un service fiable et sécurisé, dans le respect de vos droits.",
            "La mesure facultative d’audience et des clics de contact ou de demande de réservation repose sur votre consentement préalable (article 6, paragraphe 1, a du RGPD). Elle reste désactivée tant que vous ne l’autorisez pas. Vous pouvez refuser ou retirer votre accord via « Préférences de mesure d’audience » dans le footer sans perdre l’accès au site."
          ]
        },
        {
          "title": "Vercel Web Analytics facultatif",
          "paragraphs": [
            "Après votre consentement, Vercel Web Analytics mesure les visites et quatre catégories de clics : WhatsApp, téléphone, email et demandes de réservation. Les événements personnalisés portent uniquement des noms fixes, sans coordonnées, destination du lien, contenu de message, valeurs de formulaire ni identifiant client. Un clic indique une intention de contact, pas une réservation confirmée.",
            "Vercel traite des données techniques de requête pour produire des statistiques agrégées : appareil et navigateur, localisation approximative et empreinte de visite éphémère. Selon Vercel, l’identifiant de visite est supprimé après 24 heures ; ce délai n’est pas la durée de conservation des statistiques agrégées. Aucune fonctionnalité identify/group ni aucun cookie Analytics n’est activé. Les URLs sont limitées aux routes publiques, sans paramètres ni fragments. Les événements dont le référent peut contenir des informations identifiantes sont filtrés.",
            "Le prestataire est Vercel Inc. Le traitement peut impliquer des transferts hors EEE ; son accord de traitement des données et les garanties de transfert sont décrits sur https://vercel.com/legal/dpa. Informations Analytics : https://vercel.com/docs/analytics/privacy-policy. Les statistiques agrégées sont conservées selon le plan Vercel et les paramètres de rétention applicables au projet ; elles ne sont pas ajoutées aux dossiers clients ou de réservation.",
            "L’entrée de stockage local propriétaire rando-analytics-consent-v1 contient uniquement votre choix autoriser/refuser et son échéance, valable pendant 180 jours au maximum et supprimée lors de votre prochaine visite après expiration. Elle sert exclusivement à respecter votre préférence, pas à vous identifier ou vous suivre. Aucun choix n’est enregistré avant votre décision. Si le stockage du navigateur est indisponible, le choix ne dure que pendant la session de la page."
          ]
        },
        {
          "title": "Destinataires et services tiers",
          "paragraphs": [
            "Les informations sont destinées à Maddy Polomeni et aux personnes habilitées nécessaires au traitement de votre demande ou à l’organisation de votre prestation, ainsi qu’aux prestataires techniques de messagerie et d’hébergement lorsque leur intervention est nécessaire.",
            "Le site est hébergé par Vercel Inc., établi aux États-Unis. L’hébergement peut impliquer des traitements hors de l’Espace économique européen. Les informations de Vercel relatives aux traitements, aux transferts internationaux et aux garanties applicables sont disponibles à https://vercel.com/legal/privacy-policy.",
            "Lorsque vous ouvrez un lien vers WhatsApp ou un autre service externe, vous quittez le site et les traitements effectués par ce service sont régis par sa propre politique de confidentialité."
          ]
        },
        {
          "title": "Conservation et sécurité",
          "paragraphs": [
            "Les demandes et échanges sont conservés pendant la durée nécessaire à leur traitement et au suivi de la relation. Les informations de réservation sont conservées pour l’exécution de la prestation, puis, si nécessaire, pour répondre aux obligations légales ou à la défense de droits pendant les délais applicables.",
            "Les pièces comptables et justificatifs concernés sont conservés pendant la durée légale de 10 ans prévue par l’article L. 123-22 du Code de commerce. Les autres données sont supprimées ou anonymisées lorsqu’elles ne sont plus nécessaires, sous réserve d’une obligation légale de conservation.",
            "L’accès aux données doit être limité aux personnes habilitées. Les échanges avec le site sont chiffrés par HTTPS."
          ]
        },
        {
          "title": "Vos droits",
          "paragraphs": [
            "Selon les conditions prévues par le RGPD, vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation du traitement, leur portabilité et vous opposer aux traitements fondés sur l’intérêt légitime.",
            "Adressez votre demande à bonjour@maddypolomeni.com ou à l’adresse professionnelle indiquée ci-dessus. Une vérification d’identité peut être demandée en cas de doute raisonnable. La réponse intervient dans les délais légaux du RGPD.",
            "Vous pouvez également déposer une réclamation auprès de la CNIL : https://www.cnil.fr."
          ]
        }
      ]
    },
    "cookie-policy": {
      "title": "Politique relative aux cookies",
      "introduction": "Informations sur les cookies et technologies similaires dans la version actuelle du site Rando d’Azur.",
      "sections": [
        {
          "title": "Vercel Web Analytics facultatif",
          "paragraphs": [
            "Vercel Web Analytics est intégré, mais son script et ses événements ne sont chargés qu’après consentement explicite. Aucun pixel publicitaire ni widget externe de réservation n’est intégré. La carte reste locale ; les services externes comme WhatsApp, Instagram, Facebook et la boutique Regiondo ne se chargent que si vous les ouvrez.",
            "Après votre consentement, Vercel Web Analytics mesure les visites et quatre catégories de clics : WhatsApp, téléphone, email et demandes de réservation. Les événements personnalisés portent uniquement des noms fixes, sans coordonnées, destination du lien, contenu de message, valeurs de formulaire ni identifiant client. Un clic indique une intention de contact, pas une réservation confirmée.",
            "Vercel traite des données techniques de requête pour produire des statistiques agrégées : appareil et navigateur, localisation approximative et empreinte de visite éphémère. Selon Vercel, l’identifiant de visite est supprimé après 24 heures ; ce délai n’est pas la durée de conservation des statistiques agrégées. Aucune fonctionnalité identify/group ni aucun cookie Analytics n’est activé. Les URLs sont limitées aux routes publiques, sans paramètres ni fragments. Les événements dont le référent peut contenir des informations identifiantes sont filtrés."
          ]
        },
        {
          "title": "Votre choix et le stockage local",
          "paragraphs": [
            "L’entrée de stockage local propriétaire rando-analytics-consent-v1 contient uniquement votre choix autoriser/refuser et son échéance, valable pendant 180 jours au maximum et supprimée lors de votre prochaine visite après expiration. Elle sert exclusivement à respecter votre préférence, pas à vous identifier ou vous suivre. Aucun choix n’est enregistré avant votre décision. Si le stockage du navigateur est indisponible, le choix ne dure que pendant la session de la page."
          ]
        },
        {
          "title": "Consentement et retrait",
          "paragraphs": [
            "Nous ne présumons pas que l’absence de cookies dispense la mesure d’audience ou de conversion de consentement. Les préférences du footer permettent d’autoriser, de refuser ou de retirer votre accord. La mesure est désactivée par défaut. L’autorisation et le refus sont présentés à égalité ; fermer le panneau ne vaut pas consentement.",
            "La newsletter est soumise directement à Brevo : aucun script ni widget Brevo ne se charge avant l’envoi. La page de réponse externe applique les informations de cookies de Brevo. Les services externes ouverts volontairement appliquent leurs propres politiques de confidentialité et de cookies. Vous pouvez aussi gérer le stockage du site dans votre navigateur. Questions ou demandes relatives à vos droits : bonjour@maddypolomeni.com."
          ]
        }
      ]
    }
  },
};

export function getLegalDocument(locale: Locale, slug: LegalPageSlug): LegalDocument {
  const document = documents[locale][slug];
  if (slug === "cookie-policy") return document;
  const title = locale === "fr" ? (slug === "privacy-policy" ? "Responsable du traitement" : "Identité du professionnel") : (slug === "privacy-policy" ? "Data controller" : "Business identity");
  const identity = locale === "fr" ? "Rando d’Azur — Maddy Polomeni, entrepreneur individuel." : "Rando d’Azur — Maddy Polomeni, sole trader (entrepreneur individuel).";
  const address = `${businessDetails.streetAddress}, ${businessDetails.addressLine2}, ${businessDetails.postalCode} ${businessDetails.city}, ${businessDetails.country}.`;
  const contact = `${locale === "fr" ? "E-mail" : "Email"} : ${contactChannels.primaryEmail}. ${locale === "fr" ? "Téléphone" : "Telephone"} : ${contactChannels.phoneDisplay}.`;
  const ids = `SIRET : ${businessDetails.siret}. ${locale === "fr" ? "TVA intracommunautaire" : "EU VAT number"} : ${businessDetails.vatID}. Code NAF : ${businessDetails.naf}.`;
  return { ...document, sections: [{ title, paragraphs: [identity, address, contact, ids, businessDetails.website] }, ...document.sections] };
}
