'use strict';

// Shared colour values
const colors = {
	githubRed: 'd73a4a',
  githubWhite: 'ffffff',
  githubBlue: '0075ca',
  githubGreen: '008672',
  githubPurple: '7057ff',
  githubYellow: 'e4e669',
  githubTeal: 'a2eeef',
  githubGris: 'cfd3d7',
  githubMagenta: 'd876e3',
  sreYellow: 'fbca04',
  sreGrey: 'ededed',
  srePink: '542539',
  sreLightGrey: 'A9C3DA',
  sreAqua: '006b75',
  sreOrange: 'd93f0b',
  sreGreyish: 'CCEAEF',
  sreViolet: '2F1B25',
  srePurple: '0E3EF3',
  sreBlue: '1d76db',
  srePurplish: '6D5F9C',
  sreRed: '9C022F',
  sreGreellow: 'c2e0c6',
  sreYellowish: 'fef2c0',
  sreRedish: 'EF4683',
  sreOrangish: 'CA8D8D',
  sreOrangey: 'f9d0c4',
  sreBlue: '194B9B'
};

// Create and export the labels
module.exports = [
  {
    "description": "",
    "color": colors.githubGreen,
    "name": "High Priority | Haute priorité",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubYellow,
    "name": "Medium Priority  | Priorité moyenne",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubGris,
    "name": "Low Priority | Faible priorité",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubRed,
    "name": "Bug | Bogue",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubBlue,
    "name": "Documentation",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubPurple,
    "name": "Security | Sécurité",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubTeal,
    "name": "Privacy | Vie privée",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubWhite,
    "name": "Wont fix | Ne résoudra pas",
    "alias": []
  },
  {
    "description": "",
    "color": colors.githubMagenta,
    "name": "Accessiblity | Accessibilité",
    "alias": []
  },
  {
    "description": "Service provider",
    "color": colors.sreYellow,
    "name": "AWS",
    "alias": []
  },
  {
    "description": "",
    "color": colors.sreGrey,
    "name": "Dependencies",
    "alias": []
  },
  {
    "description": "Documentation",
    "color": colors.srePink,
    "name": "Documentation",
    "alias": []
  },
  {
    "description": "Business Unit",
    "color": colors.sreLightGrey,
    "name": "Exposure Notificatios",
    "alias": []
  },
  {
    "description": "Service provider",
    "color": colors.sreAqua,
    "name": "GitHub",
    "alias": []
  },
  {
    "description": "Issues we are exploring",
    "color": colors.sreOrange,
    "name": "Investigation",
    "alias": []
  },
  {
    "description": "Things that make Internal SRE work",
    "color": colors.sreGreyish,
    "name": "Nuts and bolts",
    "alias": []
  },
  {
    "description": "Activity",
    "color": colors.sreViolet,
    "name": "On-call",
    "alias": []
  },
  {
    "description": "Business Unit",
    "color": colors.srePurple,
    "name": "Operations",
    "alias": []
  },
  {
    "description": "Service provider",
    "color": colors.sreBlue,
    "name": "OpsGenie",
    "alias": []
  },
  {
    "description": "Business Unit",
    "color": colors.srePurplish,
    "name": "Partnerships",
    "alias": []
  },
  {
    "description": "Business Unit",
    "color": colors.sreRed,
    "name": "Platform",
    "alias": []
  },
  {
    "description": "Learnings from post-mortems",
    "color": colors.sreGreellow,
    "name": "Post-mortem learning",
    "alias": []
  },
  {
    "description": "Actual post-mortem",
    "color": colors.sreYellowish,
    "name": "Post-mortem",
    "alias": []
  },
  {
    "description": "Phase",
    "color": colors.sreRedish,
    "name": "Production",
    "alias": []
  },
  {
    "description": "",
    "color": colors.sreGrey,
    "name": "Renovate",
    "alias": []
  },
  {
    "description": "Catch-all for low maintenance SaaS products",
    "color": colors.sreOrangish,
    "name": "SaaS",
    "alias": []
  },
  {
    "description": "Security Hub issue to be triaged",
    "color": colors.sreOrangey,
    "name": "Security Hub",
    "alias": []
  },
  {
    "description": "Issues related to the SRE bot",
    "color": colors.sreAqua,
    "name": "SRE Bot",
    "alias": []
  },
  {
    "description": "",
    "color": colors.sreGrey,
    "name": "sync",
    "alias": []
  },
  {
    "description": "Candidates for automation",
    "color": colors.sreGrey,
    "name": "Toil",
    "alias": []
  },
];
