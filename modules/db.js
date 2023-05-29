const dburl = `https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app`;


export function fetchUsuarios(pin){
    return fetch(`${dburl}/pins/pin${pin}.json`)
    .then(data => data.json())
    // return fetch(`/api/damelosusers?pin=${pin}`).then(datos => datos.json())
}

export async function fetchPreguntas(){
    return {
        "preguntas": {
            "pregunta0" : {
                "pregunta": "2+2?",
                "respuesta0": "4",
                "respuesta1": "5",
                "respuesta2": "2",
                "respuesta3": "1",
                "correcta": 0
            },
            "pregunta1" : {
                "pregunta": "2+7?",
                "respuesta0": "4",
                "respuesta1": "5",
                "respuesta2": "9",
                "respuesta3": "1",
                "correcta": 2
            },
            "pregunta2" : {
                "pregunta": "2+1?",
                "respuesta0": "4",
                "respuesta1": "3",
                "respuesta2": "2",
                "respuesta3": "1",
                "correcta": 1
            },
            "pregunta3" : {
                "pregunta": "20+10?",
                "respuesta0": "40",
                "respuesta1": "10",
                "respuesta2": "20",
                "respuesta3": "30",
                "correcta": 3
            }
        }
    }
    // return fetch(`/api/damelasquestions`).then(preguntitas => preguntitas.json())
}

export function getPreguntaActual(pin){
    return fetch(`${dburl}/pins/pin${pin}/pregunta.json`)
    .then(data => data.json());
    // return fetch(`/api/damelapreguntaactual.js`).then(preguntitas => preguntitas.json())
}

export function updatePreguntaActual(i, pin){
    fetch (`${dburl}/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"value": ${i}}`
    });
}

export function addUser(pin, nom){
    return fetch (`${dburl}/pins/pin${pin}/users.json`, {
            method: 'POST',
            body: `{"name": "${nom}" }`
    })
    .then(data => data.json());;
}

export function actualizarRespuesta(pin, userid, respuesta, pregunta){
    fetch(`${dburl}/pin/pin${pin}/users/${userid}/pregunta${pregunta}.json`, {
        method: 'PUT',
        body: `{"value": "${respuesta}"}`
    })


}

