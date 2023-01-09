export function updateMoviePromise(movie) {
    return fetch("http://localhost:8080/api/movies", {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export function deleteMoviePromise(id) {
    return fetch('http://localhost:8080/api/movies/' + id, {
        method: "DELETE"
    });
}

export function addMoviePromise(movie) {
    return fetch('http://localhost:8080/api/movies', {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

export function getAllMoviePromise(genre) {
    return fetch("http://localhost:8080/api/movies?filter=" + genre);
}