
const API_URL = 'https://api.beta.gameservertracker.io';

const serverTypes: Record<string, string> = {
    "mc": "minecraft",
    "mcbedrock": "minecraft/bedrock",
    "source": "source",
    "fivem": "fivem"
};

export async function fetchServerData(address: string, type: string) {
    const response = await fetch(`${API_URL}/${serverTypes[type]}/${address}`);
    const data = await response.json();
    return data;
}