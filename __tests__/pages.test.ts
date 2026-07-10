import { describe, test, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import NotFoundPage from '../src/pages/NotFoundPage.vue';
import UserCareer from '../src/pages/UserCareer.vue';
import UserContact from '../src/pages/UserContact.vue';
import UserProfile from '../src/pages/UserProfile.vue';

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/profile', component: { template: '<div />' } },
      { path: '/career', component: { template: '<div />' } },
      { path: '/contact', component: { template: '<div />' } }
    ]
  });
}

const vuetifyStubs = {
  'v-card-text': { template: '<div><slot /></div>' },
  'v-timeline': { template: '<div class="v-timeline"><slot /></div>' },
  'v-timeline-item': {
    props: ['size'],
    template: '<div class="v-timeline-item"><slot name="opposite" /><slot /></div>'
  },
  'v-icon': { template: '<span class="v-icon"><slot /></span>', props: ['icon'] },
  'v-img': { template: '<img />', props: ['src', 'alt', 'height', 'width', 'cover'] },
  'v-btn': {
    template: '<a :href="href" :target="target" :rel="rel"><slot /></a>',
    props: ['variant', 'class', 'href', 'target', 'rel', 'color']
  },
  'v-chip': { template: '<span class="v-chip"><slot /></span>', props: ['color', 'variant'] }
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe('HomePage', () => {
  test('renders hero section with title and subtitle', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(HomePage, {
      global: { plugins: [router] }
    });

    expect(wrapper.find('.hero').exists()).toBe(true);
    expect(wrapper.find('.hero-badge').text()).toBe('Portfolio');
    expect(wrapper.find('.accent').text()).toBe('こめっと');
    expect(wrapper.find('.hero-sub').text()).toBe('Software Engineer');
  });

  test('renders CTA buttons', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(HomePage, {
      global: { plugins: [router] }
    });

    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].text()).toBe('プロフィール');
    expect(buttons[1].text()).toBe('経歴を見る');
  });

  test('navigates to /profile when profile button is clicked', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(HomePage, {
      global: { plugins: [router] }
    });

    const pushSpy = vi.spyOn(router, 'push');
    await wrapper.find('.btn-primary').trigger('click');
    expect(pushSpy).toHaveBeenCalledWith('/profile');
  });

  test('navigates to /career when career button is clicked', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(HomePage, {
      global: { plugins: [router] }
    });

    const pushSpy = vi.spyOn(router, 'push');
    await wrapper.find('.btn-ghost').trigger('click');
    expect(pushSpy).toHaveBeenCalledWith('/career');
  });
});

describe('NotFoundPage', () => {
  test('renders 404 message', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(NotFoundPage, {
      global: { plugins: [router] }
    });

    expect(wrapper.find('#not-found').exists()).toBe(true);
    expect(wrapper.text()).toContain('ページが見つかりません');
    expect(wrapper.text()).toContain('指定されたURLは存在しないか、移動された可能性があります。');
  });

  test('renders back to home button', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(NotFoundPage, {
      global: { plugins: [router] }
    });

    const button = wrapper.find('.btn-primary');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('トップページへ戻る');
  });
});

describe('UserCareer', () => {
  test('renders career section header', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserCareer, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.find('#contact').exists()).toBe(true);
    expect(wrapper.text()).toContain('Career');
    expect(wrapper.text()).toContain('職務経歴について');
  });

  test('renders all career timeline items', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserCareer, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    const items = wrapper.findAll('.v-timeline-item');
    expect(items.length).toBe(11);

    expect(wrapper.text()).toContain('高等学校卒業');
    expect(wrapper.text()).toContain('大学入学');
    expect(wrapper.text()).toContain('企業に入社');
    expect(wrapper.text()).toContain('転職して新しい環境での挑戦を開始');
  });

  test('renders career notes', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserCareer, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.text()).toContain('情報工学科');
    expect(wrapper.text()).toContain('ソーシャルゲーム開発');
  });
});

describe('UserContact', () => {
  test('renders contact section', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserContact, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.find('#contact').exists()).toBe(true);
    expect(wrapper.text()).toContain('Contact');
  });

  test('renders email information', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserContact, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.text()).toContain('Email');
    expect(wrapper.text()).toContain('engineer.t.o.0823@***');
    expect(wrapper.text()).toContain('gmail.com');
  });
});

describe('UserProfile', () => {
  test('renders profile section', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserProfile, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.find('#profile').exists()).toBe(true);
    expect(wrapper.text()).toContain('Profile');
    expect(wrapper.text()).toContain('Comet / こめっと');
    expect(wrapper.text()).toContain('Software Engineer');
  });

  test('renders external links', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserProfile, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    const links = wrapper.findAll('a');
    const hrefs = links.map((l) => l.attributes('href'));
    expect(hrefs).toContain('https://github.com/aecomet');
    expect(hrefs).toContain('https://zenn.dev/aecomet');
    expect(hrefs).toContain('https://atcoder.jp/users/ae_hiyoko3');
  });

  test('renders experience chips', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserProfile, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.text()).toContain('技術選定');
    expect(wrapper.text()).toContain('システムアーキテクト');
    expect(wrapper.text()).toContain('チームリーダー');
    expect(wrapper.text()).toContain('障害対応');
    expect(wrapper.text()).toContain('実装・保守');
  });

  test('renders certification chips', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserProfile, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    expect(wrapper.text()).toContain('基本情報技術者試験');
    expect(wrapper.text()).toContain('応用情報技術者試験');
    expect(wrapper.text()).toContain('情報処理安全確保支援士試験');
    expect(wrapper.text()).toContain('データベーススペシャリスト試験');
    expect(wrapper.text()).toContain('システムアーキテクト試験');
    expect(wrapper.text()).toContain('英検2級');
  });

  test('external links have correct attributes', async () => {
    const router = createTestRouter();
    router.push('/');
    await router.isReady();

    const wrapper = mount(UserProfile, {
      global: { plugins: [router], stubs: vuetifyStubs }
    });

    const links = wrapper.findAll('a');
    links.forEach((link) => {
      expect(link.attributes('target')).toBe('_blank');
      expect(link.attributes('rel')).toBe('noopener');
    });
  });
});
