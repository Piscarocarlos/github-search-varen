
export const showProfile = (data) => {
    document.querySelector("#response").innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <img src=${data.avatar_url} class="rounded-3 w-100" alt=${"Profil de " + data.name}>
                </div>
                <div class="col-md-9">
                    <h1 class="fs-2">${data.name}</h1>
                    <p class="text-muted">@${data.login}</p>
                    <hr>
                    <p>${data.bio}</p>
                </div>
            </div>
        `
}
