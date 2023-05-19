
export interface IQuestion {
    id?: number;
    question: string;
    variants: string[];
    answer: string;
    testId?: number;
}

export interface ITest {
    id?: number,
    vacancyId: number,
    status: "in progress" | "completed"
}

export interface IContact {
    id?: number;
    userId1: number;
    userId2: number;
}

export interface IMessage {
    id?: number,
    message: string,
    userIdFrom: number,
    userIdTo: number,
    contactId: number;
}

export interface ILikeVacancyToResume {
    id?: number,
    idVacancyFrom: number;
    idResumeTo: number;
    status: "like" | "dislike";
}

export interface ILikeResumeToVacancy {
    id?: number,
    idResumeFrom: number;
    idVacancyTo: number;
    status: "like" | "dislike";
}

export interface IRecentLikeVacancyToResume {
    id?: number,
    idVacancyFrom: number;
    idResumeTo: number;
}

export interface IRecentLikeResumeToVacancy {
    id?: number,
    idResumeFrom: number;
    idVacancyTo: number;
}

export interface IUser {
    id?: number,
    key: string,
    firstName: string,
    lastName: string,
    secondName: string,
    phone: string,
    mail: string,
    birthDay: string,
    login: string,
    password: string,
    role: "user" | "hr",
}

export interface IUniversity {
    id?: number,
    universityName: string,
    faculty: string,
    specialization: string,
    graduationYear: number,
}

export interface IProfession {
    id?: number,
    profession: string
}

export interface IPost {
    id?: number,
    post: string,
}

export interface IWorkExperience {
    id?: number,
    workExperience: string,
}

export interface ISkill {
    id?: number,
    name: string
}

export interface ICity {
    id?: number,
    city: string,
}

export interface IJob {
    id?: number,
    companyName: string,
    post: string,
    todos: string,
    workFrom: string,
    workTo: string
}

export interface IResume {
    id?: number,
    ownerId: number,
    city: string,
    salary: number,
    education: string,
    universities: IUniversity[],
    jobs: IJob[],
    description: string,
    skills: string,
}

export interface IVacancy {
    id?: number,
    ownerId: number,
    companyName: string,
    post: string,
    salary: number,
    workExperienceId: number,
    todos: string,
    requirements: string,
    desirable: string,
    offer: string,
    skills: string,
}



