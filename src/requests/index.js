export async function getData(query = "") {
    try {
        const res = await fetch(`https://json-api.uz/api/project/fn37/travels?${query}`);
        if (!res.ok) throw new Error(`HTTP xatolik: ${res.status}`);
        const json = await res.json();
        return json.data;
    } catch (err) {
        console.error("Ma'lumot olishda xatolik:", err.message);
        return null;
    }
}

// export async function getData(query = "") {
//     const req = await fetch(`https://json-api.uz/api/project/fn37/travels?${query}`);
//     if (req.status === 200) {
//         const result = await req.json();
//         return result.data;
//     } else {
//         throw new Error("Xatolik");
//     }
// }