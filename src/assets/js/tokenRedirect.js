if (window.location.hash.includes('_token=')) {
	window.location.replace('/admin/' + window.location.hash)
  }