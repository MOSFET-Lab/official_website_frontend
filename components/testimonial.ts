export const testimonials = [
  "pasindu-bimsara.png",
  "rusith-nirmana.png",
  "isuru-sandaruwan.png",
  "chanuka-nayanajith.png",
  "dilshan-narasinghe.png",
  "maduka-palinda.png",
  "rashan-peiris.png",
  "ishan-rajapaksha.png",
  "ushan-nilindu.png",
];

export function getReviewImage(filename: string): string {
  return `/review/${filename}`;
}
