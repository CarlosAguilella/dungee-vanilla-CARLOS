const dburl = `https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app`;


export function fetchUsuarios(pin){
    return fetch(`/api/damelosusers?pin=${pin}`).then(datos => datos.json())
}

export function fetchPreguntas(){
    return fetch(`/api/damelasquestions`).then(preguntitas => preguntitas.json())
}

export function getPreguntaActual(pin){
    return fetch(`/api/damelapreguntaactual.js`).then(preguntitas => preguntitas.json())
}

export function updatePreguntaActual(i, pin){
    fetch (`${dburl}/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"value": ${i}}`
    });
}

export function addUser(pin, nom){
    fetch (`${dburl}/pins/pin${pin}/users.json`, {
            method: 'POST',
            body: `{"name": "${nom}" }`
    });
}

