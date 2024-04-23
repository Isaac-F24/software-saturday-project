import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import './CardViewer.css'

function CardViewer() {

    const [offset, setOffset] = useState(0);
    const [pokemonList, setPokemonList] = useState(null);
    const [searchTerm, setSearchTerm] = useState(1);
    const [validSearch, setValidSearch] = useState(true);

    //get data from the URL and set the pokemon list with JSX objects
    const getURLData = async function getData() { 
        let url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=" + offset;

        const response = await fetch(url);
        const responseJson = await response.json();

        let pokemonListJson = responseJson.results;

        let pokemonFullList = [];

        for (let i = 0; i < pokemonListJson.length; i++) {
            let url = pokemonListJson[i].url;
            const response = await fetch(url);
            const responseJson = await response.json();

            pokemonFullList[i] = responseJson;
        }

        //Map each new pokemon to the jsx
        let cardList = pokemonFullList.map(((pokemon) => <Card name={pokemon.name}
                                                               number={pokemon.id}
                                                               img={pokemon.sprites.other['official-artwork'].front_default}
                                                               height={pokemon.height}
                                                               weight={pokemon.weight}
                                                               type={pokemon.types[0].type.name}
                                                               key={pokemon.name}></Card>))
        if (pokemonList != null) 
            setPokemonList(pokemonList.concat(cardList));
        else
            setPokemonList(cardList);

        
    };

    //increase offset
    function loadMore() {
        setOffset(offset + 12);
        //get url data automatically called in order to make new cards
    }

    function search() {

        let num = parseInt(searchTerm);

        if (isNaN(num)) {
            setValidSearch(false);
        }
        else {
            if (num > 0 && num < 9999) {
                setValidSearch(true);

                num -= 1 //num 1 is offset 0, etc

                if (offset != num) //If search location is different
                    setPokemonList(null);
                setOffset(num); //This 'does' the search
            }
            else 
                setValidSearch(false);
        }

    }

    //event handler for input text changing
    function updateSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    //event handler for input when key pressed
    function enterSearch(event) {

        if (event.key == 'Enter') {
            search();
        }

    }

    //Update the pokemonlist when offset changes/at beginning
    useEffect(() => {getURLData()}, [offset]);

    //Div which displays cards, one card per pokemon loaded
    return(
        <>

        <input className="search" onChange={updateSearchTerm} onKeyDown={enterSearch} type='text' placeholder='Enter a number...'></input>

        <button className="searchButton" onClick={search}>Go!</button>

        <br></br>

        {!validSearch ? <p className="error">Invalid number</p> : null}

        <div className="cardViewer">
            {pokemonList == null ? <p>Loading data...</p> : (pokemonList.length > 0 ? pokemonList : <p>No results.</p>)}
            {/* If the pokemon list is null, data is still loading. Otherwise, if there are no pokemon, the offset is beyond the current scope. If there are, then show the cards */}
        </div>

        <button className="loadButton" onClick={loadMore}>Load More</button>
        </>

    );

}
export default CardViewer;