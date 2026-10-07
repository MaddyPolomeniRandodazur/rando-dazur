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
            "In the current website, the newsletter form does not send the entered email address or register a subscription. The displayed booking area does not load a third-party booking or payment widget."
          ]
        },
        {
          "title": "Legal bases",
          "paragraphs": [
            "Responding to quotation requests and handling bookings is based on pre-contractual steps at your request and performance of the contract.",
            "Accounting and other legally required processing is based on legal obligations. Website operation and security are based on the legitimate interest in providing a reliable, secure service while respecting your rights.",
            "No advertising processing or audience measurement tool requiring your consent is currently integrated into the website."
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
          "title": "Technical audit",
          "paragraphs": [
            "The code and browsing audit detected no cookies, local or session storage, iframes, analytics or advertising tools. Observed resources originate from the website’s own domain.",
            "The website currently integrates no advertising trackers, marketing pixels or audience analytics tools. The map is part of the website without an embedded external mapping service. External links do not load their services until opened."
          ]
        },
        {
          "title": "Consent and future changes",
          "paragraphs": [
            "A tracker consent banner is not required for the features currently integrated and audited.",
            "If non-essential trackers are added, this policy must be updated and prior consent obtained where required by law, with the ability to refuse and withdraw consent."
          ]
        },
        {
          "title": "Browser settings and external services",
          "paragraphs": [
            "You can manage or remove cookies and website data in your browser settings.",
            "External services you choose to open, including WhatsApp, apply their own cookie and privacy policies. Questions about this website: bonjour@maddypolomeni.com."
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
            "Dans la version actuelle du site, le formulaire de newsletter ne transmet pas l’adresse saisie et ne procède à aucune inscription. Le bloc de réservation affiché ne charge pas de widget de paiement ou de réservation tiers."
          ]
        },
        {
          "title": "Bases légales",
          "paragraphs": [
            "La réponse aux demandes de devis et la gestion des réservations reposent sur les mesures précontractuelles prises à votre demande et l’exécution du contrat.",
            "Les traitements imposés par la comptabilité ou d’autres obligations légales reposent sur ces obligations. Le fonctionnement et la sécurité du site reposent sur l’intérêt légitime à fournir un service fiable et sécurisé, dans le respect de vos droits.",
            "Aucun traitement publicitaire ni outil de mesure d’audience nécessitant votre consentement n’est actuellement intégré au site."
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
          "title": "Résultat de l’audit technique",
          "paragraphs": [
            "L’audit du code et de la navigation du site n’a détecté aucun cookie, stockage local ou stockage de session, aucun iframe et aucun chargement d’outil de mesure d’audience ou de publicité. Les ressources observées proviennent du domaine du site.",
            "Le site n’intègre actuellement aucun traceur publicitaire, pixel marketing ou outil d’analyse d’audience. La carte est intégrée au site sans service cartographique tiers. Les liens externes ne chargent pas ces services avant que vous ne les ouvriez."
          ]
        },
        {
          "title": "Consentement et évolution du site",
          "paragraphs": [
            "Aucun bandeau de consentement aux traceurs n’est nécessaire pour les fonctionnalités actuellement intégrées et auditées.",
            "Si des traceurs non strictement nécessaires sont ajoutés, cette politique devra être mise à jour et leur dépôt ou leur lecture soumis au consentement préalable lorsque la loi l’exige, avec la possibilité de refuser et de retirer ce consentement."
          ]
        },
        {
          "title": "Votre navigateur et les services externes",
          "paragraphs": [
            "Vous pouvez gérer ou supprimer les cookies et données de sites depuis les paramètres de votre navigateur.",
            "Les services externes ouverts volontairement, notamment WhatsApp, appliquent leurs propres politiques relatives aux cookies et à la confidentialité. Pour toute question concernant ce site : bonjour@maddypolomeni.com."
          ]
        }
      ]
    }
  },
  "it": {
    "legal-notice": {
      "title": "Note legali",
      "introduction": "Identificazione dell’editore e informazioni legali del sito Rando d’Azur.",
      "sections": [
        {
          "title": "Pubblicazione e hosting",
          "paragraphs": [
            "Direttrice della pubblicazione: Maddy Polomeni.",
            "Hosting: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Stati Uniti. Sito del fornitore: https://vercel.com. Informazioni e contatti sulla protezione dei dati: https://vercel.com/legal/privacy-policy."
          ]
        },
        {
          "title": "Contenuti del sito",
          "paragraphs": [
            "Testi, fotografie, loghi e altri contenuti sono protetti dalle norme applicabili alla proprietà intellettuale. Ogni utilizzo deve rispettare i diritti dei titolari e le eccezioni di legge.",
            "I collegamenti a siti terzi conducono a servizi indipendenti, soggetti alle proprie condizioni."
          ]
        }
      ]
    },
    "terms-and-conditions": {
      "title": "Condizioni generali di vendita",
      "introduction": "Condizioni per prenotare le esperienze Rando d’Azur, fatti salvi i diritti inderogabili dei consumatori.",
      "sections": [
        {
          "title": "Prenotazioni e prezzi",
          "paragraphs": [
            "Le caratteristiche dell’attività, la data o il periodo, il prezzo totale comprensivo di imposte e le modalità della prestazione sono precisati alla prenotazione o nel preventivo corrispondente. La prenotazione è confermata da Rando d’Azur.",
            "Le modifiche concordate con il cliente devono risultare nelle informazioni di prenotazione o nel preventivo applicabile."
          ]
        },
        {
          "title": "Pagamento",
          "paragraphs": [
            "Il pagamento è dovuto per intero secondo le modalità precisate alla prenotazione o nel preventivo corrispondente."
          ]
        },
        {
          "title": "Annullamento da parte del cliente",
          "paragraphs": [
            "Oltre 7 giorni prima della partenza: rimborso integrale.",
            "Da 7 giorni fino a 48 ore prima della partenza, incluse: viene trattenuto il 25% dell’importo totale comprensivo di imposte.",
            "Meno di 48 ore prima della partenza: viene trattenuto il 100% dell’importo totale.",
            "No-show / assenza alla partenza: viene trattenuto il 100% dell’importo totale.",
            "Per comunicare un annullamento o chiedere informazioni sulla prenotazione, contattare Maddy a bonjour@maddypolomeni.com o al +33 6 67 90 69 32. Restano salvi i diritti inderogabili del consumatore."
          ]
        },
        {
          "title": "Meteo, sicurezza e annullamento da parte di Rando d’Azur",
          "paragraphs": [
            "Se il meteo, le condizioni di sicurezza o circostanze esterne rendono l’attività impossibile o pericolosa, Rando d’Azur può adattare l’itinerario, modificare l’attività, rinviarla o annullarla. Le modifiche sostanziali richiedono l’accordo del cliente quando previsto dalla legge.",
            "Ove possibile, Rando d’Azur propone in via prioritaria un rinvio ad altra data oppure un’attività o una soluzione alternativa appropriata.",
            "Se non è possibile proporre un rinvio o un’alternativa accettabile, la prestazione annullata da Rando d’Azur viene rimborsata. Le somme versate per tale prestazione vengono restituite secondo le norme applicabili.",
            "Questa disposizione non limita i diritti legali del consumatore, compresi i rimedi per la mancata esecuzione della prestazione e gli altri rimedi previsti dalla legge."
          ]
        },
        {
          "title": "Diritto di recesso",
          "paragraphs": [
            "Ai sensi dell’articolo L. 221-28, paragrafo 12 del Codice del consumo francese, il diritto di recesso non si applica ai servizi per il tempo libero forniti in una data o in un periodo determinati. Questa eccezione non elimina le condizioni di annullamento sopra indicate.",
            "Per i contratti non compresi in tale eccezione restano applicabili le norme di legge sul diritto di recesso."
          ]
        },
        {
          "title": "Reclami e diritti del consumatore",
          "paragraphs": [
            "I reclami possono essere inviati a bonjour@maddypolomeni.com o all’indirizzo professionale indicato in queste condizioni.",
            "Il consumatore ha diritto alla mediazione dei consumatori gratuita alle condizioni previste dalla legge. Queste condizioni non escludono gli altri rimedi legali."
          ]
        }
      ]
    },
    "privacy-policy": {
      "title": "Informativa sulla privacy / GDPR",
      "introduction": "Come Rando d’Azur tratta i dati necessari per richieste, prenotazioni e funzionamento del sito.",
      "sections": [
        {
          "title": "Dati e finalità",
          "paragraphs": [
            "Quando contatti Maddy via e-mail, telefono o WhatsApp, i recapiti e le informazioni comunicati servono a rispondere alla richiesta, preparare un preventivo e, se necessario, organizzare e seguire la prenotazione. Comunica solo informazioni utili alla richiesta.",
            "L’hosting comporta il trattamento di dati tecnici necessari per fornire e proteggere le pagine, tra cui l’indirizzo IP e le informazioni tecniche della richiesta.",
            "Nella versione attuale, il modulo newsletter non invia l’e-mail inserita e non effettua iscrizioni. L’area di prenotazione non carica widget di pagamento o prenotazione di terzi."
          ]
        },
        {
          "title": "Basi giuridiche",
          "paragraphs": [
            "Le richieste di preventivo e le prenotazioni si basano sulle misure precontrattuali richieste dall’interessato e sull’esecuzione del contratto.",
            "I trattamenti contabili e gli altri trattamenti imposti dalla legge si basano sugli obblighi legali. Il funzionamento e la sicurezza del sito si basano sull’interesse legittimo a fornire un servizio affidabile e sicuro, nel rispetto dei tuoi diritti.",
            "Il sito non integra attualmente trattamenti pubblicitari o strumenti di analisi dell’audience che richiedano il consenso."
          ]
        },
        {
          "title": "Destinatari e servizi esterni",
          "paragraphs": [
            "I dati sono destinati a Maddy Polomeni e alle persone autorizzate necessarie per gestire la richiesta o organizzare il servizio, nonché ai fornitori tecnici di posta e hosting quando necessario.",
            "Il sito è ospitato da Vercel Inc., con sede negli Stati Uniti. L’hosting può comportare trattamenti fuori dallo Spazio economico europeo. Le informazioni di Vercel sui trattamenti, trasferimenti internazionali e garanzie sono disponibili su https://vercel.com/legal/privacy-policy.",
            "Aprendo WhatsApp o un altro servizio esterno lasci questo sito. I trattamenti del servizio esterno sono regolati dalla relativa informativa sulla privacy."
          ]
        },
        {
          "title": "Conservazione e sicurezza",
          "paragraphs": [
            "Richieste e corrispondenza sono conservate per il tempo necessario alla loro gestione e al seguito del rapporto. I dati di prenotazione sono conservati per eseguire il servizio e, ove necessario, rispettare gli obblighi legali o tutelare i diritti entro i termini applicabili.",
            "I documenti contabili e i relativi giustificativi sono conservati per il termine legale di 10 anni previsto dall’articolo L. 123-22 del Codice di commercio francese. Gli altri dati vengono eliminati o anonimizzati quando non più necessari, fatti salvi gli obblighi legali di conservazione.",
            "L’accesso deve essere limitato alle persone autorizzate. I collegamenti con il sito sono cifrati tramite HTTPS."
          ]
        },
        {
          "title": "I tuoi diritti",
          "paragraphs": [
            "Alle condizioni previste dal GDPR, puoi chiedere accesso, rettifica, cancellazione, limitazione e portabilità dei dati, e opporti ai trattamenti basati sull’interesse legittimo.",
            "Invia le richieste a bonjour@maddypolomeni.com o all’indirizzo professionale sopra indicato. In caso di ragionevole dubbio può essere chiesta una verifica dell’identità. La risposta viene fornita entro i termini di legge del GDPR.",
            "Puoi anche presentare un reclamo alla CNIL, autorità francese di protezione dei dati: https://www.cnil.fr."
          ]
        }
      ]
    },
    "cookie-policy": {
      "title": "Politica sui cookie",
      "introduction": "Cookie e tecnologie simili nella versione attuale del sito Rando d’Azur.",
      "sections": [
        {
          "title": "Audit tecnico",
          "paragraphs": [
            "L’audit del codice e della navigazione non ha rilevato cookie, archiviazione locale o di sessione, iframe, strumenti pubblicitari o di analisi dell’audience. Le risorse osservate provengono dal dominio del sito.",
            "Il sito non integra attualmente tracker pubblicitari, pixel di marketing o strumenti di analisi dell’audience. La mappa è interna e non incorpora un servizio cartografico esterno. I collegamenti esterni non caricano i servizi prima dell’apertura."
          ]
        },
        {
          "title": "Consenso e modifiche future",
          "paragraphs": [
            "Le funzionalità attualmente integrate e verificate non richiedono un banner di consenso ai tracker.",
            "Se vengono aggiunti tracker non strettamente necessari, questa politica dovrà essere aggiornata e il consenso preventivo richiesto quando previsto dalla legge, con possibilità di rifiutarlo e revocarlo."
          ]
        },
        {
          "title": "Browser e servizi esterni",
          "paragraphs": [
            "Puoi gestire o cancellare cookie e dati dei siti dalle impostazioni del browser.",
            "I servizi esterni aperti volontariamente, incluso WhatsApp, applicano le proprie politiche sui cookie e sulla privacy. Per domande su questo sito: bonjour@maddypolomeni.com."
          ]
        }
      ]
    }
  }
};

