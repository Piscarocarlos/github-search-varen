export const notFound = () => {
    document.querySelector('#response').innerHTML = `
        <div class="alert alert-info small">
        <strong>Oups ! Ce profil n'existe pas sur github ou a été supprimé !</strong>
      </div>
    `
}

 