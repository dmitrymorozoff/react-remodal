export const getUniqueId = (() => {
    let count = 0;

    return () => `${++count}`;
})();
