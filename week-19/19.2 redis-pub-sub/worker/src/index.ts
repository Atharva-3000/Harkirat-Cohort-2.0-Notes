import { createClient } from "redis";


const client = createClient();



async function lpop() {
    await client.connect();
    // let i = 5;
    while (true) {
        const response = await client.brPop("submissions", 0);
        console.log(response)
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        })
        console.log("Problem under submission");
        // i--;
    }
}

lpop();