import { useEffect,useState } from "react";


//creating a custom hook(this function is a custom hook)
function useCurrencyInfo(currency){
    const [data,setData] = useState({});

    //useEffect needs two arg -> callback and a dependency array
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

        // every time you make a request using fetch(), the response is initially in raw HTTP format.
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo








//We use custom hooks when we want to reuse logic across multiple components.

/*
Are all responses in raw HTTP?

Yes, every time you make a request using fetch(), the response is initially in raw HTTP format.

    This means it contains:
        Headers (metadata about the response, like Content-Type or Status Code)
        Body (the actual data sent from the server)
    The body can be in different formats depending on the API, such as:
        JSON (application/json)
        HTML (text/html)
        Plain text (text/plain)
        XML (application/xml)
        Binary data (like images or PDFs)

Since most APIs return JSON data, we convert the response using .json(), which extracts and parses the JSON from the response body.

Some APIs return different formats based on the URL:

    example.com/data.json → Returns JSON
    example.com/data.xml → Returns XML
    example.com/data.txt → Returns plain text

    Key Takeaway

    fetch() returns a raw HTTP response.
    We must extract the body using .json(), .text(), or .blob() depending on the format.
    The .json in the URL is just part of the API design, signaling that the response will be in JSON format.
*/
