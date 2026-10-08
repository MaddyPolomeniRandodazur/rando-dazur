# Brevo newsletter integration

## Chosen method

The existing newsletter component posts natively to the public official Brevo form action in `app/lib/newsletter.ts`. No AJAX/CORS dependency, intermediary proxy, iframe, provider CSS/fonts/script, API key or environment variable is needed. Existing design, email field and button are reused; scoped CSS styles the mandatory consent checkbox and small provider/double-confirmation notice. English and French site copy is retained.

Submitted fields: `EMAIL`, mandatory unchecked `OPT_IN=1`, empty `email_address_check`, `locale=fr`, `html_type=simple`. The browser leaves the website to display Brevo's official response. Brevo validation/anti-spam mechanisms remain authoritative. The public form GET was inspected: matching endpoint and fields, no CAPTCHA or additional token observed. If the form is changed to require a CAPTCHA or other field later, re-export its simple HTML and review the integration.

A contact-creation API was rejected: it would not establish that the existing “Form submitted” trigger runs. A server proxy would add anti-spam, response parsing and reliability risks without a demonstrated need. The site never creates contacts via REST, specifies list #30 or bypasses confirmation. Newsletter #30 and the active 7-day automation are owner-confirmed configuration, not independently inspected through the Brevo dashboard.

## Honest status handling

Local English messages cover invalid email, missing consent, blocked anti-spam submission and handoff to Brevo. Duplicate clicks are blocked during handoff. Native validation/POST also works without JavaScript. Browser back/forward cache return re-enables the form.

The website does not display “You are subscribed” or “Request received” before a verified provider response. A valid submission navigates to Brevo. Receipt, rejection and network failures are therefore displayed by Brevo or the browser, not inferred by the website. A custom English success/error panel on the original website cannot truthfully be driven by this cross-origin native response.

The existing official form uses `locale=fr`, preserved as supplied. For an English response, review the form's Brevo success/error text and settings; do not change the automation trigger or assume changing a locale field translates the existing authored form.

Suggested English provider messages:
- Received: “Your request has been received. Please check your inbox and spam folder and click the confirmation link within 7 days. Your newsletter subscription starts only after confirmation.”
- Rejected: “We could not process your request. Please try again or contact Maddy.”
- Confirmed (only after the confirmation click): “Your email address has been confirmed. Welcome to the Rando d’Azur newsletter.”

## GDPR / tracking

The affirmative newsletter consent is separate from optional website analytics consent. Privacy/cookie policies explain Brevo processing, confirmation and unsubscribe rights. No Brevo resources load before submitting; the external response page follows Brevo's own policy. No email or consent values enter website analytics events or logs. No marketing pixel or new event tracking is added. Newsletter data is submitted directly to the provider over HTTPS, not through a Next.js server route.

A 7-day workflow wait is not proof that unconfirmed contact records are deleted after 7 days. Review actual Brevo retention/suppression settings. Disable optional open/click marketing tracking if unnecessary; the essential confirmation action must still work. No Brevo settings were changed by this implementation.

## Verification and owner checklist

`node scripts/verify-newsletter.mjs http://localhost:3042` verifies EN/FR, widths 320/375/390/768/1440, unchecked required consent, privacy links, no provider request before submit, exact native POST fields, JavaScript and no-JavaScript paths. The POST is intercepted with a mock response: it does not create a contact or send an email. Validation results: production build/TypeScript and lint pass; 20 responsive checks, 4 intercepted native POSTs with/without JavaScript, 32 legal-page checks and 50 canonical SEO routes pass. No real contact was created and no email was sent.

No authenticated Brevo dashboard/mailbox access is available. Full email delivery/automation/list membership, email legal footer and unsubscribe behavior are not independently verified. Use a controlled test address and:

1. Submit the production form with consent, check the provider's real response and receive the confirmation email.
2. Before clicking, confirm that the contact has not joined Newsletter #30 and no newsletter campaign can target it as confirmed.
3. Click within 7 days. Verify the existing “Double Opt-in Newsletter Rando d'Azur” automation ran and the contact joined Newsletter #30 only afterward.
4. Verify confirmation and newsletter email identity: Rando d’Azur / Maddy Polomeni, official contact details, privacy/legal links, and a functioning unsubscribe option where required. Use Brevo's official unsubscribe block for newsletters, not an invented template variable.
5. Test unsubscribe and repeated sign-up with the same address: no duplicate contacts, no unsolicited resubscription and withdrawal respected. Test expiry/no-click behavior using Brevo's workflow testing tools; do not claim expiry was tested by a short smoke test.
6. Review English provider feedback, sender-domain authentication/deliverability, consent records, retention settings and optional email tracking. Do not change the existing automation unnecessarily.

Only site changes are deployed through GitHub/Vercel. There are no secret values or environment variables to add in Vercel.
