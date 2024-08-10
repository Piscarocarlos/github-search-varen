import { showError } from "../ui/error";
import { notFound } from "../ui/notfound";
import { showProfile } from "../ui/profile";
import { toggleSpinner } from "./utils";



export const searchUser = (username) => {
    document.querySelector("#response").innerHTML = ""
    toggleSpinner(true);
    fetch(`https://api.github.com/users/${username}`).then((res) => {
        return res.json()
    }).then((data) => {
        toggleSpinner(false);
        if(data.status == "404" || data.status == 404) {
            notFound()
        } else {
            showProfile(data)
        }
        
    }).catch((error) => {
        showError(error);
    })
}