// import { data } from "autoprefixer";
import { useEffect, useState } from "react";

// async function fetch1(currency='eur'){
//     let response=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//     let jsondata=await response.json();
//     console.log(jsondata)
// }
// fetch1();



function useCurrencyinfo(currency = 'eur') {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log('Fetching currency data...');
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                return response.json();
            })
            .then(jsondata => {
                setData(jsondata[currency]);
            })
            .catch(error => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyinfo;

