/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0

  Welcome Workshopper!
  This is the application configuration file.

  This is the ONLY file you need to modify in the front-end application.
  Each section is separated by MODULE # for you to modify.
*/

export const appConfig = {
  // MODULE 1- BACKEND
  initStateAPI: 'https://r195bd9nyf.execute-api.us-west-2.amazonaws.com/Prod/InitState/', // e.g. https://12abcdef89.execute-api.us-west-2.amazonaws.com/Prod/InitState/
  // MODULE 2 - REALTIME
  iot: {
    poolId: '', // e.g. 'us-west-2:1abcdef-1234-abcd-1234-abcde123456'
    host: '', // e.g. 'ab12ab12abcde.iot.us-east-1.amazonaws.com'
    region: '' // e.g. 'us-west-1'
  },
  // MODULE 3 - PHOTOS
  photoUploadURL: '', // e.g. https://12abcdfg89.execute-api.us-west-2.amazonaws.com/Prod/Upload
  //
  // Don't modify anything below this comment!
  //
  images: {
    parkMapURL: 'https://d15l97sovqpx31.cloudfront.net/images/theme-park-map-large.jpg',
    logoURL: 'https://da-public-assets.s3.amazonaws.com/innovator-island/innovator-island-logo-150px.png'
  },
  icons: {
    restroom: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-restroom.png',
    dining: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-dining.png',
    atm: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-atm.png'
  }
}
