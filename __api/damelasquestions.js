export default function handler(request, response) {

    const questions = {
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
        
    
    response.json(questions);
}