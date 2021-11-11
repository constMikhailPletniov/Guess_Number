function random(minValue, maxValue) {
    if (
        typeof maxValue === 'number' &&
        typeof minValue === 'number' &&
        minValue > 0 &&
        minValue < maxValue &&
        maxValue < 201 &&
        minValue === minValue &&
        maxValue === maxValue &&
        minValue !== maxValue
    ) {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
}
