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

export async function getAllMovie() {
    const response = await fetch('http://localhost:8080/api/movies');
    if (!response.ok) {
        console.log("test1111")
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("01231032130")
    return await response.json();
}