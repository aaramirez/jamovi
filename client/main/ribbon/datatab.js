
'use strict';

const $ = require('jquery');

const RibbonButton = require('./ribbonbutton');
const RibbonSeparator = require('./ribbonseparator');
const RibbonGroup = require('./ribbongroup');

const DataTab = function() {
    this.name = "data";

    this.title = "Data";

    this.getRibbonItems = function(ribbon) {
        return [
            new RibbonGroup({ title: 'Clipboard', items: [
                new RibbonButton({ title: 'Paste', name: 'paste', size: 'large' }),
                new RibbonGroup({ orientation: 'vertical', items: [
                    new RibbonButton({ title: 'Cut', name: 'cut', size: 'small' }),
                    new RibbonButton({ title: 'Copy', name: 'copy', size: 'small' })
                ]})
            ]}),
            new RibbonSeparator(),
            new RibbonGroup({ title: 'Variables', items: [
                new RibbonButton({ title: 'Setup', name: 'editVar', size: 'large' }),
                new RibbonGroup({ orientation: 'vertical', items: [
                    new RibbonButton({ title: 'Add', name: 'addVar', subItems: [
                        new RibbonButton({ title: 'Insert', name: 'insertVar' }),
                        new RibbonButton({ title: 'Append', name: 'appendVar' }),
                    ]}),
                    new RibbonButton({ title: 'Delete', name: 'delVar' }),
                ]})
            ]}),
            new RibbonSeparator(),
            new RibbonGroup({ title: 'Rows', items : [
                new RibbonGroup({ orientation: 'vertical', items: [
                    new RibbonButton({ title: 'Add', name: 'addRow', subItems: [
                        new RibbonButton({ title: 'Insert', name: 'insertRow' }),
                        new RibbonButton({ title: 'Append', name: 'appendRow' }),
                    ]}),
                    new RibbonButton({ title: 'Delete', name: 'delRow' }),
                ]})
            ]})
        ];
    };
};

module.exports = DataTab;
