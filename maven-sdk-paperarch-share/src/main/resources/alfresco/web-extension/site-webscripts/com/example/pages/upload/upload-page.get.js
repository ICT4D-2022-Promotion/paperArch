model.jsonModel = {
  /*rootNodeId: "share-header",*/
  /*services: getHeaderServices(),*/
  widgets: [
    {
      id: 'SET_PAGE_TITLE',
      name: 'alfresco/header/SetTitle',
      config: {
        title: 'files upload page',
      },
    },
    // {
    //     id:'Custom page',
    //     name:'tutorials/widgets/TemplateWidget',
    // },
    {
      id: 'PARENT_BUTTON_NAV',
      name: 'alfresco/buttons/AlfButton',
      config: {
        label: 'Go to parent folder',
        iconClass: 'alf-folder-up-icon',
        publishTopic: 'ALF_DOCLIST_PARENT_NAV',
      },
    },
    {
      id: 'DOCUMENT_LIST',
      name: 'alfresco/documentlibrary/AlfDocumentList',
      config: {
        rootNode: 'alfresco://user/home',
        rawData: true,
        widgets: [
          {
            name: 'alfresco/documentlibrary/views/AlfSimpleView',
          },
        ],
      },
    },
    {
      id: 'DOCUMENT_SERVICE',
      name: 'alfresco/services/DocumentService',
    },
    {
      name: 'alfresco/documentlibrary/AlfDocumentList',
      config: {
        rootNode: 'alfresco://user/home',
        rawData: true,
        widgets: [
          {
            name: 'alfresco/documentlibrary/views/AlfSimpleView',
          },
        ],
      },
    },
    {
      name:'alfresco/services/ActionService',
    },
    {
      name:'alfresco/services/DialogService',
    },
    {
      name:'alfresco/services/UploadService',
    },

    // {
    //   id: 'MY_HORIZONTAL_WIDGET_LAYOUT',
    //   name: 'alfresco/layout/HorizontalWidgets',
    //   config: {
    //     widgetWidth: 50,
    //     widgets: [
    //       {
    //         id: 'DEMO_SIMPLE_LOGO',
    //         name: 'alfresco/logo/Logo',
    //         config: {
    //           // logoClasses: "alfresco-logo-only",
    //           src: './images/app-logo.png',
    //           widgets: [
    //             {
    //               id: 'label',
    //               name: 'alfresco/html/Label',
    //               config: { label: 'Upload page' },
    //             },
    //           ],
    //         },
    //       },
    //       {
    //         id: 'DEMO_SIMPLE_MSG',
    //         name: 'tutorials/widgets/TemplateWidget',
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 'CHECK_BOX',
    //   name: 'alfresco/forms/controls/CheckBox',
    //   config: [
    //     {
    //       Text: 'banane',
    //     },
    //   ],
    // },
    // {
    //   id: 'DRAG_PALETTE',
    //   name: 'alfresco/creation/DragPalette',
    // },
  ],
}
