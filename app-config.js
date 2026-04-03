window.config = {
  routerBasename: '/',
  showStudyList: true,
  defaultDataSourceName: 'unimalia',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'unimalia',
      configuration: {
        friendlyName: 'UNIMALIA Orthanc',
        name: 'unimalia',
        qidoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        wadoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        wadoUriRoot: 'https://unimalia-imaging.onrender.com/orthanc/wado',
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    },
  ],
};