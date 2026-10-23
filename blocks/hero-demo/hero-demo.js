export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length < 4) {
      return;
    }

    const [image, title, description, action] = cells;

    row.classList.add('service-card');

    image.classList.add('service-card-image');
    title.classList.add('service-card-title');
    description.classList.add('service-card-description');
    action.classList.add('service-card-action');

    const link = action.querySelector('a');

    if (link) {
      link.classList.add('service-card-link');
    }
  });
}