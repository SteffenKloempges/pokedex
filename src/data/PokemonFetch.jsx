import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonFetch = () => {
    const { setAllPokemon, setLoading, setError } = useContext(PokemonContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=150");

                if (!response.ok) {
                    throw new Error("Fehler beim Laden der Daten");
                }

                const result = await response.json();
                setAllPokemon(result.results);
            } catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

}

export default PokemonFetch;