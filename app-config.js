window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  customizationService: {},
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  experimentalStudyBrowserSort: false,
  strictZSpacingForVolumeViewport: true,
  groupEnabledModesFirst: true,
  maxNumRequests: {
    interaction: 100,
    thumbnail: 75,
    prefetch: 25,
  },
  defaultDataSourceName: 'unimalia',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'unimalia',
      configuration: {
        friendlyName: 'UNIMALIA Orthanc',
        name: 'unimalia',
        wadoUriRoot: 'https://unimalia-imaging.onrender.com/orthanc/wado',
        qidoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        wadoRoot: 'https://unimalia-imaging.onrender.com/orthanc/dicom-web',
        qidoSupportsIncludeField: true,
        supportsReject: false,
        supportsStow: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: false,
        staticWado: false,
        singlepart: 'bulkdata,video',
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
        },
        omitQuotationForMultipartRequest: true,
      },
    },
  ],
  httpErrorHandler: error => {
    console.warn(error.status);
    console.warn(error);
  },
};