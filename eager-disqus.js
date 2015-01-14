window.EagerDisqus = {
  init: function(element, options) {
    if (!element) return;
    if (options.disqusShortName === '--new--') return;
    
    options.disqusShortName = options.disqusShortName || '';

    element.innerHTML = '' +
      '<div id="disqus_thread"></div>' +
      '<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>';

    window.disqus_shortname = options.disqusShortName;

    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + options.disqusShortName + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
};
