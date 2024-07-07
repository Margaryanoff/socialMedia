export const UseRequest = () => {
    const GET = async (url) => {
        const result = await fetch(url);
        return result.json();
    };
    const POST = async (url, body) => {
        const result = await fetch(url, { method: "POST", body: JSON.stringify(body) });
        return result.json();
    };
    const DELETE = async (url) => {
        const result = await fetch(url, { method: "DELETE" });
        return result.json();
    };

    const PUT = async (url, user, body) => {
        const result = await fetch(`${url}/${user.id}`, {
            method: "PUT",
            body: JSON.stringify(body),
        });
        return result.json();
    };
    const PATCH = async (url, id, body) => {
        const result = await fetch(`${url}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(body),
        });
        return result.json();
    };

    return { GET, PATCH, POST, PUT, DELETE };
};
