export const googleReviewsSnapshot = {
  sourceUrl: "https://maps.app.goo.gl/D8w9fnAZPs47zPXbA?g_st=ac",
  checkedOn: "2026-10-07",
  rating: 4.9,
  reviewCount: 35,
  fiveStarCount: 33,
};

export type GoogleReview = {
  id: string;
  reviewer: string;
  excerpt: string;
  experience?: "hiking" | "mimosa" | "wild-plants" | "hiking-yoga";
};

export const featuredGoogleReviews: GoogleReview[] = [
  {
    id: "ban",
    reviewer: "Ban",
    excerpt: "A very nice, kind and competitive guide.",
  },
  {
    id: "pierre-cathy",
    reviewer: "Pierre & Cathy",
    experience: "mimosa",
    excerpt:
      "A wonderful experience with Maddy exploring the Mimosa Trail in the Estérel mountains. She's an attentive guide, and her commentary clearly shows her love for this beautiful region.",
  },
  {
    id: "aurelie",
    reviewer: "Aurélie",
    experience: "hiking",
    excerpt:
      "I had the pleasure of participating in a guided hike with Maddy, and I highly recommend it! Her infectious good humor immediately put the group at ease and created a warm and friendly atmosphere.",
  },
  {
    id: "florence",
    reviewer: "Florence",
    experience: "wild-plants",
    excerpt:
      "Maddy is friendly and knowledgeable. She knows the Esterel region perfectly and will help you discover sublime landscapes and the plants of each season with educational methods for adults and children.",
  },
  {
    id: "carole",
    reviewer: "Carole",
    experience: "hiking-yoga",
    excerpt:
      "A superb weekend hiking/yoga experience with Maddy. Her creative routes and contagious energy made the adventure unforgettable. I highly recommend it!",
  },
  {
    id: "jean-robert",
    reviewer: "Jean-Robert",
    experience: "hiking",
    excerpt:
      "Friendly atmosphere, sharing. Knowledge of the area. I recommend the Rando d'Azur outings with Mady. Great walks and you'll never get tired or worn out. Pure enjoyment.",
  },
  {
    id: "linda",
    reviewer: "Linda",
    experience: "hiking",
    excerpt:
      "Maddy has rekindled my love of hiking. Cheerful, attentive, and professional, I recommend her 1000%! Thank you, Maddy, for these wonderful hikes!",
  },
  {
    id: "aude",
    reviewer: "Aude",
    experience: "hiking",
    excerpt:
      "Hikes with magnificent scenery and a friendly atmosphere. So, we naturally decided to join this association. Thank you, Maddy, for your kindness, your explanations, and your good humor.",
  },
  {
    id: "audrey",
    reviewer: "Audrey",
    experience: "hiking",
    excerpt:
      "Welcoming, smiling, and interesting, Maddy is a pro in her field, always motivating you and helping you discover beautiful hikes!",
  },
  {
    id: "sandrine",
    reviewer: "Sandrine",
    experience: "wild-plants",
    excerpt:
      "Wonderful experiences with Maddy, both in muscle-awakening sessions and on hikes discovering plants. Thank you for these joyful moments!",
  },
];
