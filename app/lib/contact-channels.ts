export const contactChannels = {
  primaryEmail: "bonjour@maddypolomeni.com",
  secondaryEmail: "bonjour@maddypolomeni.com",
  phoneDisplay: "+33 6 67 90 69 32",
  phoneInternational: "+33667906932",
  facebookUrl: "https://www.facebook.com/randodazur/",
  instagramUrl: "https://www.instagram.com/randodazur",
};

// Do not expose provisional social destinations as official profiles.
export function isPublishedSocialUrl(url: string) {
  return /^https:\/\//.test(url) && !url.includes("REPLACE-");
}
