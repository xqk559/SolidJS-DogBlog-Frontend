export async function getAllUsers() {
    console.log("Request is supposed to start");
    const response = await fetch('http://localhost:4200/api/users');
    console.log("Response is :", response);
    return await response.json();
}

export async function createUser(data: []) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}