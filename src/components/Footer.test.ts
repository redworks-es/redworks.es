import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Footer from './Footer.astro';

describe('Footer', () => {
  it('renders address, phone and the three legal links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);

    expect(html).toContain('Calle José Echegaray, 14');
    expect(html).toContain('Edificio A2, planta 2, nave 8');
    expect(html).toContain('/accesibilidad/');
    expect(html).toContain('/politica-de-privacidad/');
    expect(html).toContain('/terminos-y-condiciones/');
    expect(html).toMatch(/Copyright \d{4} Redworks Solutions/);
  });

  it('renders French labels and /fr-prefixed legal links on a /fr/ request', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer, {
      request: new Request('https://redworks.es/fr/'),
    });

    expect(html).toContain('Adresse');
    expect(html).toContain('/fr/accesibilidad/');
    expect(html).toContain('/fr/politica-de-privacidad/');
    expect(html).toContain('/fr/terminos-y-condiciones/');
    expect(html).toMatch(/Copyright \d{4} Redworks Solutions/);
    expect(html).toContain('Tous droits réservés.');
  });
});
