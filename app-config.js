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
        qidoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        wadoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        wadoUriRoot: 'https://unimalia-imaging.onrender.com/orthanc/wado',
        qidoSupportsIncludeField: true,
        supportsReject: false,
        supportsStow: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    },
  ],
};