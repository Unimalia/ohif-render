window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'UNIMALIA Orthanc',
        qidoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',
        wadoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',
        wadoUriRoot: 'https://orthanc-unimalia.onrender.com/wado',
        qidoSupportsIncludeField: true,
        supportsReject: false,
        supportsStow: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    },
  ],
};