// https://leetcode.cn/problems/course-schedule/solutions/250377/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/?envType=study-plan-v2&envId=top-100-liked
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree = new Array(numCourses).fill(0);
    const map = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const [a, b] = prerequisites[i];
        inDegree[a]++;
        if (map[b]) {
            map[b].push(a);
        } else {
            map[b] = [a];
        }
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        const selected = queue.shift();
        count++;
        const toEnQueue = map[selected];
        if (toEnQueue && toEnQueue.length) {
            for (let i = 0; i < toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--;
                if (inDegree[toEnQueue[i]] === 0) queue.push(toEnQueue[i]);
            }
        }
    }
    return count === numCourses;
};