
export function isAuth() {
    const key = localStorage.getItem('key') || null
    if (key) {
        return true
    } else {
        return false
    }
}



