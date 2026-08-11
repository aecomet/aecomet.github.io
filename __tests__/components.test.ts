import { describe, test, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import AppHeader from '../src/components/AppHeader.vue';
import { i18n, setLocale } from '../src/plugins/i18n';

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/profile', component: { template: '<div />' } },
      { path: '/career', component: { template: '<div />' } },
      { path: '/projects', component: { template: '<div />' } },
      { path: '/contact', component: { template: '<div />' } }
    ]
  });
}

afterEach(() => {
  setLocale('ja');
});

describe('AppHeader', () => {
  test('renders navigation links', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(AppHeader, {
      global: { plugins: [router, i18n] }
    });

    expect(wrapper.findAll('li').length).toBeGreaterThan(0);
    expect(wrapper.text()).toContain('ホーム');
    expect(wrapper.text()).toContain('プロフィール');
  });

  test('toggles language between ja and en', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(AppHeader, {
      global: { plugins: [router, i18n] }
    });

    expect(wrapper.text()).toContain('ホーム');
    expect(wrapper.text()).not.toContain('Home');

    // Open language dropdown
    await wrapper.find('.lang-trigger').trigger('click');
    // Select English
    await wrapper.find('[role="option"]:nth-child(2)').trigger('click');

    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Profile');
    expect(wrapper.text()).toContain('English');
    expect(wrapper.text()).not.toContain('ホーム');
  });
});
