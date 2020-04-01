export default function formatPrice(value) {
    return Intl.NumberFormat(
        'pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(value);
}
