export default function handler(request, response) {

    let pin = request.query.pin;
    fetch(`https://dungee-252d3-default-rtdb.europe-west1.firebasedataba.app/pins/pin${pin}.json`)
    .then(data => data.json())
    .then(json => response.json(json))
}

