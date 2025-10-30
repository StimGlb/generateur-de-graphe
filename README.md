🧭 Mémo Git – Projet Générateur de Graphes
🚀 Initialisation du dépôt local
# Initialiser Git dans le dossier du projet
git init

# Ajouter le dépôt distant (GitHub)
git remote add origin https://github.com/glbprod/generateur-de-graphes.git

# Vérifier la connexion
git remote -v

🧱 Préparer le premier commit
# Vérifier les fichiers suivis/non suivis
git status

# Ajouter tous les fichiers
git add .

# Créer le commit initial
git commit -m "Initial commit - App React/Vite Graph Generator"

# Définir la branche principale
git branch -M main

☁️ Pousser sur GitHub
# Premier push vers GitHub
git push -u origin main

⚠️ En cas de rejet (remote contains work you do not have locally)

Ce problème apparaît quand le dépôt GitHub contient déjà un ou plusieurs fichiers (README, LICENSE…).

# Fusionner l'historique distant avec le local
git pull origin main --allow-unrelated-histories

# Ajouter les changements après résolution
git add .

# Valider la fusion
git commit -m "Fusion dépôt local et distant"

# Pousser à nouveau
git push origin main

🔄 Si le dépôt distant a été mis à jour (non-fast-forward / fetch first)

Ton historique local est en retard par rapport à GitHub.

# Mettre à jour ton historique local proprement
git pull origin main --rebase

# Pousser à nouveau
git push origin main

🔧 En cas de conflits
# Après modification des fichiers en conflit :
git add .
git rebase --continue

🧨 Si tu veux écraser le dépôt distant avec ta version locale

⚠️ À utiliser seulement si tu veux remplacer entièrement le contenu sur GitHub.

git push origin main --force

🧩 Vérifications utiles
# Voir les branches
git branch

# Vérifier le log des commits
git log --oneline --graph --decorate

# Voir les différences entre local et distant
git fetch origin
git diff main origin/main

🧹 Nettoyage
# Supprimer les dépendances locales
rm -rf node_modules package-lock.json

# Re-télécharger les dépendances
npm install

🔁 Routine quotidienne conseillée
# Mettre à jour ton dépôt avant de coder
git pull origin main --rebase

# Ajouter tes modifications
git add .

# Commit clair
git commit -m "Ajout : nouvelle fonctionnalité du générateur de graphes"

# Envoyer sur GitHub
git push origin main

🧠 Astuce bonus

Pour éviter d’oublier un pull avant un push, tu peux activer un alias Git :

git config --global alias.smartpush '!git pull --rebase && git push'


Puis tu n’auras plus qu’à faire :

git smartpush
