// weather interface
export interface Iweather {
    base: string;
    clouds: {
        all: number;
    },
    cod:number;
    coord:{
        lat:number,
        lon: number,
    },
    dt: number;
    id: number;
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string;
    rain: {
        lh: string
    },
    sys: {
        country: string,
        id: number,
        sunrise: number,
        sunset: number,
        type: number
    },
    timezone: number,
    visibility: number,
   weather:[
        {
            description: string,
            icon: string,
            id: number,
            main: string
        }
    ],
    wind: {
        deg: number,
        speed: number
    }
}

export interface IkanyeWest {
    quote: string
}