export function getLegalDocument(locale: Locale, slug: LegalPageSlug): LegalDocument {
  const document = documents[locale][slug];
  if (slug === "cookie-policy") return document;
  const title = locale === "fr" ? (slug === "privacy-policy" ? "Responsable du traitement" : "Identité du professionnel") : locale === "it" ? (slug === "privacy-policy" ? "Titolare del trattamento" : "Identità del professionista") : (slug === "privacy-policy" ? "Data controller" : "Business identity");
  const identity = locale === "fr" ? "Rando d’Azur — Maddy Polomeni, entrepreneur individuel." : locale === "it" ? "Rando d’Azur — Maddy Polomeni, imprenditrice individuale (entrepreneur individuel)." : "Rando d’Azur — Maddy Polomeni, sole trader (entrepreneur individuel).";
  const address = `${businessDetails.streetAddress}, ${businessDetails.addressLine2}, ${businessDetails.postalCode} ${businessDetails.city}, ${businessDetails.country}.`;
  const contact = `${locale === "fr" ? "E-mail" : "Email"} : ${contactChannels.primaryEmail}. ${locale === "fr" ? "Téléphone" : locale === "it" ? "Telefono" : "Telephone"} : ${contactChannels.phoneDisplay}.`;
  const ids = `SIRET : ${businessDetails.siret}. ${locale === "fr" ? "TVA intracommunautaire" : locale === "it" ? "Partita IVA intracomunitaria" : "EU VAT number"} : ${businessDetails.vatID}. Code NAF : ${businessDetails.naf}.`;
  return { ...document, sections: [{ title, paragraphs: [identity, address, contact, ids, businessDetails.website] }, ...document.sections] };
}
