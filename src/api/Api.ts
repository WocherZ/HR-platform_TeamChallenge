
export function isAuth() {
    const key = localStorage.getItem('key') || null
    if (key) {
        return true
    } else {
        return false
    }
}

//Список контактов (они же мэтчи)
export function getContacts() {

}

//Отдельный мэтч
export function getContact(id: number) {

}

//сообщения чата
export function getChat(contactId: number) {

}

//Отправить сообщение
export function sendMessage(chatId: number, msg: string) {

}

//Профессии
export function getProfessions() {

}

//Должности
export function getPosts() {

}

//Города
export function getCities() {

}

//Опыты работы (не важен. меньше 1 года, 1-3 и т.д)
export function getWorkExperiences() {

}

//Получить все ключевые навыки
export function getSkills() {

}

//Подтаскиваются резюме
export function getResumes() {

}

//получить отдельное резюме
export function getResume(resumeId: number) {

}

//Добавить резюме
export function createResume(resume: {}) {

}

//Подтаскиваются вакансии
export function getVacancies() {

}

//Получить отдельную вакансию
export function getVacancy(vacancyId: number) {

}

//Добавить вакансию
export function createVacancy(vacancy: {}) {

}

//Получить вопросы теста
export function getTest(vacancyId: number) {

}

//Добавить тест к вакансии
export function createTest(test: {}, vacancyId: number) {

}

//Лайк резюме
export function setLikeResume(userId: number, resumeId: number) {

}

//Лайк вакансии
export function setLikeVacancy(userId: number, vacancyId: number) {

}

//Получить данные пользователя
export function getUser(userId: number) {

}

//Вход в аккаунт
export function logIn(login_: string, password: string) {

}

//Регистрация
export function createAccount(data: {}) {

}





