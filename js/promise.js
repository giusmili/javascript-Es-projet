document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    /* URL de l'API GitHub pour récupérer les informations sur un utilisateur OPS */
    const url = 'https://api.github.com/users/giusmili';

    /* requête fetch */
    fetch(url).then(response => {
        /* Vérifier si la réponse est ok */
        if (!response.ok) {
            throw new Error('Erreur réseau avec le statut ' + response.status);
        }
        return response.json(); /* Convertir la réponse en JSON */
    }).then(data => {
        /* Afficher les informations dans DOM */
        document.getElementById('login').textContent = data.login;
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('url').href = data.html_url;

        /* un warning en cas de problème de source */
        document.getElementById('city').textContent = data.location || 'Non renseignée';
    }).catch(error => {

        /* Gérer les erreurs */
        console.error('Il y a eu un problème avec la requête fetch :', error);
    });
});