# Configuration Google Tag Manager avec Consent Mode v2

## 1. Créer un compte GTM (si pas déjà fait)

1. Allez sur [https://tagmanager.google.com](https://tagmanager.google.com)
2. Cliquez sur "Créer un compte"
3. **Nom du compte** : "Ghota Tech Solutions"
4. **Pays** : France
5. **Nom du conteneur** : "ghotatechsolutions.com"
6. **Plateforme cible** : Web
7. Acceptez les conditions d'utilisation

## 2. Activer la vue d'ensemble du consentement

1. Dans GTM, va dans **Admin** (en bas à gauche)
2. Clique sur **Container Settings** (Paramètres du conteneur)
3. Active **"Activer la vue d'ensemble du consentement (BETA)"**
4. Clique sur **Enregistrer**

## 3. Créer la balise Google Tag (GA4)

1. Va dans **Balises** → **Nouveau**
2. **Nom de la balise** : "Google Tag - GA4"
3. **Configuration de la balise** :
   - Clique sur "Configuration de la balise"
   - Type : **Google Tag**
   - Tag ID : Ton ID GA4 (format `G-XXXXXXXXXX`)

4. **Paramètres de consentement** (dans la configuration de la balise) :
   - Descends jusqu'à "Paramètres de consentement"
   - Sélectionne : **"No additional consent required"**
   - Cela permet à GTM de respecter automatiquement le consentement défini par le code

5. **Déclencheur** :
   - Clique sur "Déclenchement"
   - Sélectionne **"Initialization - All Pages"** (PAS "All Pages")
   - C'est important : ce déclencheur se lance avant tout, permettant de lire le consent default

6. **Enregistre** la balise

## 4. Vérifier les paramètres de consentement de la balise

1. Va dans **Consentement** (menu de gauche, visible après activation à l'étape 2)
2. Tu devrais voir ta balise GA4 listée
3. Vérifie que les types de consentement requis sont :
   - `analytics_storage`
   - `ad_storage` (si tu utilises les fonctionnalités publicitaires)

## 5. Publier le conteneur

1. Clique sur **Envoyer** (en haut à droite)
2. **Nom de la version** : "Consent Mode v2 - Configuration initiale"
3. Clique sur **Publier**

## 6. Tester avec le mode Aperçu

1. Dans GTM, clique sur **Aperçu** (en haut à droite)
2. Entre l'URL de ton site
3. Navigue sur ton site

### Ce que tu dois vérifier :

**Au chargement initial (avant clic sur le banner) :**
- Dans l'onglet "Consent" du Tag Assistant, tu dois voir :
  - `analytics_storage`: `denied`
  - `ad_storage`: `denied`
  - `ad_user_data`: `denied`
  - `ad_personalization`: `denied`

**Après clic sur "Accepter" :**
- Les valeurs passent à `granted`
- Ta balise GA4 doit se déclencher

**Après clic sur "Refuser" :**
- Les valeurs restent à `denied`
- Ta balise GA4 ne doit PAS envoyer de données analytics

## 7. Vérifier dans Google Analytics

1. Va dans [Google Analytics](https://analytics.google.com)
2. Ouvre ta propriété GA4
3. Va dans **Rapports** → **Temps réel**
4. Visite ton site et accepte les cookies
5. Tu devrais voir ta visite apparaître dans le rapport temps réel

## Dépannage

### Le consentement ne fonctionne pas ?

1. **Vérifie la console du navigateur (F12)** :
   - Tape `dataLayer` et cherche les entrées `consent`
   - Tu dois voir `gtag('consent', 'default', ...)` au début

2. **Vérifie le localStorage** :
   - Tape `localStorage.getItem('cookie_consent')`
   - Doit retourner `null`, `'granted'` ou `'denied'`

3. **Réinitialise pour tester** :
   - `localStorage.removeItem('cookie_consent')`
   - Recharge la page

### La balise GA4 ne se déclenche pas ?

1. Vérifie que le déclencheur est bien **"Initialization - All Pages"**
2. Vérifie que le Tag ID GA4 est correct (format `G-XXXXXXXXXX`)
3. Dans le mode Aperçu, regarde si la balise est bloquée par le consentement

## Architecture du code

Le consentement est géré par 2 fichiers :

### `src/app/layout.tsx`
- Initialise `gtag` et `dataLayer` AVANT le chargement de GTM
- Définit le consentement par défaut à `denied`
- Restaure le consentement depuis localStorage si déjà accepté

### `src/components/CookieConsent.tsx`
- Affiche le banner de consentement
- Appelle `gtag('consent', 'update', ...)` quand l'utilisateur clique
- Sauvegarde le choix dans localStorage

## Notes importantes

- **Ne PAS créer de balise "Consent Mode - Update" manuellement** dans GTM
- Le code JavaScript gère déjà la mise à jour du consentement via `gtag('consent', 'update', ...)`
- GTM reconnaît nativement ces commandes gtag
