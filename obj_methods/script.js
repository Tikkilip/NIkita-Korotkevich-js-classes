const hours = {
    monday: {
        opens_at: '8-9',
        is_closed: true
    },

    tuesday: {
        opens_at: '7-8',
        is_closed: false
    }
}

const keys = Object.keys(hours);

const result = keys.reduce((acc, key) => {
    const value = hours[key];
    if(value.is_closed === false) {
        const obj = {
            opens_at: hours[key].opens_at,
            is_closed: hours[key].is_closed,
            day: key
        }
        acc.push(obj)
    }
    return acc
}, [])

console.log(result);

/* const filteredArray = keys.filter((key) => {
    const value = hours[key];
    if(value.is_closed === false) {
        return key
    }
});

const mapedArray = filteredArray.map((key) => {
    return {
        opens_at: hours[key].opens_at,
        is_closed: hours[key].is_closed,
        day: key
    }
});

console.log(mapedArray);
*/