import redis from 'redis';

var redisConnect = null;

let connect = async () => {
    return new Promise((resolve, reject) => {
        redisConnect = redis.createClient();
        redisConnect.on("connect", function() {
            resolve()
        }, function () {
            reject()
        });
    });
};

export default {
    async connect() {
        if (redisConnect === null) {
            await connect();
            return true;
        }
    },
    async tables () {
        if (redisConnect === null) {
            await connect();
        }
        return new Promise((resolve, reject) => {
            redisConnect.CONFIG('GET', 'databases', (err, res) => {
                resolve(res[1]);
            });
        })
    }
}