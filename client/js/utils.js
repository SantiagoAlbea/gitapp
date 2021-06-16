export function monefy(num) {
    if (!num) return '';

    const numStr = String(num);

    const splitNumber = numStr.split(".")

    const points = splitNumber[0].length / 3;
    const result = [];

    for (let i = 0; i < points; i++) {
        const s = -3 * (i + 1);
        const e = -3 * i || undefined;
        const chunk = splitNumber[0].slice(s, e);

        result.push(chunk);
    }

    const beforeComma = result.reverse().join('.');

    if (splitNumber[1] === undefined){
        return beforeComma;
    }else{
        if (splitNumber[1].length === 1){
            return beforeComma.concat(',',splitNumber[1].concat('',0));
        }else{
            return beforeComma.concat(',',splitNumber[1].slice(0,2));
        }
    }
}

export function getRandomColor() {
    return `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${
        65 + 10 * Math.random()
    }%)`;
}

export function getMonth(dateString) {
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const date = new Date(dateString);

    return monthNames[date.getMonth()];
}

export function formatDate(date) {
    return date.split('T')[0];
}

export function friendlyDate(date){
    return new Date(date).toLocaleDateString("es-AR")
}
