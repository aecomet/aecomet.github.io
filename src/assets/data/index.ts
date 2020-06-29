import ProfileJSON from './Profile.json';
import SkillJSON from './Skill.json';

type ProfileJsonState = {
  header: string;
  body: {
    logo: string;
    name: string;
    note: string;
    brith: number,
    gender: string,
    histories: string[],
    vision: {
      work:string[],
      wantoto: string[],
      contribution: string[]
    },
    email: {
      prefix: string;
      suffix: string;
    };
    social_links: {
      name: string;
      url: string;
    }[];
  };
};

type SkillJsonState = {
  header: string;
  body: {
    skills: {
      name: string;
      exp: number;
      note: string;
    }[];
    products: {
      name: string;
      logo: string;
      desc: string;
      github: string;
      langs: string[];
    }[];
  };
};

export { ProfileJSON as ProfileJsonState, SkillJSON as SkillJsonState };
