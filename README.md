# Deep-in-system

Ce projet consiste en l'apprentissage de l'administration d'un serveur Linux, la mise en place de la sécurité et du réseau pour un serveur ubuntu, et vous l'installation de quelques services populaires.


## Objectifs

- Mettre en œuvre certaines compétences acquises dans le cadre du pool de scripts dans un projet réel.
- Avoir une première expérience dans l'installation d'un serveur ubuntu.
- Découvrir quelques implémentations de réseau et de sécurité sous Linux.
- Découvrir quelques services populaires sous Linux.

## Instructions

### Partie de la Machine Virtuelle (VM):

- Installer un serveur ubuntu dernière version LTS en tant que machine virtuelle.  

- La taille du disque de la VM doit être de 30 Go.  

- Vous devez diviser votre disque VM en ces partitions : swap : 4G / : 15G /home : 5G /backup : 6G  

- Votre nom d'utilisateur doit être votre nom de connexion.  

- Vous devez définir votre nom d'hôte au format {nom d'utilisateur}-hôte, si votre nom d'utilisateur est pomme de terre, votre nom d'hôte doit être pomme de terre-hôte.  

### La partie réseau 

- Définissez une adresse IP privée statique, vous êtes libre de choisir le masque de réseau à utiliser.  

- Vous devez être capable de vous connecter à Internet, vous pouvez tester avec :
```
$> ping -c 5 google.com
```

### La partie de Sécurité

Vous n'avez pas besoin d'utiliser l'utilisateur root dans votre processus d'installation ! Vous n'en aurez pas besoin lorsque vous aurez sudo. Sudo permet un contrôle d'accès précis. Il n'accorde des autorisations élevées qu'à un programme particulier qui en a besoin. Vous savez quel programme s'exécute avec des privilèges élevés, plutôt que de travailler avec un shell root (exécuter toutes les commandes avec les privilèges root).

- Vous devez désactiver la connexion root à distance via ssh.
- Modifiez le port ssh en : 2222.
- Configurez le pare-feu et fermez tous les ports entrants, seuls les ports utilisés doivent être ouverts.

### Partie Gestion des utilisateurs 

Vous devez créer 2 utilisateurs dans votre serveur comme suit :

1- luffy:  

Méthode d'authentification SSH : Authentification par clé publique
Répertoire personnel : /home/luffy
Sudoer : oui
ssh-key : votre clé ssh générée
Vous devez garder votre clé ssh prête pour la session d'audit !

2- zoro:  

Méthode d'authentification SSH : Authentification par mot de passe
Répertoire d'origine : /home/zoro
password : Utilisez votre mot de passe personnalisé
sudoer : no
Vous utiliserez votre mot de passe personnalisé pour la session d'audit !

### Partie Services :

Installez un serveur FTP et créez un utilisateur nami. L'utilisateur nami peut accéder par FTP uniquement à /backup avec un accès en lecture seule. nami user password : Use your custom password
Vous utiliserez votre mot de passe personnalisé pour la session d'audit ! N'activez pas l'accès anonyme ! Ce serait risqué !

### La partie base de données :

- Vous devez installer le serveur MySQL
- Désactivez la connexion à distance pour l'utilisateur root.

N'autorisez pas la connexion à MySQL depuis l'extérieur du serveur ! Pour améliorer la sécurité de votre site web, vous devez faire en sorte que votre serveur MySQL ne soit accessible que par les applications du serveur, tant que cela n'affecte pas votre solution.

Vous devez créer un utilisateur MySQL, qui a le seul accès nécessaire à la base de données WordPress. N'utilisez pas l'utilisateur root dans votre site WordPress ! 

### Partie WordPress :

- Vous devez installer WordPress
- WordPress doit se trouver dans le répertoire racine de votre serveur web : http://{host}/
- Votre WordPress doit fonctionner normalement, essayez de poster quelque chose ou de créer un autre utilisateur, de toute façon vous êtes libre de faire n'importe quoi.  

Le fichier de configuration ne doit pas être accessible au public, essayez http://{host}/wp-config.php


### Partie Sauvegarde :

Les sauvegardes protègent contre les erreurs humaines, les défaillances matérielles, les attaques de virus, les pannes de courant et les catastrophes naturelles. Les sauvegardes permettent d'économiser du temps et de l'argent si ces défaillances se produisent.

Dans cet exercice, vous allez mettre en place une méthode de sauvegarde simple en utilisant des tâches cron.
- Mettez en place une tâche cron qui démarre tous les jours à 00:00, elle doit créer un fichier tar de la base de données WordPress.
- Les fichiers de sauvegarde doivent être créés dans le dossier /backup.
- Le nom du fichier de sauvegarde doit contenir la date de création.
- Vous devez ajouter une ligne à un fichier journal (/var/log/backup.log). Cette ligne doit contenir un message vous informant que la sauvegarde a réussi et l'heure de la sauvegarde. 
- Vos fichiers de sauvegarde doivent pouvoir être téléchargés à partir de l'utilisateur FTP nami.


### Bonus Part

If you complete the mandatory part perfectly, you can move to this part. You can add anything you feel deserves to be a bonus, some of the suggested ideas:

Install the Minecraft server, It must be always running even if you reboot your server.

Automate all instructions with ansible, so you can remake this long process in more than 1 server in a short time.

Set up the SSL in the web server and FTP server, you can use self-signed SSL.

<i>Challenge yourself!</i>