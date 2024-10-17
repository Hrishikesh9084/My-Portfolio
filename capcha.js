function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6LfGlCEqAAAAACkfIPemEtt10Qi8LNrszpGcu0mp', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
      });
    });
  }