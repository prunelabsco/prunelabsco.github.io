// Everything a link on the hub points to. null = not set up yet, the button stays hidden.
export const site = {
  name: "Prune Labs",
  tagline: "Prune the noise. Keep what works.",
  youtube: "https://www.youtube.com/@prunelabsco",
  instagram: "https://www.instagram.com/prunelabsco/",
  github: "https://github.com/prunelabsco",
  email: "prunelabsco@gmail.com",
  // Support page. Tips go through SociaBuzz, no PayPal account needed.
  support: "https://sociabuzz.com/prunelabs/tribe" as string | null,
  // Tally form for the Prism waitlist. Until it exists, the waitlist falls back to email.
  waitlistForm: "https://tally.so/r/X5rxBz" as string | null,
  // Long-form on the home page. The first one plays inline, the rest are links. Newest first.
  videos: [
    { id: "yAjMdsWBL_g", title: "One Plugin Stopped Claude From Coding 7 Out of 9 Times", meta: "Latest test · 6 min" },
    { id: "iGF4tP7DhZE", title: "I Tested 3 CLAUDE.md Setups 9 Times", meta: "Test · 7 min" },
  ],
};
