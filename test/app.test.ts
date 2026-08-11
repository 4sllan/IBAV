import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import App from '../app/app.vue';

vi.mock('vue-router');

const useRouteMock = vi.mocked(useRoute);
const useRouterMock = vi.mocked(useRouter);

describe('App.vue', () => {
  it('renders the component', () => {
    useRouteMock.mockReturnValue({ query: {} } as any);
    useRouterMock.mockReturnValue({ replace: vi.fn() } as any);

    const wrapper = mount(App, {
      global: {
        stubs: {
          UInput: true,
          USelect: true,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('shows the result after valid input', async () => {
    useRouteMock.mockReturnValue({ query: {} } as any);
    useRouterMock.mockReturnValue({ replace: vi.fn() } as any);

    const wrapper = mount(App, {
      global: {
        stubs: {
          UInput: true,
          USelect: true,
        },
      },
    });

    wrapper.vm.form = {
      fipeValue: 80000,
      year: 2022,
      mileage: 90000,
      condition: 'excelente',
    };

    await nextTick();

    const text = wrapper.text().replace(/\s+/g, ' ');

    expect(text).toContain('R$ 74.800,00');
    expect(text).toContain('940 pontos');
    expect(text).toContain('Excelente');
  });

  it('loads state from query params', async () => {
    useRouteMock.mockReturnValue({
      query: {
        fipe: '80000',
        year: '2022',
        km: '90000',
        condition: 'excelente',
      },
    } as any);
    useRouterMock.mockReturnValue({ replace: vi.fn() } as any);

    const wrapper = mount(App, {
      global: {
        stubs: {
          UInput: true,
          USelect: true,
        },
      },
    });

    await nextTick();

    const text = wrapper.text().replace(/\s+/g, ' ');

    expect(text).toContain('R$ 74.800,00');
    expect(text).toContain('940 pontos');
  });
});
