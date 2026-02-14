import { initializeSiteContent } from "./src/app/action/home";

async function run() {
    console.log("Initializing PT MES professional copy...");
    const result = await initializeSiteContent();
    if (result.success) {
        console.log("Success! Database updated with new copy.");
    } else {
        console.error("Failed:", result.error);
    }
    process.exit(0);
}

run();
