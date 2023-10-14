export interface TariffType {
    title: string,
    descriptions: string[],
    price: number,
    btnText: string,
}

export interface TariffList {
    tariff: TariffType,
    tariff_type: "default" | 'accent'
}
