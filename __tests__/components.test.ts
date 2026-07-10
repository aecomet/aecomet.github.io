import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import AppHeader from '../src/components/AppHeader.vue';

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/profile', component: { template: '<div />' } }
    ]
  });
}

describe('AppHeader', () => {
  test('renders navigation links', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(AppHeader, {
      global: { plugins: [router] }
    });

    expect(wrapper.findAll('li').length).toBeGreaterThan(0);
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Profile');
  });
});
