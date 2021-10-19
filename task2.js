/**
 * a) What is the performance, in terms of, Big O notation, of the below code?
 * Worst scenario O(5n - 1)
 * Best scenario O(4n + 1)
 */


/**
 * b) Write a solution that has better performance
 */

const getBlockPolicyState = (domains) => {
    let oneDomain = false;
    let allDomains = true;

    for (domain in domains) {
        domains[domain].policy === 'block' ?
            oneDomain = true :
            allDomains = false;
    }

    return { oneDomain, allDomains }
};

/**
 * c) What is the performance of your new solution?
 * O(n)
 */

const printGetBlockPolicyState = () => {
    const domains = { // Example to show data shape only.
        "one.com": { policy: "block" },
        "two.com": { policy: "none" },
        "three.com": { policy: "none" },
        "four.com": { policy: "block" },
    }

    console.log(getBlockPolicyState(domains));
}

module.exports = {
    printGetBlockPolicyState
}