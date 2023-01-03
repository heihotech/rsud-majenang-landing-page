import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _624ff97c = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _6233ca7a = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _62179b78 = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _32f06f7c = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _206dc1b3 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _a20fd72e = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _1033a4b4 = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _5a79c6a1 = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _63492688 = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _fd25361a = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _fde0096c = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _12074256 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _44e02bfa = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _6d40be44 = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _255fd09a = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _696f07a3 = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _c974b610 = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _85ac8efa = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _260bf927 = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _38650d4c = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _2bedacd1 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _194c9bc6 = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _318982a8 = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _415b0e05 = () => interopDefault(import('../pages/home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _471f4481 = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _3132157c = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _380ddfba = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _d67d1d6e = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _63ab845d = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _d50ff276 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _942f42f4 = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _3ae9c7ee = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _13a19234 = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _dc39f0d6 = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _528e7fea = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _af7697be = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _2b2d9d9f = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _702b0d40 = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _18e7529c = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _18f56a1d = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _c2c003b0 = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _18c5a94b = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _b59a4654 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _136d553e = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _2a1f4aa7 = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _35a0dab6 = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _2269c356 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _4c528036 = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _351a2b2b = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _60bffa1a = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _fa1d81a6 = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _947d7c10 = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _2251ed7c = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _5e288de7 = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _d2cd9dbc = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _1554a702 = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _65214b66 = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _1e568a08 = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _6a065f2b = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _075607f4 = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _65399286 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _7ca15456 = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _5ddb8b51 = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _34435934 = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _4be1d364 = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _f9a177ba = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _c4cd2a18 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _2a61c7e4 = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _a3edf804 = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _9c3954aa = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _0fa2f8a8 = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _33a6e186 = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _04e41df4 = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _0c746337 = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _466f1dd9 = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _538f7fed = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _93a52e76 = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _08bcdcc2 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _08caf443 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _5a194fe0 = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _30723ee9 = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _39c19a38 = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _0c2fdba6 = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _34bfd45b = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _e5dd8116 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _72aa5944 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _624ff97c,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _6233ca7a,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _62179b78,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _32f06f7c,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _206dc1b3,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _a20fd72e,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _1033a4b4,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _5a79c6a1,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _63492688,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _fd25361a,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _fde0096c,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _12074256,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _44e02bfa,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _6d40be44,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _255fd09a,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _696f07a3,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _c974b610,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _85ac8efa,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _260bf927,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _38650d4c,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _2bedacd1,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _194c9bc6,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _318982a8,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _415b0e05,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _471f4481,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _3132157c,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _380ddfba,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _d67d1d6e,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _63ab845d,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _d50ff276,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _942f42f4,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _3ae9c7ee,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _13a19234,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _dc39f0d6,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _528e7fea,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _af7697be,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _2b2d9d9f,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _702b0d40,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _18e7529c,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _18f56a1d,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _c2c003b0,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _18c5a94b,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _b59a4654,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _136d553e,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _2a1f4aa7,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _35a0dab6,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _2269c356,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _4c528036,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _351a2b2b,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _60bffa1a,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _fa1d81a6,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _947d7c10,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _2251ed7c,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _5e288de7,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _d2cd9dbc,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _1554a702,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _65214b66,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _1e568a08,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _6a065f2b,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _075607f4,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _65399286,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _7ca15456,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _5ddb8b51,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _34435934,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _4be1d364,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _f9a177ba,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _c4cd2a18,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _2a61c7e4,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _a3edf804,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _9c3954aa,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _0fa2f8a8,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _33a6e186,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _04e41df4,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _0c746337,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _466f1dd9,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _538f7fed,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _93a52e76,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _08bcdcc2,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _08caf443,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _5a194fe0,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _30723ee9,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _39c19a38,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _0c2fdba6,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _34bfd45b,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _e5dd8116,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _72aa5944,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
