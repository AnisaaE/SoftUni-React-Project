export function Error() {
    return (
       <div class="container">
<h1 class="error-code">404</h1>
<p class="error-message">Oops! The page you are looking for could not be found.</p>
<button class="back-button" onclick="window.history.back()">Go Back</button>

</div>
    );
  }