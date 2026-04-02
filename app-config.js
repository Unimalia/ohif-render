window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,

  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Orthanc',

        wadoUriRoot: 'https://orthanc-unimalia.onrender.com/wado',
        qidoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',
        wadoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',

        qidoSupportsIncludeField: true,
        supportsReject: false,
        supportsStow: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    },
  ],
};