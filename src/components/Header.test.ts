import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Header from './Header.astro';

describe('Header', () => {
  it('renders the phone number and all 12 service links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header);

    expect(html).toContain('tel:+34910527499');
    expect(html).toContain('910 52 74 99');
    expect(html).toContain('/electricidad/');
    expect(html).toContain('/instalacion-electrica-de-baja-tension/');
    expect(html).toContain('Quiénes somos');
    expect(html).toContain('Contacto');
  });

  it('renders French labels and /fr-prefixed links on a /fr/ request', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header, {
      request: new Request('https://redworks.es/fr/'),
    });

    expect(html).toContain('tel:+34910527499');
    expect(html).toContain('/fr/electricidad/');
    expect(html).toContain('/fr/instalacion-electrica-de-baja-tension/');
    expect(html).toContain('Qui sommes-nous');
    expect(html).toContain('Contact');
  });
});
