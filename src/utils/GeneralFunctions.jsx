export const TabTitle = (title) => {
    return document.title = title
}

export const routeCheck = (route) => {
    switch (route) {
        case "/product":
            return "Product"
        case "/artist":
            return "Artist"
        default:
            return ""
    }
}
