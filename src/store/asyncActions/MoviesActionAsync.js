export async function updateMovie(movie) {
    return await fetch("http://localhost:8080/api/movies", {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (!response.ok) {
            alert("HTTP error" + response.status)
        }
    })
}

export async function deleteMovie(id) {
    return await fetch('http://localhost:8080/api/movies/' + id, {
        method: "DELETE"
    });
}

export async function addMovie(movie) {
    const response = await fetch('http://localhost:8080/api/movies', {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

export async function getAllMovie(genreParams) {
    let url = 'http://localhost:8080/api/movies';
    if (genreParams != null && !genreParams.isEmpty) {
        url += genreParams;
    }
    const response = await fetch(url);
    if (!response.ok) {
        console.log("test1111")
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("01231032130")
    return await response.json();
}