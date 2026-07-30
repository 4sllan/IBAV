import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../app/app.vue';

describe('App.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          NuxtRouteAnnouncer: true,
          NuxtWelcome: true,
        },
      },
    });
    
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a div element', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          NuxtRouteAnnouncer: true,
          NuxtWelcome: true,
        },
      },
    });
    
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
