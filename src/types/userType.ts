export type UserType = {
    id: number;
    email: string;
    username: string;
    phone: string;
    image: string;
    
}

export type UserDetailType = {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    username: string;
    email: string;
    gender: string;
    birthDate: string;
    address: {
        address: string;
        street: string;
        state: string;
        city: string;
    };
    phone: string;
    company: {
        department: string;
        name: string;
        title: string;
    };
}