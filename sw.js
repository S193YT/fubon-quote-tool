/* Kill switch: site moved to jarvis-yt.github.io. Clear caches, unregister, reload open pages so they hit the redirect. */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'})) { try{ c.navigate(c.url); }catch(_){} }
})()));
