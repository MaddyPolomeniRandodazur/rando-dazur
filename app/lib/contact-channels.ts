export const contactChannels = {
  primaryEmail: "info@randodazur.com",
  secondaryEmail: "bonjour@maddypolomeni.com",
  phoneDisplay: "+33 6 67 90 69 32",
  phoneInternational: "+33667906932",
  facebookUrl: "https://www.facebook.com/REPLACE-WITH-RANDO-DAZUR",
  instagramUrl: "https://www.instagram.com/REPLACE-WITH-RANDO-DAZUR",
};

// Do not expose provisional social destinations as official profiles.
export function isPublishedSocialUrl(url: string) {
  return /^https:\/\//.test(url) && !url.includes("REPLACE-");
}
