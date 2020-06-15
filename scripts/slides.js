// One method per module
function slides() {
  return [
    'intro.md',
    'speaker-jef.md',
  ];
}

function formation() {
  return [
    //
    ...slides(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
