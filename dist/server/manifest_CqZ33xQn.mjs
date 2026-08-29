import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_V5rFe8Dl.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BaHuBiS3.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Leonid/Desktop/Floristic/","cacheDir":"file:///C:/Users/Leonid/Desktop/Floristic/node_modules/.astro/","outDir":"file:///C:/Users/Leonid/Desktop/Floristic/dist/","srcDir":"file:///C:/Users/Leonid/Desktop/Floristic/src/","publicDir":"file:///C:/Users/Leonid/Desktop/Floristic/public/","buildClientDir":"file:///C:/Users/Leonid/Desktop/Floristic/dist/client/","buildServerDir":"file:///C:/Users/Leonid/Desktop/Floristic/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/booking","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/booking\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"booking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/booking.ts","pathname":"/api/booking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/order","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/order\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"order","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/order.ts","pathname":"/api/order","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/catalog","isIndex":false,"type":"page","pattern":"^\\/catalog\\/?$","segments":[[{"content":"catalog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalog.astro","pathname":"/catalog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/delivery","isIndex":false,"type":"page","pattern":"^\\/delivery\\/?$","segments":[[{"content":"delivery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/delivery.astro","pathname":"/delivery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/order","isIndex":false,"type":"page","pattern":"^\\/order\\/?$","segments":[[{"content":"order","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/order.astro","pathname":"/order","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/prostir","isIndex":false,"type":"page","pattern":"^\\/prostir\\/?$","segments":[[{"content":"prostir","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prostir.astro","pathname":"/prostir","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DP5B3t90.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Leonid/Desktop/Floristic/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/catalog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/catalog@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/delivery.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/delivery@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/order.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/order@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Leonid/Desktop/Floristic/src/pages/prostir.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/prostir@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/booking@_@ts":"pages/api/booking.astro.mjs","\u0000@astro-page:src/pages/api/order@_@ts":"pages/api/order.astro.mjs","\u0000@astro-page:src/pages/catalog@_@astro":"pages/catalog.astro.mjs","\u0000@astro-page:src/pages/delivery@_@astro":"pages/delivery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/order@_@astro":"pages/order.astro.mjs","\u0000@astro-page:src/pages/prostir@_@astro":"pages/prostir.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CqZ33xQn.mjs","C:/Users/Leonid/Desktop/Floristic/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_8Tz9M-r1.mjs","C:/Users/Leonid/Desktop/Floristic/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/Leonid/Desktop/Floristic/src/components/BookingModal":"_astro/BookingModal.CCE9cnm6.js","C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton":"_astro/BookingTriggerButton.D8qFL3m4.js","C:/Users/Leonid/Desktop/Floristic/src/components/CartDrawer":"_astro/CartDrawer.DDvZ7Zg-.js","C:/Users/Leonid/Desktop/Floristic/src/components/CatalogSection":"_astro/CatalogSection.DOeJLjcJ.js","C:/Users/Leonid/Desktop/Floristic/src/components/CheckoutForm":"_astro/CheckoutForm.n2YyDbWO.js","C:/Users/Leonid/Desktop/Floristic/src/components/FloatingBookingButton":"_astro/FloatingBookingButton.BtyhhAYJ.js","C:/Users/Leonid/Desktop/Floristic/src/components/FloristConsultation":"_astro/FloristConsultation.lCATi1cA.js","C:/Users/Leonid/Desktop/Floristic/src/components/Hero":"_astro/Hero.C_tedfQ6.js","C:/Users/Leonid/Desktop/Floristic/src/components/InstagramGrid":"_astro/InstagramGrid.BNyohyLx.js","C:/Users/Leonid/Desktop/Floristic/src/components/ProductModal":"_astro/ProductModal.W9n4jePh.js","C:/Users/Leonid/Desktop/Floristic/src/components/QuickOrderModal":"_astro/QuickOrderModal.tGT3iBE1.js","C:/Users/Leonid/Desktop/Floristic/src/components/Toast":"_astro/Toast.B2IvJeh6.js","C:/Users/Leonid/Desktop/Floristic/src/components/WorkshopFeatures":"_astro/WorkshopFeatures.DBMxEA8_.js","@astrojs/react/client.js":"_astro/client.NXU-5Pd6.js","C:/Users/Leonid/Desktop/Floristic/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","C:/Users/Leonid/Desktop/Floristic/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.wxVIoHfv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DP5B3t90.css","/_astro/arrow-right.DvGovojl.js","/_astro/BookingModal.CCE9cnm6.js","/_astro/BookingTriggerButton.D8qFL3m4.js","/_astro/camera.C6lu0RCF.js","/_astro/CartDrawer.DDvZ7Zg-.js","/_astro/cartStore.DqdzGEOH.js","/_astro/CatalogSection.DOeJLjcJ.js","/_astro/CheckoutForm.n2YyDbWO.js","/_astro/client.NXU-5Pd6.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/_astro/createLucideIcon.BS11JJ-r.js","/_astro/CustomSelect.-4Qu98rd.js","/_astro/FloatingBookingButton.BtyhhAYJ.js","/_astro/FloristConsultation.lCATi1cA.js","/_astro/flower-2.CAdS5dvY.js","/_astro/Header.astro_astro_type_script_index_0_lang.wxVIoHfv.js","/_astro/Hero.C_tedfQ6.js","/_astro/index.Cc2R3HFC.js","/_astro/index.D-Pb_x6I.js","/_astro/index.PB5IVwgV.js","/_astro/InstagramGrid.BNyohyLx.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/ProductModal.W9n4jePh.js","/_astro/proxy.D8Y5ISfC.js","/_astro/QuickOrderModal.tGT3iBE1.js","/_astro/shopping-bag.Bh2ozYZ4.js","/_astro/Toast.B2IvJeh6.js","/_astro/WorkshopFeatures.DBMxEA8_.js","/_astro/x.BlBBx2Vi.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"+QDFBWJPkdFDDJQ6VcmId9VEq5WjR124Fa3IXfWFmg0=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\Leonid\\Desktop\\Floristic\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
