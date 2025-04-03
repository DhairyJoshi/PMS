export const decodeBase64 = (encodedStr) => {
    try {
        let len = encodedStr.length;
        let part1, part2, extraPart;

        if (len % 2 === 0) {
            part1 = encodedStr.slice(0, len / 2);
            part2 = encodedStr.slice(len / 2);
            extraPart = '';
        } else {
            part1 = encodedStr.slice(0, Math.ceil(len / 2));
            part2 = encodedStr.slice(Math.ceil(len / 2));
            extraPart = '';
        }

        // Reverse both parts back
        part1 = part1.split('').reverse().join('');
        part2 = part2.split('').reverse().join('');

        // Merge in the correct order to reconstruct the original string
        let result = part2 + part1 + extraPart;
        let decodedStr = JSON.parse(atob(result));
        return decodedStr;
    } catch (error) {
        console.error("Error decoding Base64:", error);
        return null;
    }
};