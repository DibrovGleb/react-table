export interface Country {
    id: number;
    name: string;
    cities: City[];
}
export interface City {
    id: number;
    name: string;
}

export const countries: Country[] = [
    {
        id: 1,
        name: "Россия",
        cities: [
            { id: 1, name: "Саратов" },
            { id: 2, name: "Москва" },
            { id: 3, name: "Питер" },
        ],
    },
    {
        id: 2,
        name: "США",
        cities: [
            { id: 4, name: "Нью-Йорк" },
            { id: 5, name: "Чикаго" },
            { id: 6, name: "Лос-Анджелес" },
        ],
    },
    {
        id: 3,
        name: "Япония",
        cities: [
            { id: 7, name: "Токио" },
            { id: 8, name: "Осака" },
            { id: 9, name: "Киото" },
        ],
    }
];

