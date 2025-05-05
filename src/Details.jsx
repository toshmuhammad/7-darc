import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./requests";
import { Link } from "react-router-dom";

export default function Details() {
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name:newName } = useParams();

    useEffect(() => {
        setLoading(true);
        getData(`name=${newName}`)
            .then((res) => {
                setCountry(res[0]);
            })
            .catch((message) => {
                setError(message)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Kuting...</h1>;
    if (error) return <h1>Xatolik bo'ldi</h1>;
    if (country.length === 0) return <h1>Ma'lumot mavjud emas</h1>;

    const { category, description, name, rating, image, price, country: newCountry, } = country;

    return (
        <div>
            <div className={style.nima}>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className={style.card}>
                        <button className="btn btn-primary">{newCountry}</button>
                        <button className="btn btn-secodary">{category}</button>
                        <Link to={`/${name}`}>Batafsil</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}