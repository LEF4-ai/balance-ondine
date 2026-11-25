# ⚖️ La Balance d'Ondine

![Le Juge Hibou](assets/icones/icon-192.png)

**Le tribunal des décisions.** Pose ta question, donne tes arguments pour et contre : le Juge Hibou les interroge, les pèse en secret, et rend son verdict dans une grande cérémonie en pixel art.

## Jouer

👉 **https://VOTRE-PSEUDO.github.io/balance-ondine/** (lien actif une fois GitHub Pages activé)

## L'installer comme une appli sur le téléphone

- **iPhone (Safari)** : ouvre le lien, touche **Partager** puis **Sur l'écran d'accueil**.
- **Android (Chrome)** : ouvre le lien, touche **Installer l'appli** dans le jeu (ou le menu ⋮ puis **Installer l'application**).

L'appli s'ouvre alors en plein écran avec son icône, et marche même sans réseau.

## Comment ça marche

1. **L'interrogatoire** : chaque argument passe par 5 questions du hibou (domaine de vie, importance, méthode 10-10-10, probabilité, et une question de recul : regret, conseil à une amie, état de fatigue, peur du changement…). Le poids est **calculé**, jamais choisi, et reste secret.
2. **L'intuition** : juste avant la pesée, le hibou demande ce que tu espères au fond de toi (technique de la pièce).
3. **La pesée** : plumes, cailloux, briques, enclumes et éléphants tombent sur la balance, avec ralenti et zoom sur le dernier objet.
4. **Le verdict** : coup de marteau, tampon OUI / NON, comparaison avec ton intuition et détail de chaque poids.
5. **Les archives** : chaque verdict est gardé. Quelques jours plus tard, le hibou revient demander si c'était la bonne décision, et calcule sa fiabilité.

En bonus : 20 trophées, 6 niveaux (le hibou gagne un accessoire à chaque niveau), une carte de verdict à partager et 27 bruitages.

Les données (arguments, archives, trophées) restent dans le téléphone, rien n'est envoyé nulle part.

## Sous le capot

- Un seul fichier `index.html` (HTML, CSS, JavaScript sans dépendance), aucun outil de compilation.
- `manifest.webmanifest` et `sw.js` en font une appli web installable qui marche hors ligne.
- `assets/sons/` : bruitages WAV (SoundWeaver + recettes maison) ; `assets/sprites/` : sprites dessinés avec SpriteCook.

Pour publier une mise à jour : modifier les fichiers, augmenter `VERSION` dans `sw.js`, puis pousser sur la branche `main`.
