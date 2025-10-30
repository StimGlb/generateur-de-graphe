Voici le README.md complet (version Markdown de la cheat-sheet Git) — formaté pour être clair, joli sur GitHub, et directement utilisable dans ton dépôt generateur-de-graphes.

# 🧭 Cheatsheet Git — Générateur de Graphes

> Toutes les commandes Git utiles pour gérer ton projet React/Vite hébergé sur GitHub et déployé sur Vercel.

---

## 🚀 Initialisation du dépôt local

```bash
git init
git remote add origin https://github.com/glbprod/generateur-de-graphes.git
git remote -v

🧱 Préparer le premier commit
git status
git add .
git commit -m "Initial commit - App React/Vite Graph Generator"
git branch -M main

☁️ Pousser sur GitHub
git push -u origin main

⚠️ En cas de rejet — remote contains work you do not have locally

Quand le dépôt distant contient déjà des fichiers (README, LICENSE...).

git pull origin main --allow-unrelated-histories
git add .
git commit -m "Fusion dépôt local et distant"
git push origin main

🔄 En cas d’erreur non-fast-forward ou fetch first

Ton historique local est en retard par rapport à GitHub.

git pull origin main --rebase
git push origin main

🔧 En cas de conflits (pendant un rebase)
# Édite les fichiers marqués avec <<<<<<<, =======, >>>>>>>
git add .
git rebase --continue

🧨 Écraser le dépôt distant (⚠️ attention)

À n’utiliser que si ta version locale doit remplacer complètement le contenu distant.

git push origin main --force

🧩 Vérifications utiles
git branch
git log --oneline --graph --decorate
git fetch origin
git diff main origin/main

🧹 Nettoyage
rm -rf node_modules package-lock.json
npm install

🔁 Routine quotidienne recommandée

Pour garder un historique propre et éviter les conflits.

git pull origin main --rebase
git add .
git commit -m "Ajout : nouvelle fonctionnalité du générateur de graphes"
git push origin main

⚙️ Créer un alias pratique

Combine pull --rebase + push en une seule commande.

git config --global alias.smartpush '!git pull --rebase && git push'


Utilisation :

git smartpush

🧠 Commandes utiles à connaître
Commande	Description
git status	Vérifie les fichiers modifiés / en attente
git log --oneline	Affiche l’historique des commits
git diff	Compare les différences entre commits
git reset --hard HEAD~1	Annule le dernier commit (⚠️ irréversible)
git stash / git stash pop	Met de côté puis récupère des modifications temporaires
💡 Conseils rapides

🧭 Fais toujours un git pull --rebase avant de coder.

✏️ Garde tes commits petits et explicites.

👀 Utilise git log --oneline --graph --decorate pour visualiser ton historique avant un push risqué.

🧑‍💻 Crée une branche de test avant d’ajouter une nouvelle fonctionnalité :

git checkout -b feature/nouvelle-fonction

📄 Licence

Ce document fait partie du projet Générateur de Graphes
 — librement réutilisable (MIT).
