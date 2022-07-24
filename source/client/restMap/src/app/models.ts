export interface ILocation {
    latitude: string;
    longitude: string;
    city: string;
    state: string;
}

export interface IRestroomData {
    _id: string;
    rrname: string;
    address: string;
    images: string[];
    location: ILocation;
    rating: number;
}

export interface IRestroomAmenities {
    clean_drinking_water: boolean;
    dustbin: boolean;
    handwash: boolean;
    nursing_room: boolean;
    sanitary_napkins: boolean;
}

export interface IRestoomDetails extends IRestroomData {
    amenities: IRestroomAmenities;
}
