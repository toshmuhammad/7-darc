export async function getData(query = "") {
    const req = await fetch(`https://json-api.uz/api/project/fn37/travels?${query}`);
    if (req.status === 200) {
        const result = await req.json();
        return result.data;
    } else {
        throw new Error("Xatolik");
    }
}