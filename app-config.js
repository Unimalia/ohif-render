window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'orthanc',
      configuration: {
        friendlyName: 'UNIMALIA Orthanc',
        name: 'orthanc',
        qidoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',
        wadoRoot: 'https://orthanc-unimalia.onrender.com/dicom-web',
        wadoUriRoot: 'https://orthanc-unimalia.onrender.com/wado',
        supportsWildcard: true,
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        omitQuotationForMultipartRequest: true,
      },
    },
  ],
  defaultDataSourceName: 'orthanc',
};