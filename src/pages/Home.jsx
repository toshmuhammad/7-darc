import { useEffect, useState } from "react";
import { getData } from "../requests";
import { Link } from "react-router-dom";
import style from "./Home.module.css"

export default function Home() {
    const [countryList] = useState(["France", "Indonesia", "USA",])
    const [filter, setFilter] = useState("");
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getData(filter)
            .then((res) => {
                setCountry(res);
            })
            .catch((message) => {
                setError(message)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [filter]);

    function handleChange({ target: { value } }) {
        setFilter(`country=${value}`);
        console.log(value);
    }

    if (loading) return <h1>Kuting...</h1>;
    if (error) return <h1>Xatolik bo'ldi</h1>;
    if (country.length === 0) return <h1>Ma'lumot mavjud emas</h1>;

    return <div className={style.container}>
        <div>
            <select value={filter} onChange={handleChange} defaultValue={"Davlat bo'yicha filterlash"}>
                <option disabled={true}>Davlat bo'yicha filterlash</option>
                {countryList.map((el) => {
                    return <option value={el}>{el}</option>
                })}
            </select>
        </div>
        {country.map(({ category, description, name, rating, image, price, country: newCountry, }) => {
            return <div className={style.nima}>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className={style.nik}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className={style.card}>
                        <button className={style.btn}>{newCountry}</button>
                        <button className={style.btm}>{category}</button>
                        <Link className={style.batafsil} to={`/${name}`}>Batafsil</Link>
                    </div>
                </div>
            </div>
        })}
    </div>;
}