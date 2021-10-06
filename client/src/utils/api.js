const baseURL = "http://localhost:7000/api";

export async function httpRequest (URL , options) { 
    try {
        const request = await fetch(baseURL + URL , options );
        const response = await request.json();

        if(!request.ok) { 
            throw (response.message);
        }
        return response;
    } catch (error) {
        throw error;
    }
}



