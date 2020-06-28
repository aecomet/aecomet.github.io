import { LayoutComponent } from './layouts';
import { ProfileComponent } from './profile';
import { SkillComponent } from './skill/SkillComponent';

/* === App Event === */
document.addEventListener('DOMContentLoaded', (e) => {
  // view component
  const skill = new SkillComponent();

  // render view
  LayoutComponent.init();
  ProfileComponent.init();
  skill.render();
});
