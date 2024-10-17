function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LfGlCEqAAAAACkfIPemEtt10Qi8LNrszpGcu0mp', {action: 'LOGIN'});
    });
}