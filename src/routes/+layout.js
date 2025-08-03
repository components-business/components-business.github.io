import homePageData from '../lib/content/pages/home.json';
import aboutPageData from '../lib/content/pages/about.json';
import contactPageData from '../lib/content/pages/contact.json';
import pricingPageData from '../lib/content/pages/pricing.json';

export const prerender = true;

export async function load() {
  return {
    homePageData,
    aboutPageData,
    contactPageData,
    pricingPageData
  };
}