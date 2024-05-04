FormData.onsubmit = () => {
    output.textContent = 'Hello ${nom.value, prenom.value, objet.value, status.value, particulier.value, professionnel.value, email.value, message.value}'; 
    
    return false;
}