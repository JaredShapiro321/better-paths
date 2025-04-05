function main() {
    context.executeAction("cheatset", {type: 50, param1: 1, param2: 0});

    objectManager.load("openrct2.footpath_surface.invisible");
    objectManager.load("openrct2.footpath_surface.queue_invisible");
    objectManager.load("openrct2.footpath_railings.invisible");
}

registerPlugin({
    name: 'Better Paths',
    version: '1.0',
    authors: ['Jared Shapiro'],
    type: 'remote',
    licence: 'GNU General Public License version 3.0',
    targetApiVersion: 34,
    minApiVersion: 34,
    main: main
});