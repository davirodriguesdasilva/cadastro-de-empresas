export function validarCNPJ(cnpj: number): boolean {
    const cnpjStr = cnpj.toString().replace(/\D/g, '');

    if (cnpjStr.length !== 14) {
        return false;
    }

    const calcularDigitoVerificador = (cnpjBase: string, pesos: number[]): number => {
        let soma = 0;
        for (let i = 0; i < pesos.length; i++) {
            soma += Number(cnpjBase[i]) * pesos[i];
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const baseCNPJ = cnpjStr.slice(0, 12);
    const primeiroDigitoVerificador = calcularDigitoVerificador(baseCNPJ, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const segundoDigitoVerificador = calcularDigitoVerificador(baseCNPJ + primeiroDigitoVerificador, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    return (
        Number(cnpjStr[12]) === primeiroDigitoVerificador &&
        Number(cnpjStr[13]) === segundoDigitoVerificador
    );
}
