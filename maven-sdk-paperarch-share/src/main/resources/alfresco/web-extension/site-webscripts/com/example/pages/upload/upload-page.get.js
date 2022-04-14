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
    {
        id:'Custom page',
        name:'tutorials/widgets/TemplateWidget',
    }
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
