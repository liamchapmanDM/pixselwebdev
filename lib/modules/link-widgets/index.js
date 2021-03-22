module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Main Banner',
  addFields: [
      {
          name: 'banners',
          label: 'Banners',
          type: 'array',
          titleField: 'banner',
          limit: 5,
          schema: [
              {
                  type: 'string',
                  name: 'quote',
                  label: 'Quote',
                  max: 150
              },
              {
                  type: 'singleton',
                  name: 'bannerImage',
                  label: 'Image',
                  widgetType: 'apostrophe-images',
                  options: {
                      limit: 1,
                      fileGroups: 'image'
                  },
                  required: true
              }
          ]
      }
  ],

  construct: function (self, options) {
      self.pushAsset('stylesheet', 'always', {when: 'always'});
      self.pushAsset('script', 'always', { when: 'always' });
  }
};