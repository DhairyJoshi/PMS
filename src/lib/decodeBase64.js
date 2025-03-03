export const decodeBase64 = (encodedString) => {
    try {
        // Decode Base64
        const decodedString = atob(encodedString);
        // Parse the JSON string
        return JSON.parse(decodedString);
    } catch (error) {
        console.error("Error decoding Base64:", error);
        return null;
    }
};