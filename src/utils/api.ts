export function isNaturalNumber(param: any) {
    const parsed = Number.parseInt(param);
    return Number.isInteger(parsed) && parsed > 0;
}