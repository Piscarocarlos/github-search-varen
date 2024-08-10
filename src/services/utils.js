export const btnDisabled = (button, ipt) => {
    button.disabled = ipt.value.length > 0 ? false : true;
}

export const toggleSpinner = (show) => {
    const spinner = document.querySelector(".spinner-border");
    spinner.style.display = show ? "block" : "none";
};