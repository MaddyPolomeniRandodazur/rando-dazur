import type { LegalPageSlug, Locale } from "./config";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  introduction: string;
  sections: LegalSection[];
};

const documents: Record<Locale, Record<LegalPageSlug, LegalDocument>> = {
  en: {
    "legal-notice": {
      title: "Legal Notice",
      introduction:
        "The following information is reproduced from the previous Rando d’Azur website. Some statutory details were not provided in that source and must be confirmed before publication.",
      sections: [
        {
          title: "Publisher",
          paragraphs: [
            "Business name: Maddy Polomeni. Legal form: individual company. Registered office: 225 Rue F. Leger, Biot, France. Stated share capital: €0.",
            "Email: info@randodazur.com. Telephone: +33 6 67 90 69 32.",
            "The source does not state a registration number or the identity of the publication director. It states that no intra-community VAT number applies.",
          ],
        },
        {
          title: "Professional authorisation",
          paragraphs: [
            "DDJS 06 – Professional card no. 00619ED0293, issued by the Alpes-Maritimes Prefecture.",
          ],
        },
      ],
    },
    "terms-and-conditions": {
      title: "Terms & Conditions",
      introduction:
        "These terms are adapted from the booking conditions published on the previous Rando d’Azur website. They should be reviewed against the current booking process before being relied upon.",
      sections: [
        {
          title: "Orders",
          paragraphs: [
            "An order is accepted only after confirmation by the service provider. If the purchaser does not receive an acknowledgement within three calendar days of placing the order, they may cancel it without penalty.",
            "Until the seller confirms the order, the purchaser may amend it. Any change to the price must be communicated to the purchaser and accepted in writing. Once accepted by the seller, the order is a firm commitment and implies acceptance of these order conditions.",
          ],
        },
        {
          title: "Insurance and tickets",
          paragraphs: [
            "The former website stated that professional civil liability insurance was held with Markel Insurance SE, contract no. 33204.000/S17566926. The seller undertakes to maintain the insurance required to cover bodily, material and immaterial damage arising from performance of the order.",
            "A ticket is valid until the date of the selected service.",
          ],
        },
        {
          title: "Cancellation and withdrawal",
          paragraphs: [
            "The former website describes bookings as non-cancellable and non-refundable, and states that the statutory right of withdrawal does not apply to online reservations for leisure activities supplied on a specific date or during a specific period.",
            "Rando d’Azur may cancel a service because of weather conditions or restrictions on access to natural areas when required for participant safety. In that case, the purchaser is entitled to a full refund without penalty.",
          ],
        },
      ],
    },
    "privacy-policy": {
      title: "Privacy Policy",
      introduction:
        "This summary is based on the data-protection statement published with the former booking terms. It does not replace a complete notice describing the website’s current data processing.",
      sections: [
        {
          title: "Data protection",
          paragraphs: [
            "Maddy Polomeni commits to protecting the personal data of customers using the Regiondo service and of other people whose personal data she processes, in accordance with applicable data-protection rules.",
            "Personal data should be processed lawfully, fairly and transparently; collected for specified, explicit and legitimate purposes; limited to what is necessary; and kept accurate and up to date.",
            "Appropriate technical and organisational measures are to be used to provide security proportionate to the risks and to protect the rights and data of the people concerned.",
          ],
        },
        {
          title: "Information to be completed",
          paragraphs: [
            "The source statement does not specify the website’s current purposes and legal bases, retention periods, data-subject request process, or whether this website uses analytics, marketing tools or other third-party services. These details must be confirmed and added before this notice is treated as complete.",
          ],
        },
      ],
    },
    "cookie-policy": {
      title: "Cookie Policy",
      introduction:
        "A cookie policy was not available on the previous Rando d’Azur website.",
      sections: [
        {
          title: "Policy to be completed",
          paragraphs: [
            "The cookies and similar technologies used by this website must be audited before this policy can accurately identify them, explain their purposes and retention periods, or describe how visitors can manage their choices.",
            "This page is a placeholder, not a statement that the website does or does not use cookies. It must be completed before publication.",
          ],
        },
      ],
    },
  },
  fr: {
    "legal-notice": {
      title: "Mentions légales",
      introduction:
        "Les informations suivantes sont reprises de l’ancien site Rando d’Azur. Certaines mentions obligatoires n’y figuraient pas et doivent être confirmées avant publication.",
      sections: [
        {
          title: "Éditeur",
          paragraphs: [
            "Raison sociale : Maddy Polomeni. Forme juridique : entreprise individuelle. Adresse : 225 rue F. Leger, Biot, France. Capital social indiqué : 0 €.",
            "E-mail : info@randodazur.com. Téléphone : +33 6 67 90 69 32.",
            "La source ne précise ni numéro d’immatriculation ni identité du directeur de la publication. Elle indique qu’aucun numéro de TVA intracommunautaire ne s’applique.",
          ],
        },
        {
          title: "Autorisation professionnelle",
          paragraphs: [
            "DDJS 06 – Carte professionnelle n° 00619ED0293, délivrée par la préfecture des Alpes-Maritimes.",
          ],
        },
      ],
    },
    "terms-and-conditions": {
      title: "Conditions générales",
      introduction:
        "Ces conditions sont adaptées des conditions de réservation publiées sur l’ancien site Rando d’Azur. Elles doivent être vérifiées au regard du parcours de réservation actuel avant de leur donner valeur contractuelle.",
      sections: [
        {
          title: "Commandes",
          paragraphs: [
            "La commande n’est réputée acceptée qu’après confirmation du prestataire. À défaut de réception d’un accusé de réception dans les trois jours calendaires suivant la commande, l’acheteur peut l’annuler sans pénalité.",
            "Tant que le vendeur n’a pas confirmé la commande, l’acheteur peut la modifier. Toute modification du prix doit lui être communiquée et faire l’objet d’une acceptation écrite. Une fois acceptée par le vendeur, la commande constitue un engagement ferme et définitif et implique l’acceptation des présentes conditions.",
          ],
        },
        {
          title: "Assurance et billets",
          paragraphs: [
            "L’ancien site indiquait une assurance responsabilité civile professionnelle auprès de Markel Insurance SE, contrat n° 33204.000/S17566926. Le vendeur s’engage à souscrire les garanties nécessaires pour couvrir les dommages corporels, matériels et immatériels liés à l’exécution de la commande.",
            "Le billet est valable jusqu’au jour de la prestation choisie.",
          ],
        },
        {
          title: "Annulation et rétractation",
          paragraphs: [
            "L’ancien site indiquait que les réservations ne sont ni annulables ni remboursables et que le droit de rétractation ne s’applique pas aux réservations en ligne d’activités de loisirs fournies à une date ou pendant une période déterminée.",
            "Rando d’Azur peut annuler une prestation en raison des conditions météorologiques ou d’une interdiction d’accès aux espaces naturels, lorsque la sécurité des participants l’exige. Dans ce cas, l’acheteur bénéficie d’un remboursement intégral sans pénalité.",
          ],
        },
      ],
    },
    "privacy-policy": {
      title: "Politique de confidentialité",
      introduction:
        "Ce résumé s’appuie sur la déclaration relative aux données publiée avec les anciennes conditions de réservation. Il ne remplace pas une notice complète décrivant les traitements actuels du site.",
      sections: [
        {
          title: "Protection des données",
          paragraphs: [
            "Maddy Polomeni s’engage à protéger les données personnelles des clients utilisant le service Regiondo et de toute autre personne dont elle traite les données, conformément à la réglementation applicable.",
            "Les données personnelles doivent être traitées de manière licite, loyale et transparente, collectées pour des finalités déterminées, limitées au nécessaire, exactes et tenues à jour.",
            "Des mesures techniques et organisationnelles appropriées doivent garantir un niveau de sécurité proportionné aux risques et protéger les droits et les données des personnes concernées.",
          ],
        },
        {
          title: "Informations à compléter",
          paragraphs: [
            "La source ne précise pas les finalités et bases légales actuelles du site, les durées de conservation, la procédure d’exercice des droits, ni l’utilisation éventuelle d’outils de mesure d’audience, de marketing ou de services tiers. Ces éléments doivent être confirmés et ajoutés avant que cette notice soit considérée comme complète.",
          ],
        },
      ],
    },
    "cookie-policy": {
      title: "Politique relative aux cookies",
      introduction:
        "Aucune politique relative aux cookies n’était disponible sur l’ancien site Rando d’Azur.",
      sections: [
        {
          title: "Politique à compléter",
          paragraphs: [
            "Les cookies et technologies similaires utilisés par ce site doivent être audités avant de pouvoir les identifier avec exactitude, d’en expliquer les finalités et durées de conservation ou de décrire la gestion des choix des visiteurs.",
            "Cette page est un emplacement provisoire ; elle n’affirme pas que le site utilise ou n’utilise pas de cookies. Elle doit être complétée avant publication.",
          ],
        },
      ],
    },
  },
  it: {
    "legal-notice": {
      title: "Note legali",
      introduction:
        "Le informazioni seguenti sono riprese dal precedente sito Rando d’Azur. Alcuni dati previsti dalla legge non erano presenti nella fonte e devono essere verificati prima della pubblicazione.",
      sections: [
        {
          title: "Editore",
          paragraphs: [
            "Ragione sociale: Maddy Polomeni. Forma giuridica: impresa individuale. Sede: 225 Rue F. Leger, Biot, Francia. Capitale sociale indicato: 0 €.",
            "E-mail: info@randodazur.com. Telefono: +33 6 67 90 69 32.",
            "La fonte non indica il numero di registrazione né l’identità del direttore della pubblicazione. Specifica che non si applica un numero di partita IVA intracomunitaria.",
          ],
        },
        {
          title: "Autorizzazione professionale",
          paragraphs: [
            "DDJS 06 – Tessera professionale n. 00619ED0293, rilasciata dalla prefettura delle Alpes-Maritimes.",
          ],
        },
      ],
    },
    "terms-and-conditions": {
      title: "Termini e condizioni",
      introduction:
        "Questi termini sono adattati dalle condizioni di prenotazione pubblicate sul precedente sito Rando d’Azur. Devono essere verificati rispetto all’attuale processo di prenotazione prima di essere applicati.",
      sections: [
        {
          title: "Ordini",
          paragraphs: [
            "L’ordine si considera accettato solo dopo la conferma del fornitore. Se l’acquirente non riceve una conferma entro tre giorni di calendario dall’ordine, può annullarlo senza penali.",
            "Fino alla conferma del venditore, l’acquirente può modificare l’ordine. Ogni variazione di prezzo deve essere comunicata e accettata per iscritto. Una volta accettato dal venditore, l’ordine costituisce un impegno definitivo e implica l’accettazione delle presenti condizioni.",
          ],
        },
        {
          title: "Assicurazione e biglietti",
          paragraphs: [
            "Il precedente sito indicava un’assicurazione di responsabilità civile professionale con Markel Insurance SE, contratto n. 33204.000/S17566926. Il venditore si impegna a mantenere le coperture necessarie per i danni personali, materiali e immateriali derivanti dall’esecuzione dell’ordine.",
            "Il biglietto è valido fino al giorno del servizio scelto.",
          ],
        },
        {
          title: "Annullamento e recesso",
          paragraphs: [
            "Il precedente sito indicava che le prenotazioni non sono annullabili né rimborsabili e che il diritto di recesso non si applica alle prenotazioni online di attività ricreative fornite in una data o in un periodo specifico.",
            "Rando d’Azur può annullare un servizio per condizioni meteorologiche o divieti di accesso alle aree naturali, quando necessario per la sicurezza dei partecipanti. In tal caso, l’acquirente ha diritto al rimborso integrale senza penali.",
          ],
        },
      ],
    },
    "privacy-policy": {
      title: "Informativa sulla privacy",
      introduction:
        "Questo riepilogo si basa sulla dichiarazione relativa alla protezione dei dati pubblicata con le precedenti condizioni di prenotazione. Non sostituisce un’informativa completa sui trattamenti attuali del sito.",
      sections: [
        {
          title: "Protezione dei dati",
          paragraphs: [
            "Maddy Polomeni si impegna a proteggere i dati personali dei clienti che utilizzano il servizio Regiondo e delle altre persone i cui dati vengono trattati, in conformità alle norme applicabili.",
            "I dati personali devono essere trattati in modo lecito, corretto e trasparente, raccolti per finalità determinate, limitati a quanto necessario, esatti e aggiornati.",
            "Devono essere adottate misure tecniche e organizzative adeguate per garantire un livello di sicurezza proporzionato ai rischi e proteggere i diritti e i dati degli interessati.",
          ],
        },
        {
          title: "Informazioni da completare",
          paragraphs: [
            "La fonte non specifica le finalità e le basi giuridiche attuali del sito, i tempi di conservazione, la procedura per esercitare i diritti né l’eventuale utilizzo di strumenti di analisi, marketing o servizi di terze parti. Questi elementi devono essere verificati e aggiunti prima che l’informativa possa considerarsi completa.",
          ],
        },
      ],
    },
    "cookie-policy": {
      title: "Politica sui cookie",
      introduction:
        "Sul precedente sito Rando d’Azur non era disponibile una politica sui cookie.",
      sections: [
        {
          title: "Politica da completare",
          paragraphs: [
            "I cookie e le tecnologie simili utilizzati da questo sito devono essere verificati prima di poterli identificare con precisione, illustrarne finalità e tempi di conservazione o spiegare come gestire le preferenze dei visitatori.",
            "Questa pagina è un segnaposto e non afferma che il sito utilizzi o non utilizzi cookie. Deve essere completata prima della pubblicazione.",
          ],
        },
      ],
    },
  },
};

export function getLegalDocument(locale: Locale, slug: LegalPageSlug) {
  return documents[locale][slug];
}
