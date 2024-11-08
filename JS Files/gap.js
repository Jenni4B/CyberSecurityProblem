/*
 *
 * Write a function that finds the experience level with 
 * the highest gap and returns its name and gap value
 * 
 * Cybersecurity Talent-Gap Analysis:
 * 
 * Total Talent Gap: 300,000
 * 
 * Highest Shortage: Mid-level with a gap of 200,000
 */

// Array with XP level --> job openings ---> talent available

const jobData = [
    {
        level: "Entry Level",
        talent: 100000,
        openings: 125000 // Gap of 25,000
    },
    {
        level: "Mid Level",
        talent: 100000,
        openings: 300000 // Gap of 200,000
    },
    {
        level: "Senior Level",
        talent: 200000,
        openings: 275000 // Gap of 75,000
    }
];


function findLargestOpenings(data) {
    console.log("Running findLargestOpenings. Finding the XP level with the highest gap and returning its name and gap value");

    let highestGapLevel = null;
    let highestGapValue = 0;
    let totalGap = 0

    data.forEach(job => {
        const gap = job.openings - job.talent;
        totalGap = gap + totalGap

        if (gap > highestGapValue) {
            highestGapValue = gap;
            highestGapLevel = job.level;
        }
    });

    return { level: highestGapLevel, levelGap: highestGapValue, total: totalGap};
}

function loadArray(data) {
    console.log("Running loadArray. Outputting array data to the console");
    console.log("data =>", data);
}

loadArray(jobData);
const result = findLargestOpenings(jobData);

console.log('CyberSecurity Talent-Gap Analysis:');
console.log(`Total Talent Gap: ${result.total}`);
console.log(`Highest Shortage: ${result.level} with a gap of ${result.levelGap}`);
