export default class NetIdeExternalOpener {
    constructor() {

    }

    spawnWorkspaceFromUrl(workspaceUrl) {
        try {
            openLinksApi.spawnWorkspaceFromUrl(workspaceUrl);
        }
        catch(error) {
            let errorMsg = error.message ? error.message : error.toString();
            if(error.stack) console.error(error.stack);
            apogeeUserAlert("Error opeing web link: " + errorMsg);
        }
    }

    openWebLink(url) {
        try {
            openLinksApi.openWebLink(url);
        }
        catch(error) {
            let errorMsg = error.message ? error.message : error.toString();
            if(error.stack) console.error(error.stack);
            apogeeUserAlert("Error opeing web link: " + errorMsg);
        }
    }
}