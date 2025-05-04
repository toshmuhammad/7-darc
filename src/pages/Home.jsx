import { useEffect, useState } from "react";
import { getData } from "../requests";

export default function Home() {
    const [country, setCountry] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        getData()
            .then((res) => {
                setCountry(res);
            })
            .catch(() => { })
            .finally(() => { });
    }, []);

    if (loading) return <h1>Kuting...</h1>;
    if (error) return <h1>Xatolik bo'ldi</h1>;
    if (country.length === 0) return <h1>Ma'lumot mavjud emas</h1>;

    return <div>
        {country.map(()=> {
            
        })}
    </div>;
}