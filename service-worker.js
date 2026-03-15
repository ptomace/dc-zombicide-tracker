self.addEventListener("install",event=>{
event.waitUntil(
caches.open("zombicide-cache").then(cache=>{
return cache.addAll([
"/",
"index.html",
"app.js",
"manifest.json"
])
})
)
})
