import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "MISTasks",
  EMAIL: "contact.us.mist@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "MIST Blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics we will discuss.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/orgs/ManipalInformationSecurityTeam/",
  },
];
