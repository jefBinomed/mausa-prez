// One method per module
function slides() {
  return [
    'intro.md',
    'speaker-jef.md',
    'speaker-benoit.md',
    '00-intro.md',
    '01-histoire.md',
    '02-pwa.md',
    '03-automl.md',
    '04-futur.md',
    '05-conclusion.md',
  ];
}

function formation() {
  return [
    //
    ...slides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
