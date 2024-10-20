
const API_URL = 'https://api.beta.gameservertracker.io';

const serverTypes: Record<string, string> = {
    "mc": "minecraft",
    "mcbedrock": "minecraft/bedrock",
    "source": "source",
    "fivem": "fivem",
    "fivemCfx": "fivem/cfx"
};

async function fetchServerPlayers(address: string, type: string) {
    try {
        const response = await fetch(`${API_URL}/${serverTypes[type]}/players/${address}`);
        const data = await response.json();
        return data.players;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchServerData(address: string, type: string) {
    const response = await fetch(`${API_URL}/${serverTypes[type]}/${address}`);
    const data = await response.json();

    if (type === "source") {
        const playersList = await fetchServerPlayers(address, type);
        if (playersList) {
            data.players.list = playersList;
        }
    }
    return data;
}