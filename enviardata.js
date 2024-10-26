function enviar() {
 
    const nombre = document.getElementById("nombre").value;

    const email = document.getElementById("email").value;

    const number = document.getElementById("number").value;
    
    const xmlData = `<usuario>
    <nombre>${nombre}</nombre>
    <email>${email}</email>
    <number>${number}</number>
    </usuario>`
    
    localStorage.setItem('usuarioXML', xmlData)
    window.location.href = 'datos.html';
    
    return false;

}