export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function sum(m , n) {
    console.log('sum');
    console.log('解决bug')
    let total = 0;
    for (let i = m; i <= n; i++) {
        total += i;
    }
    return total;
}