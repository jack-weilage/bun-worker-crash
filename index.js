import { Worker } from "worker_threads";

async function run() {
	for (let i = 0; i < 1_000; i++) {
		await new Promise((resolve) => {
			const worker = new Worker("./worker.js");

			worker.on("message", () => resolve(1));
		});

		console.log(i);
	}
}

run();
