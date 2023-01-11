const URL = 'http://localhost:8080/api/movies/';

export async function updateMovie(movie) {
    return await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function deleteMovie(id) {
    try {
        return await fetch(URL + id, {
            method: "DELETE"
        });
    } catch (error) {
        console.log(error)
    }
}

export async function addMovie(movie) {
    try {
        return await fetch(URL, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.log(error)
    }

}

export async function getAllMovie(genre) {
    try {
        return await fetch(URL + "?filter=" + genre);
    } catch (error) {
        console.log(error)
    }
}

export async function getMovieById(id) {
    try {
        const response = await fetch(URL + id.toString());
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}