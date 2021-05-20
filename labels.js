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
  githubMagenta: 'd876e3'
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
    "description": "Documentation",
    "color": colors.githubBlue,
    "name": "",
    "alias": []
  },
  {
    "description": "Security | Sécurité",
    "color": colors.githubPurple,
    "name": "",
    "alias": []
  },
  {
    "description": "Privacy | Vie privée",
    "color": colors.githubTeal,
    "name": "",
    "alias": []
  },
  {
    "description": "Wont fix | Ne résoudra pas",
    "color": colors.githubWhite,
    "name": "",
    "alias": []
  },
  {
    "description": "Accessiblity | Accessibilité",
    "color": colors.githubMagenta,
    "name": "",
    "alias": []
  },
];
