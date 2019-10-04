import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from './title-bar';

import './default.component.css';
DocumentEditorContainerComponent.Inject(Toolbar);

// tslint:disable:max-line-length
export class BulletsAndNumberingView extends SampleBase<{}, {}> {
    private hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
    public container: DocumentEditorContainerComponent;
    public titleBar: TitleBar;
    public rendereComplete(): void {
        this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
        this.container.documentEditor.pageOutline = '#E0E0E0';
        this.container.documentEditor.acceptTab = true;
        this.container.documentEditor.resize();
        this.titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), this.container.documentEditor, true);
        this.onLoadDefault();
    }
    render() {
        return (<div className='control-pane'>
            <div className='control-section'>
                <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
                <div id="documenteditor_container_body">
                    <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }} style={{ 'display': 'block', 'height': '590px' }}
                        enableToolbar={true} locale='en-US'  />
                </div>
            </div>
            <div id="action-description">
                <p>This example demonstrates bullets and numbering support in document editor. Both single list and multi-level lists are supported.</p>
            </div>
            <div id="description">
                <div>
                    <p>In this example, you can use, add, or modify the list formatting in document editor.</p>
                    <p style={{ 'display': 'block' }}> More information about the document editor features can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/document-editor/">documentation section.</a>
                    </p>
                </div>
            </div>
            <script>{
                window.onbeforeunload = function () {
                    return 'Want to save your changes?';
                }
            }
            </script>
        </div>);
    }
    onLoadDefault = (): void => {
        // tslint:disable
        let defaultDocument: object = { "sections": [{ "blocks": [{ "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "Types of Animals", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Mammals", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by hair or fur" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "warm-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "produce milk" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Tiger" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Bat" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Reptiles", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by scales" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "cold-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most lay " }, { "text": "hard-shelled" }, { "text": " eggs on land" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Snake" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Lizard" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Birds", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by feathers" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "warm-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "lay eggs" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Pigeon" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Hen" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Insects", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most are small air-breathing animals" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "6 legs" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "2 antennae" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "3 body sections (head, thorax, abdomen)" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Butterfly" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Spider" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Aquatic Animals", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most have gills" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "found in lakes, rivers, and oceans" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Blue Shark" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Fish" }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "lists": [{ "listId": 0, "abstractListId": 0 }], "abstractLists": [{ "abstractListId": 0, "levels": [{ "startAt": 1, "restartLevel": 0, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.", "characterFormat": { "bold": true, "italic": false }, "paragraphFormat": { "leftIndent": 18.0, "firstLineIndent": -18.0 } }, { "startAt": 1, "restartLevel": 1, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.", "characterFormat": { "bold": false, "italic": true }, "paragraphFormat": { "leftIndent": 39.599998474121094, "firstLineIndent": -21.600000381469727 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 61.200000762939453, "firstLineIndent": -25.200000762939453 } }, { "startAt": 1, "restartLevel": 3, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.", "paragraphFormat": { "leftIndent": 86.4000015258789, "firstLineIndent": -32.400001525878906 } }, { "startAt": 1, "restartLevel": 4, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.", "paragraphFormat": { "leftIndent": 111.59999847412109, "firstLineIndent": -39.599998474121094 } }, { "startAt": 1, "restartLevel": 5, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.", "paragraphFormat": { "leftIndent": 136.80000305175781, "firstLineIndent": -46.799999237060547 } }, { "startAt": 1, "restartLevel": 6, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.", "paragraphFormat": { "leftIndent": 162.0, "firstLineIndent": -54.0 } }, { "startAt": 1, "restartLevel": 7, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.", "paragraphFormat": { "leftIndent": 187.19999694824219, "firstLineIndent": -61.200000762939453 } }, { "startAt": 1, "restartLevel": 8, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.%9.", "paragraphFormat": { "leftIndent": 216.0, "firstLineIndent": -72.0 } }] }], "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "List Paragraph", "basedOn": "Normal", "next": "List Paragraph", "paragraphFormat": { "leftIndent": 36.0 } }] };
        // tslint:enable
        this.container.documentEditor.open(JSON.stringify(defaultDocument));
        this.container.documentEditor.documentName = 'Bullets and Numbering';
        this.titleBar.updateDocumentTitle();
        this.container.documentChange = (): void => {
        this.titleBar.updateDocumentTitle();
        this.container.documentEditor.focusIn();
        };
    }
}