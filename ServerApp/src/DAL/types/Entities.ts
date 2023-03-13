interface EntityWithName {
    name: string;
};

interface EntityWithExpireDate {
    expireDate: Date;
};

interface EntityWithNameAndDesc extends EntityWithName {
    description: string;
};

interface File extends EntityWithName {
    url: string;
};

interface Subscription extends EntityWithName {
    description: string;
    price: number;
};

interface ToRead {
    listName: string;
    listNumber: number;
};

interface User {
    email: string;
    password: string;
};

export type ModelEntity =
    EntityWithName | EntityWithNameAndDesc| EntityWithExpireDate
    | File | Subscription | ToRead | User;
