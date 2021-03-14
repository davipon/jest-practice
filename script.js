const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
];

export const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('soup', googleDatabase));
