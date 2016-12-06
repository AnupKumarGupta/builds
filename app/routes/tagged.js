import Ember from 'ember';
import S3Bucket from 'builds/lib/s3-bucket';

export default Ember.Route.extend({
  model() {
    return S3Bucket.create({
      title: 'Tagged Release Builds',
      prefix: 'tags/v',
      delimiter: ''
    });
  }
});
