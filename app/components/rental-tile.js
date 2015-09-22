import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm("Are you sure?")) {
        this.sendAction('destroyRental', rental);
      }
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
