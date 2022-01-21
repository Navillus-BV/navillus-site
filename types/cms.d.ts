declare namespace CMS {
  type ContactIcon = "devto" | "email" | "github" | "rss" | "twitter";
  type FeatureIcon =
    | "architecture"
    | "blogging"
    | "money"
    | "shield"
    | "shopping"
    | "speedometer";
  type ToolIcon =
    | "11ty"
    | "astro"
    | "aws"
    | "azure"
    | "begin"
    | "cloudflare"
    | "contentful"
    | "datocms"
    | "digitalocean"
    | "firebase"
    | "forestry"
    | "gatsby"
    | "gridsome"
    | "hugo"
    | "jekyll"
    | "netlify"
    | "netlify-cms"
    | "nextjs"
    | "nuxtjs"
    | "prismic"
    | "render"
    | "sanity"
    | "sapper"
    | "scully"
    | "storyblok"
    | "strapi"
    | "sveltekit"
    | "vercel";
  type Icon = ContactIcon | ToolIcon;

  type Markdown = string;

  namespace Admin {
    interface SiteSettings {
      title: string;
      url: string;
      author: string;
      twitter_handle: string;
      twitter_card: "app" | "player" | "summary" | "summary_large_image";
    }

    interface Navigation {
      pages: [
        {
          title: string;
          page: string;
          id?: string;
        }
      ];

      legal: [
        {
          title: string;
          page: string;
          id?: string;
        }
      ];

      contact: [
        {
          title: string;
          url: string;
          icon: ContactIcon;
        }
      ];
    }
  }

  namespace Content {
    interface Author {
      first_name: string;
      last_name: string;
      url: string;
    }

    interface Page {
      permalink: string;
      title: string;
      description: string;
      image: string;
      published: boolean;
      date: string;
      last_modified_at?: string;
    }

    interface BlogPostPage extends Page {
      template: "post";
      author: string;
      tweet_id?: string;
      tags: string[];
    }

    interface HeroPage extends Page {
      template: "hero";
      hero: {
        title: string;
        subtitle: string;
        content: string;
        cta?: {
          text: string;
          url: string;
        };
      };
    }

    interface LegalPage extends Page {
      template: "legal";
    }

    interface UIBlock {
      title?: string;
      subtitle?: string;
      id?: string;
      alt: boolean;
    }

    interface BadgesBlockItem {
      description: string;
      icon: ToolIcon;
    }

    interface BadgesBlockGroup {
      title: string;
      items: [BadgesBlockItem];
    }

    interface BadgesBlock extends UIBlock {
      template: "badges-block";
      groups: [BadgesBlockGroup];
    }

    interface ContactBlock extends UIBlock {
      template: "contact-block";
      content: Markdown;
    }

    interface FeaturesBlockItem {
      title: string;
      icon: FeatureIcon;
      content: Markdown;
    }

    interface FeaturesBlock extends UIBlock {
      template: "features-block";
      items: [FeaturesBlockItem];
    }

    type Block = BadgesBlock | ContactBlock | FeaturesBlock;
  }
}
