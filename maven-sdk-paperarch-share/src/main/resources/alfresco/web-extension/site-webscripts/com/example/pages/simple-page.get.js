model.jsonModel = {
	
	/*rootNodeId: "share-header",*/
	/*services: getHeaderServices(),*/
    widgets: [{
        id: "SET_PAGE_TITLE",
        name: "alfresco/header/SetTitle",
        config: {
            title: "Alfresco Tutorial sample page"
        }
    },
        {
            id: "MY_HORIZONTAL_WIDGET_LAYOUT",
            name: "alfresco/layout/HorizontalWidgets",
            config: {
                widgetWidth: 50,
                widgets: [
                    {
                        id: "DEMO_SIMPLE_LOGO",
                        name: "alfresco/logo/Logo",
                        config: {
                            logoClasses: "alfresco-logo-only"
                        }
                    }, 
                    {
                        id: "DEMO_SIMPLE_MSG",
                        name: "tutorials/widgets/TemplateWidget"
                    }
                ]
            }
        }]
};
