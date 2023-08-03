const sum = (...arr) => {
    return arr.reduce((ttl,num) => 
        ttl + num
    )
}
console.log(sum(10,5,15));
module.exports = sum;