// Service worker minimal : ne fait AUCUNE mise en cache hors-ligne (choix assumé, voir tutoriel).
// Sa seule raison d'être est de satisfaire le critère technique de Chrome pour proposer
// un bouton d'installation personnalisé ("beforeinstallprompt"). Toutes les requêtes
// passent simplement par le réseau, comme si ce fichier n'existait pas.
self.addEventListener("install", function(event){
  self.skipWaiting();
});
self.addEventListener("activate", function(event){
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function(event){
  event.respondWith(fetch(event.request));
});
