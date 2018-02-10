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
    async tables () {
        if (redisConnect === null) {
            await connect();
        }
        redisConnect.command('CONFIG GET db', function(res) {
            console.log(res);
        });
    }
}