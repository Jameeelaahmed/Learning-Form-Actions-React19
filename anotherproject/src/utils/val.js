export function isName(name) {
    return name && name.trim().length > 0; // Ensure it is not empty
}

export function isTitle(title) {
    return title && title.trim().length >= 5; // Minimum length of 5
}

export function isBody(body) {
    return body && body.trim().length >= 10; // Minimum length of 10
}