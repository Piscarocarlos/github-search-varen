export const showError = (error) => {
    document.querySelector('#response').innerHTML = `
        <div class="alert alert-danger small">
        <strong>Nous rencontrons une difficulté pour afficher les données. Veuillez réessayer plus tard !</strong>
        <p>${error}</p>
      </div>
    `
}