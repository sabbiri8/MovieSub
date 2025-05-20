import Star from '/assets/star.svg'; // MAKE SURE THIS PATH IS CORRECT for your star.svg file

export default function Rating({ value }) {
    // Sanitize the 'value' prop to ensure it's a non-negative integer:
    // 1. Convert to a number. (e.g., "3.5" becomes 3.5, undefined becomes NaN, null becomes 0)
    // 2. If the result is NaN (Not a Number), default to 0 using `|| 0`.
    // 3. Floor the number to remove any decimal part (e.g., 3.5 becomes 3).
    // 4. Ensure the number is not negative using Math.max(0, ...).
    const numStars = Math.max(0, Math.floor(Number(value) || 0));

    // Create an array with 'numStars' elements, each filled with the Star import
    const stars = Array(numStars).fill(Star);

    return (
        <>
            {stars.map((starUrl, index) => (
                <img
                    key={index}
                    src={starUrl} // 'starUrl' should be the path to your star image provided by the 'Star' import
                    width="14"
                    height="14"
                    alt="star"
                />
            ))}
        </>
    );
}